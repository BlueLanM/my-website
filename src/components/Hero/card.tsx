import React from "react";
import styles from "./index.module.scss";

export const IntroCard = (props) => {
  const { curState } = props;
  const curlyBraces = " {";
  const curlyBraces2 = " }";
  return (
    <div className={`${styles[curState]}`}>
      <div className={styles.circles}>
        <div className={`${styles.navCircle} ${styles.red}`}></div>
        <div className={`${styles.navCircle} ${styles.yellow}`}></div>
        <div className={`${styles.navCircle} ${styles.green}`}></div>
      </div>
      <div className={styles.procode}>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            <span className={styles.cm_keyword}>const</span>{" "}
            <span className={styles.cm_def}>person</span>{" "}
            <span className={styles.cm_operator}>=</span>
            <span className={styles.cm_operator}>{curlyBraces}</span> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>pseudoName</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"LanM"</span>
            <span className={styles.cm_dou}>,</span> &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>lastname</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Wang"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>age</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"A quarter of life"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>gender</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Male"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>hobbies</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_dou}>[</span>
            <span className={styles.cm_string}>"Breathing"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            <span className={styles.cm_string}>"Programming"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            <span className={styles.cm_string}>"Playing video Games"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            <span className={styles.cm_string}>"Listen to strange music"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            <span className={styles.cm_string}>"Playing Basketball"</span>
            <span className={styles.cm_dou}>]</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>state</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"oblivion"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>unique skill</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"sdrawkcab etirw nac I 😆"</span>
            {/* <span className={styles.cm_dou}>,</span> */}
          </span>
        </pre>
        <pre className={styles.CodeMirror_line}>
          <span className={styles.cm_dou}>{curlyBraces2}</span>
        </pre>
      </div>
    </div>
  );
};

export const LangCard = (props) => {
  return (
    <div className={`${styles[props.curState]}`}>
      <div className={styles.circles}>
        <div className={`${styles.navCircle} ${styles.red}`}></div>
        <div className={`${styles.navCircle} ${styles.yellow}`}></div>
        <div className={`${styles.navCircle} ${styles.green}`}></div>
      </div>
      <div className={styles.procode}>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            <span className={styles.cm_keyword}>const</span>{" "}
            <span className={styles.cm_def}>skills</span>{" "}
            <span className={styles.cm_operator}>=</span>
            <span className={styles.cm_operator}>{" {"}</span> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>JavaScript</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Proficiency"</span>
            <span className={styles.cm_dou}>,</span> &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>CSS</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Intermediate"</span>
            <span className={styles.cm_dou}>,</span> &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>React</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Intermediate"</span>
            <span className={styles.cm_dou}>,</span> &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Vue</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Average"</span>
            <span className={styles.cm_dou}>,</span> &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Git</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Proficiency"</span>
            <span className={styles.cm_dou}>,</span> &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>NodeJS</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Average"</span>
            <span className={styles.cm_dou}>,</span> &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>NodeJS</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Beginner"</span>
            <span className={styles.cm_dou}>,</span> &nbsp; &nbsp;
          </span>
        </pre>

        <pre className={styles.CodeMirror_line}>
          <span className={styles.cm_dou}>{"}"}</span>
        </pre>
      </div>
    </div>
  );
};

export const SocialCard = (props) => {
  const stoprop = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`${styles[props.curState]}`}>
      <div className={styles.circles}>
        <div className={`${styles.navCircle} ${styles.red}`}></div>
        <div className={`${styles.navCircle} ${styles.yellow}`}></div>
        <div className={`${styles.navCircle} ${styles.green}`}></div>
      </div>
      <div className={styles.procode}>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            <span className={styles.cm_keyword}>const</span>{" "}
            <span className={styles.cm_def}>socialLinks</span>{" "}
            <span className={styles.cm_operator}>=</span>{" "}
            <span className={styles.cm_dou}>{"{"}</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>github</span>
            <span className={styles.cm_mao}>:</span>
            <a
              className="sociolink"
              onClick={stoprop}
              href="https://github.com/BlueLanM"
              target="_blank"
            >
              "github.com/BlueLanM"
            </a>
          </span>
          <span className={styles.cm_dou}>,</span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>twitter</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://twitter.com/Jason__Wang_"
                target="_blank"
              >
                "twitter.com/Jason__Wang_"
              </a>
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>gmail</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              <a
                className="sociolink"
                onClick={stoprop}
                href="mailto:xiaoteng.one@gmail.com"
                target="_blank"
              >
                "xiaoteng.one@gmail.com"
              </a>
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>CSDN</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://blog.csdn.net/BLUESKYwang66"
                target="_blank"
              >
                "blog.csdn.net/BLUESKYwang66"
              </a>
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Steam</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://steamcommunity.com/profiles/76561198892079974/"
                target="_blank"
              >
                "steamcommunity.com/LanM"
              </a>
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>CloudMusic</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://music.163.com/#/user/home?id=428851176"
                target="_blank"
              >
                "music.163.com/LanM蓝莓"
              </a>
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>BiliBili</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://space.bilibili.com/347207525"
                target="_blank"
              >
                "bilibili.com/LanM蓝莓"
              </a>
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Public Accounts</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NTQ2MzY5OQ==&scene=124#wechat_redirect"
                target="_blank"
              >
                "mp.weixin.qq.com/蓝莓小世界"
              </a>
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>

        <pre className={styles.CodeMirror_line}>
          <span className={styles.cm_dou}>{"}"}</span>
        </pre>
      </div>
    </div>
  );
};

export const ProjectCard = (props) => {
  return (
    <div className={`${styles[props.curState]}`}>
      <div className={styles.circles}>
        <div className={`${styles.navCircle} ${styles.red}`}></div>
        <div className={`${styles.navCircle} ${styles.yellow}`}></div>
        <div className={`${styles.navCircle} ${styles.green}`}></div>
      </div>
      <div className={styles.procode}>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            <span className={styles.cm_keyword}>const</span>{" "}
            <span className={styles.cm_def}>Project</span>{" "}
            <span className={styles.cm_operator}>=</span>
            <span className={styles.cm_dou}>{" {"}</span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>LanMBlogs</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Personal oriented blogs"</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className={styles.cm_operator}>{"+ "}</span>
            <span className={styles.cm_string}>"made in Docusaurus"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Toy-component</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              "Collect bizarre component styles"
            </span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className={styles.cm_operator}>{"+ "}</span>
            <span className={styles.cm_string}>"made in ReactJS and Vite"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>LanM-component</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              "Collect bizarre component styles"
            </span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className={styles.cm_operator}>{"+ "}</span>
            <span className={styles.cm_string}>
              "made in ReactJS and storybook"
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>NodeJS-CRUD</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>
              "The interface for adding, deleting,&nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; modifying, and querying
              Nodejs"
            </span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className={styles.cm_operator}>{"+ "}</span>
            <span className={styles.cm_string}>
              "made in nodejs and express and MySQL"
            </span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line}>
          <span className={styles.cm_dou}>{"}"}</span>
        </pre>
      </div>
    </div>
  );
};
