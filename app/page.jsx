'use client'

import style from './app.module.css'
import Navbar from '../components/Navbar/Navbar.jsx'
import Image from 'next/image.js';
import FadeInSection from '../components/FadeInSection/FadeInSection.jsx';
import Card from '../components/Card/Card.jsx'
// import { useEffect, useRef, useState } from 'react';

export default function Page() {

    return (
        <div className={style.pageContainer}>
            <Navbar className={style.nav}/>
            <div className={style.page}>
                <div className={style.contentContainer}>
                    <div className={style.intro}>
                        <Image 
                            src='/websitePFP.png' 
                            height='400' 
                            width='400'
                            alt='pfp'
                            className={style.pfp}
                        />
                        <div className={style.infoContainer}>
                            <h2>Anthony Rolon</h2>
                            <p>Junior Programmer</p>
                            <div className={style.skillsIconContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50"><path d="M5.757 7.288v36.111c0 3.749 8.392 6.789 18.743 6.789v-42.9H5.757z" fill="#0072c6"/><path d="M24.243 50.187h.257c10.351 0 18.743-3.038 18.743-6.788V7.288h-19v42.899z" fill="#0072c6"/><path opacity=".15" d="M24.243 50.187h.257c10.351 0 18.743-3.038 18.743-6.788V7.288h-19v42.899z" fill="#fff"/><path d="M43.243 7.288c0 3.749-8.392 6.788-18.743 6.788S5.757 11.037 5.757 7.288 14.149.5 24.5.5s18.743 3.039 18.743 6.788" fill="#fff"/><path d="M39.411 6.897c0 2.475-6.676 4.479-14.911 4.479S9.588 9.372 9.588 6.897c0-2.474 6.677-4.479 14.912-4.479s14.911 2.005 14.911 4.479" fill="#7fba00"/><path d="M36.287 9.634c1.952-.757 3.125-1.705 3.125-2.735 0-2.475-6.676-4.48-14.912-4.48-8.235 0-14.911 2.005-14.911 4.48 0 1.03 1.173 1.978 3.125 2.735C15.44 8.576 19.7 7.893 24.5 7.893c4.801 0 9.059.683 11.787 1.741" fill="#b8d432"/><path d="M18.547 32.354c0 1.122-.407 1.991-1.221 2.607-.814.616-1.938.924-3.373.924-1.221 0-2.241-.22-3.061-.66v-2.64c.946.803 1.988 1.205 3.126 1.205.55 0 .975-.11 1.275-.33s.45-.511.45-.875c0-.357-.144-.668-.433-.932s-.876-.605-1.761-1.023c-1.804-.846-2.706-2.002-2.706-3.464 0-1.061.393-1.912 1.18-2.553.786-.64 1.831-.961 3.134-.961 1.155 0 2.111.152 2.871.454v2.466c-.797-.55-1.705-.825-2.722-.825-.511 0-.915.108-1.212.325a1.026 1.026 0 00-.445.87c0 .374.119.681.359.92.239.239.73.535 1.472.887 1.106.523 1.893 1.053 2.364 1.592.468.54.703 1.211.703 2.013zm12.727-2.672c0 1.391-.317 2.599-.949 3.621-.633 1.023-1.523 1.74-2.672 2.153l3.431 3.176H27.62l-2.45-2.747c-1.05-.038-1.998-.316-2.842-.833-.844-.516-1.496-1.225-1.955-2.124s-.689-1.902-.689-3.007c0-1.226.249-2.319.746-3.279.498-.96 1.197-1.698 2.099-2.215.902-.516 1.935-.775 3.102-.775 1.088 0 2.063.25 2.924.751.86.5 1.528 1.212 2.004 2.136.477.924.715 1.972.715 3.143zm-2.804.149c0-1.199-.261-2.146-.784-2.842s-1.237-1.044-2.145-1.044c-.924 0-1.663.349-2.219 1.047-.555.699-.833 1.628-.833 2.788 0 1.155.272 2.077.816 2.767.545.69 1.267 1.035 2.169 1.035.919 0 1.647-.334 2.186-1.002.54-.667.81-1.584.81-2.749zm11.803 5.848h-7.044V23.851h2.664v9.667h4.38z" fill="#fff"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 92 92"><path fill="#F05133" d="M90.2,41.9L50,1.7c-2.3-2.3-6.1-2.3-8.4,0l-8.3,8.3l10.6,10.6c2.5-0.8,5.3-0.3,7.2,1.7c2,2,2.5,4.8,1.7,7.3   L63,39.8c2.5-0.8,5.3-0.3,7.3,1.7c2.8,2.7,2.8,7.2,0,10c-2.8,2.8-7.2,2.8-10,0c-2.1-2.1-2.6-5.1-1.5-7.7l-9.5-9.5v25   c0.7,0.3,1.3,0.8,1.9,1.3c2.8,2.7,2.8,7.2,0,10c-2.8,2.7-7.2,2.7-10,0c-2.8-2.8-2.8-7.2,0-10c0.7-0.7,1.5-1.2,2.3-1.5V33.8   c-0.8-0.3-1.6-0.9-2.3-1.5c-2.1-2.1-2.6-5.1-1.5-7.7L29.2,14.2L1.7,41.7c-2.3,2.3-2.3,6.1,0,8.4l40.1,40.1c2.3,2.3,6.1,2.3,8.4,0   l39.9-39.9C92.5,47.9,92.5,44.2,90.2,41.9z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="14 14 35 35"><path d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" fill="url(#a)"/><path d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z" fill="url(#b)"/><defs><linearGradient id="a" x1="19.075" y1="18.782" x2="34.898" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8"/><stop offset="1" stopColor="#366994"/></linearGradient><linearGradient id="b" x1="28.809" y1="28.882" x2="45.803" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052"/><stop offset="1" stopColor="#FFC331"/></linearGradient></defs></svg>
                            </div>
                        </div>
                    </div>
                    <div className={style.experience}>
                        <h2>Work Experience</h2>
                        <div className={style.jobContainer}>
                            <div className={style.jobTitle}>
                                <h2>Junior Programmer</h2>
                                <h3>Osceola County - 2023 to Present</h3>
                            </div>
                            <div>
                                <p>
                                    Assist in creation and maintanence of vital internal systems.
                                    Created backend systems to provision all new staff members 
                                    that saw a 99.93% improvement in efficiency.
                                </p>
                            </div>
                        </div>
                        <div className={style.jobContainer}>
                            <div className={style.jobTitle}>
                                <h2>Computer Technician</h2>
                                <h3>Osceola County - 2020 to 2023</h3>
                            </div>
                            <div>
                                <p>
                                    First contact for any technical issues at the school. Maintained 1000+ devices
                                    for all students and staff members. Communicated with the team to resolve
                                    issues, while keeping up with all tickets.
                                </p>
                            </div>
                        </div>
                        <a 
                            className={style.resumeLink} 
                            href="/AnthonyRolonResume.pdf" 
                            target="_blank"
                        >View Full Resume</a>
                    </div>
                    <div className={style.projectContainer}>
                        <h2>Projects</h2>
                        <div className={style.projects}>
                            <FadeInSection className={style.project}>
                                <div className={style.description}>
                                    <h2>Plex Discord Bot</h2>
                                    <p>
                                        This project was built to control the playback of a plex client
                                        through the use of a discord bot. It was built using NodeJS, along with REST
                                        API calls to hit the Plex API and control the client.
                                    </p>
                                    <button>View Full Project</button>
                                </div>
                                <Card image='/websitePFP.png' alt='picture'></Card>
                            </FadeInSection>
                            <FadeInSection className={style.project}>
                                <Card image='/websitePFP.png' alt='picture'></Card>
                                <div className={style.description}>
                                    <h2>Plex Discord Bot</h2>
                                    <p>
                                        This project was built to control the playback of a plex client
                                        through the use of a discord bot. It was built using NodeJS, along with REST
                                        API calls to hit the Plex API and control the client.
                                    </p>
                                    <a>View Full Project</a>
                                </div>
                            </FadeInSection>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}