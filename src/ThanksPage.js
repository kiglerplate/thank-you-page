import React from "react";

function ThanksPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>תודה על הרכישה! 🎉</h1>
        <p style={styles.message}>
          אנחנו מעריכים את הרכישה שלך ומקווים שתהנה מהחוויה בואו נגדיל את
          המכירות באתר
        </p>
        <p style={styles.subMessage}>
          אתה יכול לחזור לאפליקצייה באתר הוויקס ולהגדיר את האוטומציה
        </p>
        {/* אם אתה לא רוצה את הכפתור, תוכל להסיר אותו */}
        {/* <button
          style={styles.button}
          onClick={() => (window.location.href = "/")}
        >
          חזרה לדף הבית
        </button> */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: '"Open Sans", sans-serif',
    textAlign: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "500px",
    width: "100%",
    animation: "fadeIn 1s ease-in-out",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "700",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "10px",
    lineHeight: "1.6",
  },
  subMessage: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
};

export default ThanksPage;
