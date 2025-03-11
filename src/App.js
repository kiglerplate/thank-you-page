import React from 'react';

function App() {
  return (
    <div style={styles.container}>
    <h1>תודה על הרכישה!</h1>
    <p>אנחנו מעריכים את הרכישה שלך ומקווים שנהנית מהחוויה.</p>
    {/* אם אתה לא רוצה את הכפתור, תוכל להסיר אותו */}
   
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
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

export default App;