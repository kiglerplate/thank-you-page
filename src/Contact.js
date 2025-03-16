import React from "react";

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>צור קשר</h1>
      <p style={styles.description}>
        אנחנו כאן כדי לעזור! ניתן ליצור איתנו קשר באמצעות הפרטים הבאים:
      </p>

      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <span style={styles.icon}>📞</span>
          <a href="tel:0507353157" style={styles.link}>
            0507353157
          </a>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.icon}>✉️</span>
          <a href="mailto:kiglerr@gmail.com" style={styles.link}>
            kiglerr@gmail.com
          </a>
        </div>
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
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    fontSize: "1.5rem",
  },
  link: {
    fontSize: "1.2rem",
    color: "#007bff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#0056b3",
  },
};

export default Contact;
