export default function PhoneSide({ greeting, userMessage, userMsgColor }) {
  return (
    <div className="phone-shell" style={{ width: '100%', height: '100%' }}>
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
          {/* Signal bars */}
          <svg width="14" height="10" viewBox="0 0 16 12" fill="#333">
            <rect x="0" y="9" width="3" height="3" rx="0.5" />
            <rect x="4.5" y="6" width="3" height="6" rx="0.5" />
            <rect x="9" y="3" width="3" height="9" rx="0.5" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
          </svg>
          {/* Battery */}
          <svg width="18" height="9" viewBox="0 0 25 12" fill="none" stroke="#333" strokeWidth="1.2">
            <rect x="1" y="1" width="20" height="10" rx="2.5" />
            <rect x="3" y="3" width="14" height="6" rx="1" fill="#333" stroke="none" />
            <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="#333" stroke="none" />
          </svg>
        </div>
      </div>

      {/* Chat Header */}
      <div
        style={{
          padding: '8px 14px 8px',
          borderBottom: '0.5px solid #f0f0f0',
          fontFamily: 'var(--font-display)',
          fontSize: 10,
          fontWeight: 700,
          color: '#111',
        }}
      >
        Chat GPT GO
      </div>

      {/* Chat Body */}
      <div style={{ padding: '10px 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* AI Bubble */}
        <div
          style={{
            background: '#f5f5f5',
            borderRadius: '10px 10px 10px 3px',
            padding: '7px 10px',
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: '#333',
            lineHeight: 1.5,
            maxWidth: '85%',
          }}
        >
          {greeting}
        </div>

        {/* User Bubble */}
        <div
          style={{
            background: userMsgColor.bg,
            color: userMsgColor.color,
            borderRadius: '10px 10px 3px 10px',
            padding: '7px 10px',
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            lineHeight: 1.5,
            maxWidth: '85%',
            alignSelf: 'flex-end',
          }}
        >
          {userMessage}
        </div>
      </div>

      {/* Input Bar */}
      <div style={{ padding: '8px 10px 12px', marginTop: 'auto' }}>
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
          Ask anything...
        </div>
      </div>
    </div>
  );
}
