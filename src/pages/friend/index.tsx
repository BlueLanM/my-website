import React, { useState } from "react";
import Layout from "@theme/Layout";
import Image from "@theme/IdealImage";
import Translate, { translate } from "@docusaurus/Translate";
import { Friends } from "@site/data/friend";
import Link from "@docusaurus/Link";
import { motion, Variants } from "framer-motion";
import styles from "./styles.module.scss";

const TITLE = translate({
  id: "theme.friend.title",
  message: "左邻右舍",
});
const DESCRIPTION = translate({
  id: "theme.friend.description",
  message: "海内存知己，天涯若比邻",
});

// const GITHUB_URL = "https://github.com/BlueLanM";

function FriendHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" href="/notebook">
        <Translate id="showcase.notebook">申请友链</Translate>
      </Link>
    </section>
  );
}

function FriendCard() {
  const [hover, setHover] = useState(false);
  const [items, setItems] = useState<any>({});

  const variants: Variants = {
    from: { opacity: 0.01, y: 50 },
    to: (i) => ({
      opacity: 1,
      y: 0,
      //   rotate: 5,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
        bounce: 1,
        delay: i * 0.1,
      },
    }),
  };
  const variantsHover: Variants = {
    from: { opacity: 0, y: 0 },
    to: (i) => ({
      opacity: 1,
      y: -15,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
        damping: 5,
        stiffness: 600,
        // delay: i * 0.1,
      },
    }),
  };
  const variantsTitle: Variants = {
    from: { opacity: 1, y: 0 },
    to: (i) => ({
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.1,
        // delay: i * 0.1,
      },
    }),
  };

  if (Friends.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>No result</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <>
        <div className={styles.container}>
          <ul className={styles.friend_card}>
            {Friends.map((item: any, i: any) => {
              return (
                <a href={item.website} key={item.title} target={"_blank"}>
                  <motion.li
                    className={styles.friend_card_li}
                    custom={i}
                    initial="from"
                    animate="to"
                    whileHover="hover"
                    onHoverStart={(e) => {
                      setHover(true);
                      setItems(item);
                    }}
                    onHoverEnd={(e) => {
                      setHover(false);
                      setItems({});
                    }}
                    variants={variants}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className={styles.card_avatar}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.title}
                        img={item.avatar}
                      />
                    </motion.div>
                    <motion.div className={styles.card_info}>
                      <motion.div
                        className={styles.card_info_title}
                        initial="from"
                        animate="to"
                        custom={i}
                        variants={
                          items.title === item.title && hover
                            ? variantsTitle
                            : ""
                        }
                      >
                        {item.title}
                      </motion.div>
                      {items.title === item.title && hover ? (
                        <motion.div
                          className={styles.card_info_desc}
                          initial="from"
                          animate="to"
                          custom={i}
                          variants={variantsHover}
                        >
                          {item.description}
                        </motion.div>
                      ) : (
                        <></>
                      )}
                    </motion.div>
                  </motion.li>
                </a>
              );
            })}
          </ul>
        </div>
      </>
    </section>
  );
}

function Friend() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <FriendHeader />
        <FriendCard />
      </main>
    </Layout>
  );
}

export default Friend;
