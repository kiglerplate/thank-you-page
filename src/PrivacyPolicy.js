import React from 'react';

function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1>מדיניות פרטיות</h1>
      <p>כאן יופיע התוכן של מדיניות הפרטיות.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
};

export default PrivacyPolicy;