import React from 'react'
import './Tech.css'
import {
    FaLayerGroup,
    FaCode,
    FaServer,
    FaLaptopCode,
    FaDatabase,
    FaRobot,
    FaCloudArrowUp,
    FaTools
} from "react-icons/fa6";

const Tech = () => {
    return (
        <Fragment>
            <section class="Tech" id="Tech-stack">
                <p style={{ fontSize: '19px', marginLeft: '525px', color: 'var(--primary-accent)' }}> <i class="bi bi-cpu"></i> Technical
                    Skills</p>
                <h1 style={{ fontSize: '30px', marginLeft: '535px', fontWeight: 'bolder' }}>Tech Stack</h1>
                <p style={{ fontSize: '19px', marginLeft: '330px' }}>Organized tools, frameworks, and technologies I work with daily.
                </p>
                <div className="button">

                    <button>
                        <FaLayerGroup />
                        All
                    </button>

                    <button>
                        <FaCode />
                        Languages
                    </button>

                    <button>
                        <FaServer />
                        Backend
                    </button>

                    <button>
                        <FaLaptopCode />
                        Frontend
                    </button>

                    <button>
                        <FaDatabase />
                        Database
                    </button>

                    <button>
                        <FaRobot />
                        AI Integration
                    </button>

                    <button>
                        <FaCloudArrowUp />
                        Deployment
                    </button>

                    <button>
                        <FaTools />
                        Tools
                    </button>

                </div>

                <div id="all" class="tab-content active-tab">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-py"></i>
                                <p>Languages</p>
                            </div>

                            <h1>Python</h1>

                            <pre>Primary programming language
                                for web apps & AI</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-js"></i>
                                <p>Languages</p>
                            </div>

                            <h1>JavaScript</h1>

                            <pre>Frontend interactivity & DOM
                                manipulation</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-database"></i>
                                <p>Languages</p>
                            </div>

                            <h1>SQL</h1>

                            <pre>Database querying & relational
                                schema design</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-server"></i>
                                <p>Backend</p>
                            </div>

                            <h1>Django</h1>

                            <pre>Robust MVT web framework &
                                ORM logic</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-cloud-arrow-up"></i>
                                <p>Backend</p>
                            </div>

                            <h1>REST APIs</h1>

                            <pre>API endpoints, JSON payloads,
                                and integration</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-html"></i>
                                <p>Frontend</p>
                            </div>

                            <h1>HTML5</h1>

                            <pre>Semantic web structure &
                                accessibility</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-css"></i>
                                <p>Frontend</p>
                            </div>

                            <h1>CSS3</h1>

                            <pre>Flexbox, Grid, animations &
                                custom styling</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-bootstrap"></i>
                                <p>Frontend</p>
                            </div>

                            <h1>Bootstrap</h1>

                            <pre>Rapid responsive web UI
                                component framework</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-database-fill"></i>
                                <p>Database</p>
                            </div>

                            <h1>MySQL</h1>

                            <pre>Relational database management
                                & query optimization</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-robot"></i>
                                <p>AI Integration</p>
                            </div>

                            <h1>Ollama</h1>

                            <pre>Local LLM orchestration &
                                prompt pipeline</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-robot"></i>
                                <p>AI Integration</p>
                            </div>

                            <h1>LLaMA 3.2</h1>

                            <pre>Open-weights AI model for
                                conversational chatbots</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-cloud-upload"></i>
                                <p>Deployment</p>
                            </div>

                            <h1>Hostinger</h1>

                            <pre>VPS deployment, web server
                                & DNS setup</pre>

                            <pre class="para"><i class="bi bi-tools"></i> Hands-on</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-cloud"></i>
                                <p>Deployment</p>
                            </div>

                            <h1>AWS EC2</h1>

                            <pre>Cloud virtual servers,
                                security groups & SSH</pre>

                            <pre class="para"><i class="bi bi-tools"></i> Hands-on</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-terminal"></i>
                                <p>Deployment</p>
                            </div>

                            <h1>Linux / Ubuntu</h1>

                            <pre>Command line terminal,
                                permissions & server management</pre>

                            <pre class="para"><i class="bi bi-tools"></i> Hands-on</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-git"></i>
                                <p>Tools</p>
                            </div>

                            <h1>Git</h1>

                            <pre>Version control, branch
                                management & workflows</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-github"></i>
                                <p>Tools</p>
                            </div>

                            <h1>GitHub</h1>

                            <pre>Code repository hosting,
                                pull requests & collaboration</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                    </div>

                </div>



                <div id="languages" class="tab-content">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-py"></i>
                                <p>Languages</p>
                            </div>

                            <h1>Python</h1>

                            <pre>Primary programming language
                                for web apps & AI</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-js"></i>
                                <p>Languages</p>
                            </div>

                            <h1>JavaScript</h1>

                            <pre>Frontend interactivity & DOM
                                manipulation</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-database"></i>
                                <p>Languages</p>
                            </div>

                            <h1>SQL</h1>

                            <pre>Database querying & relational
                                schema design</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                    </div>

                </div>


                <div id="backend" class="tab-content">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-server"></i>
                                <p>Backend</p>
                            </div>

                            <h1>Django</h1>

                            <pre>Robust MVT web framework &
                                ORM logic</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-cloud-arrow-up"></i>
                                <p>Backend</p>
                            </div>

                            <h1>REST APIs</h1>

                            <pre>API endpoints, JSON payloads,
                                and integration</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                    </div>

                </div>


                <div id="frontend" class="tab-content">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-html"></i>
                                <p>Frontend</p>
                            </div>

                            <h1>HTML5</h1>

                            <pre>Semantic web structure &
                                accessibility</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-filetype-css"></i>
                                <p>Frontend</p>
                            </div>

                            <h1>CSS3</h1>

                            <pre>Flexbox, Grid, animations &
                                custom styling</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-bootstrap"></i>
                                <p>Frontend</p>
                            </div>

                            <h1>Bootstrap</h1>

                            <pre>Rapid responsive web UI
                                component framework</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                    </div>

                </div>



                <div id="database" class="tab-content">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-database-fill"></i>
                                <p>Database</p>
                            </div>

                            <h1>MySQL</h1>

                            <pre>Relational database management
                                & query optimization</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                    </div>

                </div>



                <div id="ai" class="tab-content">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-robot"></i>
                                <p>AI Integration</p>
                            </div>

                            <h1>Ollama</h1>

                            <pre>Local LLM orchestration &
                                prompt pipeline</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-robot"></i>
                                <p>AI Integration</p>
                            </div>

                            <h1>LLaMA 3.2</h1>

                            <pre>Open-weights AI model for
                                conversational chatbots</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Intermediate</pre>
                        </div>

                    </div>

                </div>



                <div id="deployment" class="tab-content">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-cloud-upload"></i>
                                <p>Deployment</p>
                            </div>

                            <h1>Hostinger</h1>

                            <pre>VPS deployment, web server
                                & DNS setup</pre>

                            <pre class="para"><i class="bi bi-tools"></i> Hands-on</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-cloud"></i>
                                <p>Deployment</p>
                            </div>

                            <h1>AWS EC2</h1>

                            <pre>Cloud virtual servers,
                                security groups & SSH</pre>

                            <pre class="para"><i class="bi bi-tools"></i> Hands-on</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-terminal"></i>
                                <p>Deployment</p>
                            </div>

                            <h1>Linux / Ubuntu</h1>

                            <pre>Command line terminal,
                                permissions & server management</pre>

                            <pre class="para"><i class="bi bi-tools"></i> Hands-on</pre>
                        </div>

                    </div>

                </div>


                <div id="tools" class="tab-content">

                    <div class="rows">

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-git"></i>
                                <p>Tools</p>
                            </div>

                            <h1>Git</h1>

                            <pre>Version control, branch
                                management & workflows</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                        <div class="cols">
                            <div class="positions">
                                <i class="bi bi-github"></i>
                                <p>Tools</p>
                            </div>

                            <h1>GitHub</h1>

                            <pre>Code repository hosting,
                                pull requests & collaboration</pre>

                            <pre class="para"><i class="bi bi-check-circle"></i> Advanced</pre>
                        </div>

                    </div>

                </div>


            </section>
        </Fragment>
    )
}

export default Tech
