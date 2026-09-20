'use client';

import { useEffect, useRef } from 'react';
import BP from '@/lib/basePath';

type Props = {
  src: string;
  width: number;
  height: number;
  label: string;
  className?: string;
  // Só carrega e toca enquanto o cursor estiver sobre o card pai (.projeto-card).
  playOnHover?: boolean;
};

// Substitui GIFs pesados: o vídeo só é baixado perto da viewport (ou no hover) e pausa fora dela.
export default function LazyVideo({ src, width, height, label, className, playOnHover }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const url = `${BP}${src}`;

    function load() {
      if (!video!.getAttribute('src')) video!.setAttribute('src', url);
    }

    if (playOnHover) {
      const card = video.closest('.projeto-card');
      if (!card) return;
      const onEnter = () => { load(); video.play().catch(() => {}); };
      const onLeave = () => { video.pause(); video.currentTime = 0; };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      return () => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
      };
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        load();
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { rootMargin: '300px 0px' });
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, playOnHover]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-label={label}
      style={playOnHover ? { width: '100%', height: '100%', objectFit: 'cover' } : { aspectRatio: `${width} / ${height}` }}
    />
  );
}
