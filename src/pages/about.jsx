import React, { Fragment } from 'react'
import { grid } from '../data.js';
import wallpaper from "../assets/wallpaper.jpg";
import { FaLocationDot } from "react-icons/fa6";
import './about.css'
const About = () => {
    return (
        <Fragment>
            <section className="About" id="About">
                <p style={{ fontSize: '19px', marginLeft: "525px", color: "var(--primary-accent)" }}><i className="bi bi-person"></i> GET TO
                    KNOW ME</p>
                <h1 style={{ fontSize: "30px", marginLeft: "555px", fontWeight: 'bolder' }}>About Me</h1>
                <p style={{ fontSize: '19px', marginLeft: '250px' }}>Passionate developer turning concepts into reliable,
                    production-ready web platforms.</p>
                <div className="container">
                    <div className="left">
                        <div className="profile">
                            <div className="info">
                               <img src={wallpaper} alt="Bhargavi" />
                                <div className="infos">
                                    <h1>Donthireddy Bhargavi</h1>
                                    <h3>Full-Stack Web Developer</h3>
                                    <p><FaLocationDot />Kadapa, Andhra Pradesh, India</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="card">
                                    <div className="card-info">
                                        {grid.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <div key={item.id}>
                                                    <Icon />
                                                    <h1>{item.title}</h1>
                                                    <p>{item.description}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <h1>Full-Stack Developer focused on building reliable, user-friendly applications.</h1>
                        <p>I'm a Full-Stack Web Developer with a strong foundation in <strong>Python and Django,</strong>
                            focused on building
                            reliable and user-friendly web applications.
                            My experience spans across professional development, freelance projects,
                            and academic applications.I've worked on everything from responsive frontend interfaces and REST API
                            integrations to authentication
                            systems, CRUD-based applications, booking platforms, and AI-powered chatbots.

                            I also have hands-on experience deploying Django applications on <strong>Hostinger and AWS
                                EC2,</strong> working with
                            Linux environments, Git workflows, and server configuration.</p><br /><br />
                        <div className="gradient-box">
                            <h2 style={{ fontSize: '18px' }}>"I enjoy taking an idea from concept → development → deployment and
                                turning it into a working
                                product."</h2>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default About;
