import React from 'react';

function HomePage() {
  return (
    <div style={styles.container}>
      <h1>תודssה על הרכישה!</h1>
      <p>אנחנו מעריכים את הרכישה שלך ומקווים שנהנית מהחוויה.</p>
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

export default HomePage;