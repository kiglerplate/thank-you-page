import React from "react";

function TermsOfService() {
  return (
    <div style={styles.container}>
      <h1>תנאי שימוש</h1>
      <p>
        ברוכים הבאים ל[שם האפליקציה]! תנאי שימוש אלו חלים על השימוש שלך
        באפליקציה שלנו. אנא קרא אותם בעיון לפני השימוש.
      </p>

      <h2>1. הסכמה לתנאים</h2>
      <p>
        על ידי שימוש באפליקציה, אתה מסכים לתנאי השימוש המפורטים כאן. אם אינך
        מסכים לתנאים אלו, אנא הימנע משימוש באפליקציה.
      </p>

      <h2>2. תיאור השירות</h2>
      <p>
        האפליקציה מספקת כלים לאוטומציה וניהול תהליכים ב-Wix. השימוש באפליקציה
        דורש מנוי חודשי פעיל.
      </p>

      <h2>3. דמי מנוי</h2>
      <p>
        עלות המנוי החודשי היא 70 שקלים חדשים. התשלום ייגבה באופן אוטומטי בכל
        חודש, אלא אם תבטל את המנוי בהתאם להנחיות המפורטות להלן.
      </p>

      <h2>4. ביטול מנוי</h2>
      <p>
        אם ברצונך לבטל את המנוי, עליך לשלוח הודעת דוא"ל ל-
        <a href="mailto:kiglerr@gmail.com">kiglerr@gmail.com</a> לפחות 7 ימים
        לפני תום תקופת החיוב הנוכחית. לאחר ביטול המנוי, לא ייגבו ממך תשלומים
        נוספים, אך לא תקבל החזר עבור תקופות שכבר חויבו.
      </p>

      <h2>5. אחריות המשתמש</h2>
      <p>אתה מתחייב:</p>
      <div style={styles.list}>
        <p>לספק מידע מדויק ומעודכן בעת ההרשמה.</p>
        <p>לא להשתמש באפליקציה למטרות בלתי חוקיות או בלתי הולמות.</p>
        <p>
          לא להפיץ, להעתיק או לעשות שימוש לא מורשה בקוד או בתוכן של האפליקציה.
        </p>
      </div>

      <h2>6. הגבלת אחריות</h2>
      <p>
        האפליקציה מסופקת "כפי שהיא" וללא כל אחריות מפורשת או משתמעת. אנו לא נהיה
        אחראים לכל נזק ישיר, עקיף, מיוחד או תוצאתי שייגרם כתוצאה משימוש או אי
        שימוש באפליקציה.
      </p>

      <h2>7. שינויים בתנאי השימוש</h2>
      <p>
        אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש מעת לעת. כל שינוי ייכנס
        לתוקף עם פרסומו באפליקציה. מומלץ לבדוק תנאים אלו מעת לעת.
      </p>

      <h2>8. מדיניות החזרים</h2>
      <p>
        לא ניתן להחזיר דמי מנוי שכבר שולמו. עם זאת, אם ביטלת את המנוי בהתאם
        להנחיות, לא ייגבו ממך תשלומים נוספים.
      </p>

      <h2>9. יצירת קשר</h2>
      <p>
        אם יש לך שאלות או דאגות לגבי תנאי השימוש, אנא פנה אלינו בכתובת הדוא"ל:{" "}
        <a href="mailto:kiglerr@gmail.com">kiglerr@gmail.com</a>.
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

export default TermsOfService;
