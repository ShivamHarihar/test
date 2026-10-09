import React, { useState } from 'react';

/**
 * Sample React Component showcasing modern hooks, state management,
 * and an interactive UI card.
 */
export default function App() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <div style={styles.badge}>React Component</div>
        <h1 style={styles.title}>Hello, React! 🚀</h1>
        <p style={styles.description}>
          This is a sample React component featuring interactive state hooks,
          modern styling, and reactive button actions.
        </p>

        {/* Counter Section */}
        <section style={styles.counterSection}>
          <p style={styles.counterLabel}>Current Count</p>
          <div style={styles.counterDisplay}>{count}</div>
          <div style={styles.buttonGroup}>
            <button
              type="button"
              id="decrement-btn"
              style={{ ...styles.button, ...styles.secondaryButton }}
              onClick={() => setCount((prev) => prev - 1)}
            >
              - Decrease
            </button>
            <button
              type="button"
              id="reset-btn"
              style={{ ...styles.button, ...styles.subtleButton }}
              onClick={() => setCount(0)}
            >
              Reset
            </button>
            <button
              type="button"
              id="increment-btn"
              style={{ ...styles.button, ...styles.primaryButton }}
              onClick={() => setCount((prev) => prev + 1)}
            >
              + Increase
            </button>
          </div>
        </section>

        {/* Action Toggle */}
        <footer style={styles.footer}>
          <button
            type="button"
            id="like-toggle-btn"
            style={{
              ...styles.likeButton,
              backgroundColor: liked ? '#ef4444' : '#27272a',
              color: '#ffffff',
            }}
            onClick={() => setLiked((prev) => !prev)}
          >
            {liked ? '❤️ Favorited' : '🤍 Add to Favorites'}
          </button>
        </footer>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09090b',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#fafafa',
    padding: '24px',
  },
  card: {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '440px',
    width: '100%',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: '#3b82f620',
    color: '#60a5fa',
    border: '1px solid #3b82f640',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 12px 0',
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: '14px',
    color: '#a1a1aa',
    lineHeight: 1.6,
    margin: '0 0 24px 0',
  },
  counterSection: {
    backgroundColor: '#27272a50',
    border: '1px solid #27272a',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
  },
  counterLabel: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: '#71717a',
    letterSpacing: '0.05em',
    margin: '0 0 8px 0',
  },
  counterDisplay: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#60a5fa',
    margin: '0 0 16px 0',
    fontVariantNumeric: 'tabular-nums',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
  },
  button: {
    padding: '8px 14px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.15s ease',
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
  },
  secondaryButton: {
    backgroundColor: '#3f3f46',
    color: '#fafafa',
  },
  subtleButton: {
    backgroundColor: 'transparent',
    color: '#a1a1aa',
    border: '1px solid #3f3f46',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  likeButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    border: '1px solid #3f3f46',
    transition: 'all 0.2s ease',
  },
};
