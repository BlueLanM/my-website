import React from "react";

import { useTrail, animated } from "@react-spring/web";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

import HeroMain from "./img/hero_6.svg";

import JuejinIcon from "./img/hero_main.svg";
import { Icon } from "@iconify/react";

import styles from "./index.module.scss";
// const styles = require("./index.module.scss");

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: "translate3d(0px, 2em, 0px)" },
    to: { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">蓝莓の</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">Blog</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>
          {/* <Translate id="homepage.hero.text">
            {`在这里我会分享各类技术栈所遇到问题与解决方案，带你了解最新的技术栈以及实际开发中如何应用，并希望我的开发经历对你有所启发。`}
          </Translate> */}
          <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs/record">
                  <Translate id="hompage.hero.note">技术笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project">
                  <Translate id="hompage.hero.project">实战项目</Translate>
                </Link>
              ),
              link: (
                <Link to="/website">
                  <Translate id="hompage.hero.link">网址导航</Translate>
                </Link>
              ),
              idea: (
                <Link to="/tags/随笔">
                  <Translate id="hompage.hero.idea">生活随笔</Translate>
                </Link>
              ),
            }}
          >
            {`记录个人随笔，快捷查看{note}、{project}、{link}、以及我的{idea}。`}
          </Translate>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={"./about"}>
            <Translate id="hompage.hero.introduce">关于我</Translate>
          </a>
        </animated.div>
      </div>
      <div className={styles.bloghome__image}>
        <HeroMain />
      </div>
    </animated.div>
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
