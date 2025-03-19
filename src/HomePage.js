import React from "react";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ברוכים הבאים Warm light !</h1>
      <p style={styles.description}>
        כאן תוכלו למצוא את כל המידע והשירותים שאתם צריכים. אנחנו כאן כדי לעזור
        לכם
      </p>
      <div style={styles.buttons}>
        <a
          href="https://manage.wix.com/dashboard/e7b7dc50-1581-49cd-b2e2-9c69c9b791f5/app-market/8c79b733-63bc-425c-8855-d925d8dbb6c6/overview?appMarketParams=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiYXBwRGVmSWRcIjpcIjhjNzliNzMzLTYzYmMtNDI1Yy04ODU1LWQ5MjVkOGRiYjZjNlwiLFwic2hvdWxkRWRpdG9ySW5zdGFsbFwiOmZhbHNlLFwicm91dGVcIjpcInRlc3RBcHBcIixcInZlcnNpb25cIjpcImxhdGVzdFwifSIsImlhdCI6MTc0MjI0MzM3Mn0.ULlMt_EV6dyV1qelGryk9X_zuQCk61c-EnQj79onjYg"
          style={styles.button}
          target="_blank" // כדי לפתוח את הקישור בלשונית חדשה
          rel="noopener noreferrer" // מומלץ להוסיף מסיבות אבטחה
        >
           כניסה לאפליקצייה WIX
        </a>
      </div>

      {/* הוספת סעיף שירותים */}
      <div style={styles.servicesSection}>
        <h2 style={styles.servicesTitle}>השירותים שלנו</h2>
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>שירות 1</h3>
            <p style={styles.serviceDescription}>
אוטומצייה שליחת הודעה לאחר רכישה
            </p>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>שירות 2</h3>
            <p style={styles.serviceDescription}>
            אוטומצייה שליחת הודעה  נטישת עגלה
            </p>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>שירות 3</h3>
            <p style={styles.serviceDescription}>
ועוד המון מגוון של אוטומציות            </p>
          </div>
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
  buttons: {
    display: "flex",
    gap: "20px",
  },
  // button: {
  //   padding: "12px 24px",
  //   fontSize: "1rem",
  //   backgroundColor: "#007bff",
  //   color: "#fff",
  //   border: "none",
  //   borderRadius: "8px",
  //   textDecoration: "none",
  //   transition: "background-color 0.3s ease",
  // },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  servicesSection: {
    marginTop: "60px",
    width: "100%",
    maxWidth: "1200px",
  },
  servicesTitle: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "40px",
    fontWeight: "600",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  serviceCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  serviceTitle: {
    fontSize: "1.5rem",
    color: "#007bff",
    marginBottom: "15px",
    fontWeight: "600",
  },
  serviceDescription: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  button: {
    padding: "15px 30px", // גודל הכפתור
    fontSize: "1.2rem",
    backgroundColor: "#007bff", // צבע הכפתור
    color: "#fff",
    border: "none",
    borderRadius: "8px", // פינות מעוגלות
    textDecoration: "none",
    transition: "background-color 0.3s ease",
    width: "200px", // רוחב הכפתור
    height: "60px", // גובה הכפתור
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // צל קטן לכפתור
  },
  buttonHover: {
    backgroundColor: "#0056b3", // צבע רקע בעת hover
  },
};

export default HomePage;