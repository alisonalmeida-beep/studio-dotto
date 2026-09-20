import { Fragment } from 'react';

// Texto dos dicionários: "\n" vira <br /> e *trecho* vira <span> (destaque em laranja no Hero).
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split(/\*([^*]+)\*/).map((part, j) => (j % 2 === 1 ? <span key={j}>{part}</span> : part))}
        </Fragment>
      ))}
    </>
  );
}
