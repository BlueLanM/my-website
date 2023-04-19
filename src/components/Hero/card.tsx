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
            <span className={styles.cm_string}>"Blue"</span>
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
            <span className={styles.cm_string}>"Edge"</span>
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
            <span className={styles.cm_string}>
              "little more than the age of the earth"
            </span>
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
            <span className={styles.cm_string}>"hiding dead bodies"</span>
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
            &nbsp;<span className={styles.cm_property}>funFact</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"sdrawkcab etirw nac I"</span>
            <span className={styles.cm_dou}>,</span>
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
            &nbsp;<span className={styles.cm_property}>Python</span>
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
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>NodeJs</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Intermediate"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Javascript</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Expert"</span>
            <span className={styles.cm_dou}>,</span>
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
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Git</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Expert"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Azure</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Intermediate"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>MongoDB</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Expert"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Unity</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Beginner"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Blender</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Intermediate"</span>
            <span className={styles.cm_dou}>,</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span
            role="presentation"
            style={{ paddingRight: "0.1px", marginLeft: "20px" }}
          >
            &nbsp;<span className={styles.cm_property}>Life</span>
            <span className={styles.cm_mao}>:</span>
            <span className={styles.cm_string}>"Beginner"</span>
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
            <span className={styles.cm_operator}>=</span> {"{"}
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            &nbsp;<span className={styles.cm_property}>github</span>:
            <a
              className="sociolink"
              onClick={stoprop}
              href="https://github.com/blueedgetechno"
              target="_blank"
            >
              "github.com/blueedgetechno"
            </a>
          </span>
          ,
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            &nbsp;<span className={styles.cm_property}>twitter</span>:{" "}
            <span className="cm-string">
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://twitter.com/blueedgetechno"
                target="_blank"
              >
                "twitter.com/blueedgetechno"
              </a>
            </span>
            ,
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            &nbsp;<span className={styles.cm_property}>codeforces</span>:{" "}
            <span className="cm-string">
              <a
                className="sociolink"
                onClick={stoprop}
                href="https://codeforces.com/profile/blueedge"
                target="_blank"
              >
                "codeforces.com/profile/blueedge"
              </a>
            </span>
            ,
          </span>
        </pre>

        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {"}"}
          </span>
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
            <span className={styles.cm_def}>ProjectCard</span>{" "}
            <span className={styles.cm_operator}>=</span> {"{"}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp;<span className={styles.cm_property}>BlueBlogs</span>:{" "}
            <span className="cm-string">
              "A social blogging platform for nerds"
            </span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className="cm-operator">+</span>
            <span className="cm-string">"made in flask"</span>,
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp;<span className={styles.cm_property}>
              TheINTELLECTS
            </span>:{" "}
            <span className="cm-string">
              "A platform meant for engineering"
            </span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            <span className="cm-tab" role="presentation" Cm-text="	">
              {" "}
            </span>
            <span className="cm-tab" role="presentation" Cm-text="	">
              {"   "}
            </span>{" "}
            <span className="cm-operator">+</span>
            <span className="cm-string">
              "pupils made in expressJs, ejs &amp; mongoDB"
            </span>
            ,
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp;<span className="cm-property">codeblue</span>:
            <span className="cm-string">
              "Atom package to help during codeforces"
            </span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            <span className="cm-tab" role="presentation" Cm-text="	">
              {" "}
            </span>
            <span className="cm-tab" role="presentation" Cm-text="	">
              {"   "}
            </span>{" "}
            &nbsp; <span className="cm-operator">+</span>
            <span className="cm-string">
              "contest, made in ReactJs and Less.js"
            </span>
            ,
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp;
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            &nbsp;<span className={styles.cm_property}>BlueChats</span>:{" "}
            <span className="cm-string">"A desktop messaging application"</span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {" "}
            <span className="cm-tab" role="presentation" Cm-text="	">
              {" "}
            </span>
            <span className="cm-tab" role="presentation" Cm-text="	">
              {"   "}
            </span>{" "}
            &nbsp;<span className="cm-operator">+</span>
            <span className="cm-string">
              "made in Electron, expressJs &amp; MongoDB"
            </span>
          </span>
        </pre>
        <pre className={styles.CodeMirror_line} role="presentation">
          <span role="presentation" style={{ paddingRight: "0.1px" }}>
            {"}"}{" "}
            <span className="cm-comment">
              // And that's just the tip of the iceberg
            </span>
          </span>
        </pre>
      </div>
    </div>
  );
};
