import React, { useState } from "react";
import styles from "./index.module.scss";
import { Icon } from "@iconify/react";

import { motion, Variants } from "framer-motion";

function Radio() {
  const [status, setStatus] = useState<string>("1");
  const variants: Variants = {
    from: { opacity: 0.01, y: 50 },
    to: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        bounce: 0.2,
        duration: 0.3,
        delay: i * 0.1,
      },
    }),
  };
  return (
    <div className={styles.container}>
      <div className={styles.radio_flex}>
        <div className={styles.radio_card} onClick={() => setStatus("1")}>
          <Icon
            icon="ic:baseline-wechat"
            color={status == "1" ? "green" : ""}
          />
        </div>
        <div className={styles.radio_card} onClick={() => setStatus("2")}>
          <Icon icon="ri:alipay-fill" color={status == "2" ? "blue" : ""} />
        </div>
        <div className={styles.radio_card} onClick={() => setStatus("3")}>
          <Icon
            icon="simple-icons:buymeacoffee"
            color={status == "3" ? "yellow" : ""}
          />
        </div>
      </div>

      <motion.li
        className={styles.radio_img}
        initial="from"
        animate="to"
        variants={variants}
        viewport={{ once: true, amount: 0.8 }}
      >
        <img
          src={
            status == "1"
              ? "/my-website/img/thanks/vx.png"
              : status == "2"
              ? "/my-website/img/thanks/alipay.jpg"
              : "/my-website/img/thanks/bmc_qr.png"
          }
          alt=""
        />
      </motion.li>
    </div>
  );
}

export default Radio;
