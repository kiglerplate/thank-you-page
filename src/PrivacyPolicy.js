import React from "react";

function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1>מדיניות פרטיות</h1>
      <p>
        בWarm light, אנו מחויבים להגן על פרטיותך ולשמור על המידע האישי
        שלך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, משתפים ושומרים
        על המידע שלך, וכן מפרטת את הזכויות שלך כמשתמש.
      </p>

      <h2>1. איסוף מידע</h2>
      <p>אנו אוספים מידע מסוגים שונים כדי לספק ולשפר את השירותים שלנו:</p>
      <div style={styles.list}>
        <p>
          <strong>מידע אישי:</strong> שם, כתובת דוא"ל, מספר טלפון, ופרטים אחרים
          שאתה מספק בעת הרשמה או שימוש בשירות.
        </p>
        <p>
          <strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, נתוני
          שימוש באפליקציה, ומידע על התקן הקצה.
        </p>
        <p>
          <strong>מידע מתקשורת:</strong> הודעות WhatsApp, תאריכים ושעות של
          אינטראקציות, ונתונים אחרים הקשורים לתקשורת ב-WhatsApp.
        </p>
      </div>

      <h2>2. שימוש במידע</h2>
      <p>המידע שאנו אוספים משמש למטרות הבאות:</p>
      <div style={styles.list}>
        <p>לספק, לתפעל ולשפר את השירותים שלנו.</p>
        <p>לתקשר איתך לגבי עדכונים, שירותים ופרסומים.</p>
        <p>לנתח את השימוש בשירות כדי לשפר את החוויה שלך.</p>
        <p>לעמוד בדרישות חוקיות ורגולטוריות.</p>
      </div>

      <h2>3. שיתוף מידע</h2>
      <p>אנו לא משתפים את המידע האישי שלך עם צדדים שלישיים, אלא אם:</p>
      <div style={styles.list}>
        <p>קיבלך את הסכמתך המפורשת.</p>
        <p>נדרש על פי חוק או בהתאם לצו שיפוטי.</p>
        <p>
          המידע נחוץ לצורך מתן שירותים על ידי ספקי שירותים צד שלישי (כגון שירותי
          תשלום או אחסון נתונים), והם מחויבים לשמור על סודיות המידע.
        </p>
      </div>

      <h2>4. אבטחת מידע</h2>
      <p>
        אנו משתמשים באמצעי אבטחה טכנולוגיים וארגוניים כדי להגן על המידע שלך מפני
        גישה לא מורשית, שימוש לרעה או חשיפה. בין היתר, אנו משתמשים בהצפנה,
        גיבויים, ופיקוח קפדני על גישה לנתונים.
      </p>

      <h2>5. זכויות המשתמש</h2>
      <p>כבעל המידע, יש לך זכויות מסוימות:</p>
      <div style={styles.list}>
        <p>לבקש גישה למידע האישי שאנו מחזיקים עליך.</p>
        <p>לתקן או לעדכן מידע לא מדויק או לא מעודכן.</p>
        <p>למחוק את המידע האישי שלך, בכפוף למגבלות חוקיות.</p>
        <p>להתנגד לעיבוד המידע שלך או להגביל את השימוש בו.</p>
      </div>
      <p>כדי לממש את זכויותיך, אנא פנה אלינו בכתובת הדוא"ל המופיעה מטה.</p>

      <h2>6. שימוש בעוגיות (Cookies)</h2>
      <p>
        אנו משתמשים בעוגיות ובטכנולוגיות דומות כדי לשפר את החוויה שלך באתר. תוכל
        להגדיר את הדפדפן שלך לדחות עוגיות, אך הדבר עשוי להשפיע על תפקוד האתר.
      </p>

      <h2>7. שינויים במדיניות הפרטיות</h2>
      <p>
        אנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. כל שינוי יפורסם בדף זה, ואם
        השינויים משמעותיים, נודיע לך באמצעות דוא"ל או הודעה באפליקציה.
      </p>

      <h2>8. יצירת קשר</h2>
      <p>
        אם יש לך שאלות או דאגות לגבי מדיניות הפרטיות שלנו, אנא פנה אלינו בכתובת
        הדוא"ל: <a href="mailto:kiglerr@gmail.com">kiglerr@gmail.com</a>.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    textAlign: "right",
    direction: "rtl", // הוספת כיוון טקסט מימין לשמאל
  },
  h1: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  h2: {
    fontSize: "1.8rem",
    marginTop: "20px",
    marginBottom: "10px",
  },
  p: {
    fontSize: "1rem",
    marginBottom: "15px",
  },
  list: {
    marginBottom: "15px",
  },
};

export default PrivacyPolicy;
