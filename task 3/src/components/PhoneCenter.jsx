import GradientOrb from './GradientOrb';
import { CENTER_PHONE } from '../constants/content';

export default function PhoneCenter() {
  return (
    <div className="phone-shell phone-center" style={{ width: '100%', height: '100%' }}>
      {/* Dynamic Island */}
      <div className="dynamic-island" />

      {/* Status Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 14px 4px',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: '#333',
        }}
      >
        <span>9:41</span>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {/* WiFi icon */}
          <svg width="12" height="10" viewBox="0 0 16 12" fill="#333">
            <path d="M8 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3.5-2.8a5 5 0 017 0 .75.75 0 01-1.06 1.06 3.5 3.5 0 00-4.88 0A.75.75 0 014.5 7.7zm-2.5-2.5a8 8 0 0112 0 .75.75 0 01-1.12 1A6.5 6.5 0 003.12 6.2.75.75 0 012 5.2z" />
          </svg>
          {/* Battery */}
          <svg width="18" height="9" viewBox="0 0 25 12" fill="none" stroke="#333" strokeWidth="1.2">
            <rect x="1" y="1" width="20" height="10" rx="2.5" />
            <rect x="3" y="3" width="14" height="6" rx="1" fill="#333" stroke="none" />
            <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="#333" stroke="none" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 14px 16px',
          textAlign: 'center',
          flex: 1,
          minHeight: 220,
        }}
      >
        <GradientOrb />

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 11,
            fontWeight: 600,
            color: '#111',
            marginTop: 16,
          }}
        >
          {CENTER_PHONE.question}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: '#aaa',
            marginTop: 4,
          }}
        >
          {CENTER_PHONE.subtitle}
        </p>
      </div>

      {/* Input Bar */}
      <div style={{ padding: '0 10px 12px' }}>
        <div
          style={{
            background: '#f9f9f9',
            border: '0.5px solid #e8e8e8',
            borderRadius: 999,
            padding: '8px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: '#aaa',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span style={{ fontSize: 12, opacity: 0.5 }}>+</span>
          {CENTER_PHONE.placeholder.replace('+ ', '')}
        </div>
      </div>
    </div>
  );
}
