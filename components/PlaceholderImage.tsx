// ============================================================
// PLACEHOLDER IMAGE
// A grey box that displays the image filename as a label.
// Used until real project images are added to /public/images/
//
// When you're ready to swap in real images, just replace this
// component with a standard <img> or next/image call —
// everything else stays the same.
// ============================================================

interface PlaceholderImageProps {
  filename: string
  /** Optional aspect ratio string like "16/9" or "4/3". Defaults to 'auto' */
  aspectRatio?: string
  /** Optional className for wrapper */
  className?: string
}

export default function PlaceholderImage({
  filename,
  aspectRatio,
  className = '',
}: PlaceholderImageProps) {
  const style: React.CSSProperties = aspectRatio
    ? { aspectRatio, minHeight: 'unset' }
    : { minHeight: '240px' }

  return (
    <div
      className={`placeholder-img w-full ${className}`}
      style={style}
      aria-label={filename}
    >
      <span
        style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.04em',
          color: '#6b7280',
          padding: '8px 12px',
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '3px',
          maxWidth: '80%',
          wordBreak: 'break-all',
          textAlign: 'center',
        }}
      >
        {filename}
      </span>
    </div>
  )
}
