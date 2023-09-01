import React, { useState } from "react";
import styles from "./style.module.scss";

function TypeCircle() {
  return <span className={styles.type}>{"•"}</span>;
}
function TypeDot() {
  return <div className={styles.typeDot}></div>;
}

function NoteContent() {
  return (
    <div className={styles.power}>
      <div className={styles.power_1}></div>
      <div className={styles.power_2}></div>
      <div className={styles.power_3}></div>
      <div className={styles.power_4}></div>
    </div>
  );
}

function Cold() {
  const [status, setStatus] = useState(false);
  const [num, setNum] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.note}>
            <div className={styles.note_header}>
              <TypeCircle />
              <TypeCircle />
              <TypeCircle />
              <TypeCircle />
              <TypeCircle />
            </div>
            <div className={styles.note_content}>
              <NoteContent />
            </div>
            <div className={styles.note_aside}>
              <div className={styles.aside_content}>
                <TypeDot />
                <TypeDot />
                <TypeDot />
                <TypeDot />
                <TypeDot />
                <TypeDot />
                <TypeDot />
                <TypeDot />
                <TypeDot />
              </div>
            </div>
            <div className={styles.note_down}>
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
            </div>
            <div className={styles.note_down}>
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
            </div>
            <div className={styles.note_footer}>
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
              <TypeDot />
            </div>
          </div>
          {status ? (
            <div className={styles.status}>
              <div className={styles.weather}>{num ? "❄️" : "☀️"}</div>
              <div className={styles.number}>20°C</div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.control}>
          <a onClick={() => setNum(!num)}>❤</a>
          <a onClick={() => setStatus(!status)}>¤</a>
        </div>
      </div>
      <div className={styles.footer}></div>
      {status ? (
        <div className={styles.windy}>
          <div className={styles.windy_1}></div>
          <div className={styles.windy_2}></div>
          <div className={styles.windy_3}></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Cold;
