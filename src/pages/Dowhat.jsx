import React, { Fragment } from "react";
import {
    BsWindowSidebar,
    BsDatabase,
    BsPhone,
    BsRobot,
    BsCloud
} from "react-icons/bs";

import "./Dowhat.css";

const cards = [
    {
        id: 1,
        icon: <BsWindowSidebar />,
        number: "01",
        title: "Full-Stack Engineering",
        description:
            "Crafting responsive frontend designs and robust Python/Django backend architecture.",
        items: ["Python", "Django", "JavaScript", "Bootstrap"]
    },
    {
        id: 2,
        icon: <BsDatabase />,
        number: "02",
        title: "Backend Development",
        description:
            "Designing backend logic, database operations, secure user authentication systems, CRUD modules, and scalable REST API integrations.",
        items: ["REST APIs", "MySQL", "Auth Systems", "CRUD"]
    },
    {
        id: 3,
        icon: <BsPhone />,
        number: "03",
        title: "Responsive UI Development",
        description:
            "Creating crisp, responsive interfaces that work smoothly across desktop, tablet, and mobile devices with cross-browser compatibility.",
        items: ["HTML5", "CSS3", "Bootstrap", "UI/UX"]
    },
    {
        id: 4,
        icon: <BsRobot />,
        number: "04",
        title: "AI-Powered Applications",
        description:
            "Integrating conversational AI and language models into practical web applications, featuring sentiment analysis and content moderation.",
        items: ["AI/ML", "Natural Language Processing", "Computer Vision", "Deep Learning"]
    },
    {
        id: 5,
        icon: <BsCloud />,
        number: "05",
        title: "Deployment & Hosting",
        description:
            "Deploying and maintaining live applications on Hostinger VPS and AWS EC2 using Linux-based workflows, DNS configuration, and Git.",
        items: ["AWS EC2", "Hostinger", "Linux / Ubuntu", "Git"]
    }
];

const Dowhat = () => {
    return (
        <Fragment>

            <section className="Dowhat" id="Dowhat">

                <p className="section-label">
                    <BsWindowSidebar />
                    Core Capabilities
                </p>

                <h1 className="section-title">
                    What I Do
                </h1>

                <p className="section-description">
                    End-to-end development capabilities from crafting backend logic
                    to launching on cloud servers.
                </p>

                <div className="cards">

                    {cards.map((card) => (

                        <div className="containers" key={card.id}>

                            <div className="row">

                                <div className="col">
                                    <div className="position">

                                        {card.icon}

                                        <p>{card.number}</p>

                                    </div>

                                    <h1>
                                        {card.title}
                                    </h1>

                                    <p>
                                        {card.description}
                                    </p>

                                    <div className="line"></div>

                                    <div className="list">

                                        {card.items.map((item, index) => (
                                            <button key={index}>
                                                {item}
                                            </button>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </Fragment>
    );
};

export default Dowhat;