"use client";
import styles from "./app.module.css";
import Image from "next/image.js";
import { useState, useRef, useEffect } from "react";
import CardWithShadow from "../components/CardWithShadow/CardWithShadow";

const sections = ["projects", "about", "contact", "experience"];

export default function Page() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
    projects: useRef(null),
};
  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
        if (
            activeSection &&
            sectionRefs[activeSection]?.current &&
            !sectionRefs[activeSection].current.contains(event.target)
        ) {
            setActiveSection(null);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeSection]);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <CardWithShadow
          className={styles.home}
          setActiveSection={setActiveSection}
          name="home"
        >
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/websitePFP.png"
              alt="pfp"
              className={styles.image}
            />
          </div>
          <div className={styles.intro}>
            <h1>Anthony Rolon</h1>
            <h2>Aspiring software engineer</h2>
          </div>
        </CardWithShadow>

        <div className={activeSection ? styles.blur : styles.noBlur} />

        {sections.map((section, index) => {
          return (
            <CardWithShadow
              ref={sectionRefs[section]}
              key={index}
              setActiveSection={setActiveSection}
              name={section}
              className={
                activeSection === section
                  ? styles[`${section}Active`]
                  : styles[section]
              }
            >
              {activeSection === "about" && section === "about" ? (
                <div className={styles.aboutContent}>
                  <div className={styles.imageContainer}>
                    <Image
                      fill
                      src="/pfpWaving.png"
                      alt="waving pfp"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.aboutText}>
                    <h1>Hey I'm Anthony</h1>
                    <p>
                      I'm a Junior Programmer with a passion for coding, gaming,
                      and music. I specialize in backend development using
                      Node.js, Redis, Docker, and DevOps tools. With a
                      background in Information Technology, I focus on building
                      intuitive and scalable systems. One of my proudest
                      achievements was overhauling the employee provisioning
                      process - cutting it down from three days to less than
                      one. When I'm not coding, you'll probably find me vibing
                      to '90s R&B or deep into a video game.
                    </p>
                  </div>
                </div>
              ) : section === "about" ? (
                <h1>About Me</h1>
              ) : null}

              {activeSection === "projects" && section === "projects" ? (
                <div className={styles.projectsContent}>
                  <div className={styles.imageContainer}>
                    <Image
                      fill
                      src="/pfpConstruction.png"
                      alt="waving pfp"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.projectsText}>
                    <a
                      className={styles.projectsLink}
                      href="/Anthony_Rolon_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.projectsButton}>
                        <svg className={styles.projectsSvg} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g id="Plex"><path d="M20,34h0A14,14,0,0,1,6,20H6A14,14,0,0,1,20,6h0A14,14,0,0,1,34,20h0A14,14,0,0,1,20,34Zm0-23.06H15.06L20,20l-4.94,9.06H20L25.76,20Z"/></g></svg>
                        <div className={styles.projectsContainer}>
                            <h2>Plex Discord Bot</h2>
                            <p>
                                This project is a Discord bot that remotely controls the playback
                                of a running "player"
                            </p>
                        </div>
                      </button>
                    </a>

                    <a
                      className={styles.projectsLink}
                      href="/Anthony_Rolon_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.projectsButton}>
                        <svg className={styles.projectsSvg} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="80" cy="204" fill="none" r="20" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="184" cy="204" fill="none" r="20" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                        <div className={styles.projectsContainer}>
                            <h2>Mock E-Commerce</h2>
                            <p>
                                This project is a mock E-Commerce website that was created as my capstone
                                project with others in my class
                            </p>
                        </div>
                      </button>
                    </a>

                    <a
                      className={styles.projectsLink}
                      href="/Anthony_Rolon_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.projectsButton}>
                        <svg className={styles.projectsSvg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,20 L9,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,4 C1,2.8954305 1.8954305,2 3,2 L21,2 C22.1045695,2 23,2.8954305 23,4 L23,17 C23,18.1045695 22.1045695,19 21,19 L15,19 L15,20 L17,20 L17,22 L7,22 L7,20 L9,20 Z M3,17 L21,17 L21,4 L3,4 L3,17 Z" fillRule="evenodd"/></svg>
                        <div className={styles.projectsContainer}>
                            <h2>Portfolio Website</h2>
                            <p>
                                This project is my portfolio website to demonstrate my frontend proficiency
                            </p>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              ) : section === "projects" ? (
                <h1>My Projects</h1>
              ) : null}

              {activeSection === "experience" && section === "experience" ? (
                <div className={styles.experienceContent}>
                  <div className={styles.imageContainer}>
                    <Image
                      fill
                      src="/pfpTyping.png"
                      alt="waving pfp"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.experienceTextContainer}>
                    <div className={styles.experienceText}>
                      <h4>
                        Junior Programmer - School District of Osceola County
                      </h4>
                      <ul>
                        <li>
                          Developed real-time data acquisition software and a
                          web interface to streamline state survey edits,
                          improving process efficiency by 99.93%
                        </li>
                        <li>
                          Implemented CI/CD pipelines using Azure DevOps and Git
                          for seamless development
                        </li>
                        <li>
                          Utilized Docker and Docker Compose to create
                          on-demand, containerized environments for consistent
                          and efficient deployment
                        </li>
                        <li>
                          Developed a GraphQL API to streamline troubleshooting,
                          automate routine tasks, and support daily operations
                        </li>
                        <li>
                          Created scalable non-relational data solutions using
                          Redis and Kafka
                        </li>
                      </ul>

                      <h4>
                        Computer Technician - School District of Osceola County
                      </h4>
                      <ul>
                        <li>
                          Managed and maintained over 1,000 devices across a
                          500+ user base
                        </li>
                        <li>
                          Served as the primary point of contact for all school
                          IT issues, escalating tickets and collaborating with
                          upper management
                        </li>
                        <li>
                          Led technology troubleshooting, deployment, and
                          resolution for school-wide device initiatives
                        </li>
                      </ul>
                    </div>
                    <a
                      className={styles.experienceLink}
                      href="/Anthony_Rolon_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.button}>
                        View My Full Resume
                      </button>
                    </a>
                  </div>
                </div>
              ) : section === "experience" ? (
                <h1>My Experience</h1>
              ) : null}

              {activeSection === "contact" && section === "contact" ? (
                <div className={styles.contactContent}>
                  <div className={styles.imageContainer}>
                    <Image
                      fill
                      src="/pfpCalling.png"
                      alt="calling pfp"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.contactText}>
                    <p style={{flex: 1}}>
                        Feel free to connect with me through any of the platforms below - 
                        I'm always keeping an eye on my inbox and staying active on LinkedIn
                    </p>
                    <a
                      href="/Anthony_Rolon_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.button}>
                        Email Me
                        <svg className={styles.svg} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/></svg>
                      </button>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/anthony-rolon-036168205/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <button className={styles.button}>
                        LinkedIn
                        <svg className={styles.svg} enableBackground="new 0 0 56.693 56.693" viewBox="0 0 56.693 56.693" xmlns="http://www.w3.org/2000/svg"><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/></g></svg>
                        </button>
                    </a>

                    <a
                      href="https://github.com/AnthonyRolon123"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.button}>
                        GitHub
                        <svg className={styles.svg} enableBackground="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#181616" fillRule="evenodd"/><g/><g/><g/><g/><g/><g/></svg>
                        </button>
                    </a>
                  </div>
                </div>
              ) : section === "contact" ? (
                <h1>Contact Me</h1>
              ) : null}
            </CardWithShadow>
          );
        })}
      </div>
    </div>
  );
}
