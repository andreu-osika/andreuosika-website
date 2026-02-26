'use client'

import Link from 'next/link'

interface BackArrowProps {
  href?: string
  theme?: 'dark' | 'light'
}

export default function BackArrow({ href = '/', theme = 'dark' }: BackArrowProps) {
  return (
    <div
      className="fixed top-0 z-[2000] mt-[74px]"
      style={{
        left: 'max(20px, calc(50% - 700px - 100px))',
        width: 'auto',
      }}
    >
      <div className="flex items-center justify-center w-[60px] h-[44px]">
        <Link
          href={href}
          className={`back-arrow-btn back-arrow-${theme} block w-[60px] h-[44px]`}
          aria-label="Back to home"
        >
          <svg
            width="60"
            height="44"
            viewBox="0 0 60 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.76551 20.9672L24.2327 0.5H21.4026L0 21.9026L21.5026 43.5172H24.3257L3.88155 22.968H60V20.9672H3.76551Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
