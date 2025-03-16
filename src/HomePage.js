import React from "react";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ברוכים הבאים לאתר שלנו!</h1>
      <p style={styles.description}>
        כאן תוכלו למצוא את כל המידע והשירותים שאתם צריכים. אנחנו כאן כדי לעזור
        לכם.
      </p>
      <div style={styles.buttons}>
        <a href="/contact" style={styles.button}>
          צור קשר
        </a>
        <a href="/terms-of-service" style={styles.button}>
          תנאי שימוש
        </a>
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
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "700",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  buttons: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default HomePage;
