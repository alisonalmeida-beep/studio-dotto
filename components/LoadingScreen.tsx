'use client'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 2000)
    const t2 = setTimeout(() => setGone(true), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <svg
        width="80"
        height="58"
        viewBox="0 0 732 529"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="orange-reveal">
            <rect x="0" y="529" width="732" height="529">
              <animate attributeName="y" from="529" to="0" dur="1.5s" fill="freeze" begin="0.3s" />
              <animate attributeName="height" from="0" to="529" dur="1.5s" fill="freeze" begin="0.3s" />
            </rect>
          </clipPath>
        </defs>

        {/* base cinza */}
        <g fill="#E2DED7">
          <rect x="562" y="153" width="376" height="95" rx="47.5" transform="rotate(90 562 153)" />
          <rect x="265" y="153" width="376" height="95" rx="47.5" transform="rotate(90 265 153)" />
          <rect x="548" width="184" height="95" rx="47.5" />
          <rect x="257" y="2" width="218" height="95" rx="47.5" />
          <rect width="184" height="95" rx="47.5" />
        </g>

        {/* preenchimento laranja revelado de baixo para cima */}
        <g fill="#FF7B00" clipPath="url(#orange-reveal)">
          <rect x="562" y="153" width="376" height="95" rx="47.5" transform="rotate(90 562 153)" />
          <rect x="265" y="153" width="376" height="95" rx="47.5" transform="rotate(90 265 153)" />
          <rect x="548" width="184" height="95" rx="47.5" />
          <rect x="257" y="2" width="218" height="95" rx="47.5" />
          <rect width="184" height="95" rx="47.5" />
        </g>
      </svg>
    </div>
  )
}
