import React from 'react';

function TermsOfService() {
  return (
    <div style={styles.container}>
      <h1>תנאי שימוש</h1>
      <p>כאן יופיע התוכן של תנאי השימוש.</p>
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

export default TermsOfService;