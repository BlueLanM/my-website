import React, { useState, useEffect } from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import { useTrail, animated } from "@react-spring/web";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Typed from "typed.js";
import useBaseUrl from "@docusaurus/useBaseUrl";
import JuejinIcon from "./img/hero_main.svg";
import { Icon } from "@iconify/react";
import styles from "./index.module.scss";
import { IntroCard, LangCard, SocialCard, ProjectCard } from "./card";

// const styles = require("./index.module.scss");

function Hero() {
  const [card1, setCard1] = useState(1);
  const [card2, setCard2] = useState(-1);
  const [card3, setCard3] = useState(-2);
  const [card4, setCard4] = useState(0);

  const {
    navbar: { logo = { src: "" } },
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo.src || "/");
  const typingElement = React.useRef(null);
  const descElement = React.useRef(null);
  const trails = useTrail(4, {
    from: { opacity: 0, transform: "translate3d(0px, 2em, 0px)" },
    to: { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  });

  useEffect(() => {
    const typed = new Typed(typingElement.current, {
      stringsElement: descElement.current,
      typeSpeed: 35,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const handleOnClick = () => {
    setCard1((card1) => (card1 === 2 ? -1 : card1 + 1));
    setCard2((card2) => (card2 === 2 ? -1 : card2 + 1));
    setCard3((card3) => (card3 === 2 ? -1 : card3 + 1));
    setCard4((card4) => (card4 === 2 ? -1 : card4 + 1));
  };
  const states = {
    "-3": "",
    "-2": "cards",
    "-1": "card",
    "0": "followed",
    "1": "front",
    "2": "fall",
  };
  return (
    <>
      <animated.div className={styles.hero}>
        <div className={styles.bloghome__intro}>
          <div className={styles.bloghome__intro_div}>
            <animated.div style={trails[0]} className={styles.hero_text}>
              <Link href="/about">
                <img
                  className={styles.bloginfo__img_avator}
                  src={logoLink}
                  alt="logo"
                ></img>
              </Link>

              <span className={styles.intro__name}></span>
            </animated.div>
            <animated.div style={trails[1]}>
              <div className={styles.intro_desc}>
                It is said that there are three types of supreme happiness:
                self-discipline, love, and creation.
              </div>
            </animated.div>

            <SocialLinks style={trails[2]} />

            <a className={styles.intro} href={"./about"}>
              <Translate id="hompage.hero.introduce">关于我</Translate>
            </a>

            <animated.div style={trails[3]} className={styles.animated}>
              {/* <DayAndNight /> */}

              <span className={styles.word_item} ref={typingElement} />
              <div ref={descElement} className={styles.desc_list}>
                <span>
                  <Translate id="home.intro.desc1">Developer</Translate>
                </span>

                <span>
                  <Translate id="home.intro.desc2">
                    技术栈： React, Typescript, Sass, Node
                  </Translate>
                </span>

                <span>
                  <Translate id="home.intro.desc3">开源爱好者</Translate>
                </span>
              </div>
            </animated.div>
          </div>
        </div>

        <div className={styles.bloghome__image} onClick={handleOnClick}>
          <div className={styles.introCard}>
            <IntroCard count={0} curState={states[card1]} />
            <LangCard count={1} curState={states[card2]} />
            <SocialCard count={2} curState={states[card3]} />
            <ProjectCard count={3} curState={states[card4]} />
          </div>
        </div>
      </animated.div>

      <div className={styles.footer}>
        <div className={styles.innerheader}></div>
        <div>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={styles.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" />
              <use xlinkHref="#gentle-wave" x="48" y="3" />
              <use xlinkHref="#gentle-wave" x="48" y="5" />
              <use xlinkHref="#gentle-wave" x="48" y="7" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

export function SocialLinks({ ...prop }) {
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig } = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    twitter: string;
    csdn: string;
    qq: string;
    wx: string;
    cloudmusic: string;
    zhihu: string;
    steam: string;
  };

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href="/rss.xml" target="_blank">
        <Icon icon="ri:rss-line" />
      </a>
      <a href={socials.github} target="_blank">
        <Icon icon="ri:github-line" />
      </a>
      <a href={socials.qq} target="_blank">
        <Icon icon="ri:qq-line" />
      </a>
      <a href={socials.twitter} target="_blank">
        <Icon icon="ri:twitter-line" />
      </a>
      <a href={socials.zhihu} target="_blank">
        <Icon icon="ri:zhihu-line" />
      </a>
      <a href={socials.cloudmusic} target="_blank">
        <Icon icon="ri:netease-cloud-music-fill" />
      </a>
      <a href={socials.steam} target="_blank">
        <Icon icon="ri:steam-fill" />
      </a>
    </animated.div>
  );
}

export default Hero;
