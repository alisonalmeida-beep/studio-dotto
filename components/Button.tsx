import React from 'react';

type Variant = 'primary' | 'ghost' | 'cta' | 'secondary';

const variantClass: Record<Variant, string> = {
  cta:       'btn btn--cta',
  primary:   'btn btn--primary',
  ghost:     'btn btn--ghost',
  secondary: 'btn btn--secondary',
};

type BaseProps = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

type LinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  disabled?: never;
  'aria-label'?: string;
};

type ButtonElProps = BaseProps & {
  href?: never;
  target?: never;
  rel?: never;
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
};

type Props = LinkProps | ButtonElProps;

export default function Button({ variant = 'primary', children, className, id, style, ...rest }: Props) {
  const cls = [variantClass[variant], className].filter(Boolean).join(' ');

  if ('href' in rest && rest.href) {
    const { href, target, rel, 'aria-label': ariaLabel } = rest as LinkProps;
    return (
      <a href={href} target={target} rel={rel} className={cls} id={id} style={style} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  const { onClick, disabled, 'aria-label': ariaLabel } = rest as ButtonElProps;
  return (
    <button onClick={onClick} disabled={disabled} className={cls} id={id} style={style} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
