import React, { useState, useEffect } from "react";

export default function runTime({ time }) {
  const [date, setDate] = useState();

  const getTime = () => {
    const BootDate = new Date(time);
    const NowDate = new Date();
    const RunDateM = parseInt(NowDate - BootDate);
    const RunDays = Math.floor(RunDateM / (24 * 3600 * 1000));
    const RunHours = Math.floor(
      (RunDateM % (24 * 3600 * 1000)) / (3600 * 1000)
    );
    const RunMinutes = Math.floor(
      ((RunDateM % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000)
    );
    const RunSeconds = Math.round(
      (((RunDateM % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000
    );
    const RunTime =
      "小站已运行" +
      RunDays +
      "天" +
      RunHours +
      "时" +
      RunMinutes +
      "分" +
      RunSeconds +
      "秒";
    setDate(RunTime);
  };

  useEffect(() => {
    const t = setInterval(getTime, 100);

    return () => {
      clearInterval(t);
    };
  }, [date]);

  return (
    <p style={{ fontSize: "1.1rem", fontWeight: "400", fontStyle: "italic" }}>
      {date}
    </p>
  );
}
