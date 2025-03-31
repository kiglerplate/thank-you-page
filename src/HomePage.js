import React from "react";

function HomePage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>WarmLight</h1>
        <h1 style={styles.title}>ברוכים הבאים אוטומציות</h1>
        <p style={styles.subtitle}>פתרונות אוטומציה מתקדמים לעסק שלך</p>

        {/* תמונה מלאה שתופיע רק בנייד */}
        <div className="mobile-only-image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/wixapp-8efb6.firebasestorage.app/o/2.5.png?alt=media&token=7a24832a-82f0-4998-bda4-3d0e0c80bff6"
            alt="אוטומציות WarmLight"
            className="full-width-image"
          />
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.hero}>
          {/* <div style={styles.heroContent}> */}
          <div style={styles.buttons}>
            <a
              href="https://manage.wix.com/dashboard/e7b7dc50-1581-49cd-b2e2-9c69c9b791f5/app-market/8c79b733-63bc-425c-8855-d925d8dbb6c6/overview?appMarketParams=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiYXBwRGVmSWRcIjpcIjhjNzliNzMzLTYzYmMtNDI1Yy04ODU1LWQ5MjVkOGRiYjZjNlwiLFwic2hvdWxkRWRpdG9ySW5zdGFsbFwiOmZhbHNlLFwicm91dGVcIjpcInRlc3RBcHBcIixcInZlcnNpb25cIjpcImxhdGVzdFwifSIsImlhdCI6MTc0MjI0MzM3Mn0.ULlMt_EV6dyV1qelGryk9X_zuQCk61c-EnQj79onjYg"
              style={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              כניסה לאפליקצייה ב WIX
            </a>
            {/* </div> */}
          </div>
          <p>
            מערכת אוטומציות חכמה לוואטסאפ המחוברת ישירות לחנות ה-WIX שלך, שולחת
            הודעות אוטומטיות ללקוחות ומשפרת את שיעורי ההמרה
          </p>
        </section>

        <section style={styles.features}>
          <h2 style={styles.sectionTitle}>מה אנחנו מציעים?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureTitle}>אוטומציות חכמות</h3>
              <p style={styles.featureText}>
                שליחת הודעות אוטומטית בהתאם לפעולות הלקוח באתר
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📱</div>
              <h3 style={styles.featureTitle}>שילוב עם וואטסאפ</h3>
              <p style={styles.featureText}>
                הודעות ישירות לנייד של הלקוח דרך וואטסאפ
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🚚</div>
              <h3 style={styles.featureTitle}>ניהול משלוחים</h3>
              <p style={styles.featureText}>
                עדכון אוטומטי ללקוח עם פרטי המעקב אחר המשלוח
              </p>
            </div>
          </div>
        </section>

        <section style={styles.cta}>
          <h2 style={styles.ctaTitle}>
            מוכנים לשדרג את האוטומציה העסקית שלכם?
          </h2>
          <p style={styles.ctaText}>
            הרשמו עכשיו והתחילו לשלוח הודעות אוטומטיות ללקוחות שלכם כבר היום!
          </p>
          <a
            href="https://manage.wix.com/dashboard/e7b7dc50-1581-49cd-b2e2-9c69c9b791f5/app-market/8c79b733-63bc-425c-8855-d925d8dbb6c6/overview?appMarketParams=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiYXBwRGVmSWRcIjpcIjhjNzliNzMzLTYzYmMtNDI1Yy04ODU1LWQ5MjVkOGRiYjZjNlwiLFwic2hvdWxkRWRpdG9ySW5zdGFsbFwiOmZhbHNlLFwicm91dGVcIjpcInRlc3RBcHBcIixcInZlcnNpb25cIjpcImxhdGVzdFwifSIsImlhdCI6MTc0MjI0MzM3Mn0.ULlMt_EV6dyV1qelGryk9X_zuQCk61c-EnQj79onjYg"
            style={styles.primaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            התחל עכשיו בחינם
          </a>
        </section>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2023 WarmLight - כל הזכויות שמורות</p>
        <p style={styles.footerContact}>
          יצירת קשר:{" "}
          <a href="mailto:kiglerr@gmail.com" style={styles.footerLink}>
            kiglerr@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
const styles = {
  container: {
    fontFamily: "'Open Sans', sans-serif",
    color: "#333",
    lineHeight: 1.6,
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    direction: "rtl",
  },
  header: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "2rem 4rem",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    marginBottom: "0",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    opacity: 0.9,
  },
  main: {
    flex: 1,
    padding: "1rem",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },
  mobileOnlyImage: {
    display: "block",
    "@media (min-width: 769px)": {
      display: "none",
    },
  },
  fullWidthImage: {
    width: "100%",
    height: "auto",
    display: "block",
    marginTop: "20px",
    objectFit: "cover",
    "@media (max-width: 768px)": {
      height: "300px",
    },
  },
  hero: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: "2rem",
    marginBottom: "3rem",
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    position: "relative",
    "@media (min-width: 769px)": {
      flexDirection: "column",
      padding: "0",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
  desktopHeroImage: {
    display: "none",
    "@media (min-width: 769px)": {
      display: "block",
      width: "100%",
      height: "300px",
      backgroundImage:
        "url(https://firebasestorage.googleapis.com/v0/b/wixapp-8efb6.firebasestorage.app/o/333333308_19%20PM.png11.png?alt=media&token=7e041249-6d96-431e-ac10-6ddf26066c7d)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginBottom: "20px",
      borderRadius: "8px",
    },
  },
  heroContent: {
    flex: 1,
    textAlign: "center",
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    "@media (min-width: 769px)": {
      textAlign: "right",
      width: "100%",
      maxWidth: "800px",
      margin: "-50px auto 0",
      position: "relative",
      zIndex: 2,
    },
  },
  heroText: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    marginBottom: "2rem",
    color: "#555",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    "@media (min-width: 769px)": {
      justifyContent: "flex-start",
    },
  },
  primaryButton: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "12px 24px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: 600,
    transition: "background-color 0.3s",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    display: "inline-block",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
  },
  heroImage: {
    flex: 1,
    minHeight: "200px",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    width: "100%",
    backgroundImage: "url('https://via.placeholder.com/800x400')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (min-width: 768px)": {
      minHeight: "300px",
    },
  },
  features: {
    marginBottom: "3rem",
    padding: "0 1rem",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    marginBottom: "2rem",
    color: "#2c3e50",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "1fr", // עמודה אחת לטלפונים
    gap: "1.5rem",
    "@media (min-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 עמודות לטאבלטים
    },
    "@media (min-width: 900px)": {
      gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות למחשבים
    },
  },
  featureCard: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
  },
  featureIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  featureTitle: {
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
    color: "#3498db",
  },
  featureText: {
    color: "#666",
  },
  cta: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "2rem 1rem",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "3rem",
    "@media (min-width: 768px)": {
      padding: "3rem 2rem",
    },
  },
  ctaTitle: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    marginBottom: "1rem",
  },
  ctaText: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    marginBottom: "2rem",
    opacity: 0.9,
  },
  footer: {
    backgroundColor: "#0b1f33",
    color: "white",
    padding: "1.5rem",
    textAlign: "center",
  },
  footerText: {
    marginBottom: "0.5rem",
    fontSize: "0.9rem",
  },
  footerContact: {
    margin: 0,
    fontSize: "0.9rem",
  },
  footerLink: {
    color: "#3498db",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  logoImage: {
    width: "100px",
    height: "100px",
    objectFit: "contain", // ישמור על פרופורציות התמונה
    borderRadius: "8px",
  },
  logoPlaceholder: {
    width: "100px",
    height: "100px",
    backgroundColor: "#fff",
    color: "#2c3e50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  fullWidthImage: {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    display: "block",
    marginTop: "20px", // ריווח מהכותרת
    objectFit: "cover", // או 'contain' לפי הצורך
    "@media (max-width: 768px)": {
      height: "300px", // גובה קבוע למסכים קטנים אם צריך
    },
    "@media (min-width: 769px)": {
      height: "500px", // גובה למסכים גדולים
    },
  },
  fullWidthImageContainer: {
    width: "100%",
    padding: "0 20px", // ריווח מצדדים
    boxSizing: "border-box",
    marginTop: "20px",
  },
};

export default HomePage;
