import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#07070F',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="26" height="22" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="20" x2="60" y2="140" stroke="#3ED9B8" strokeWidth="18" strokeLinecap="round" />
          <line x1="60" y1="140" x2="100" y2="60" stroke="#3ED9B8" strokeWidth="18" strokeLinecap="round" />
          <line x1="100" y1="60" x2="140" y2="140" stroke="#3ED9B8" strokeWidth="18" strokeLinecap="round" />
          <line x1="140" y1="140" x2="190" y2="20" stroke="#3ED9B8" strokeWidth="18" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
