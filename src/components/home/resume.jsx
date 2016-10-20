import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function resume({children}) {
    return (
        <div className="main__container">
            <section className="resume" id="resume">
                <div className="resume__container">
                    <div className="resume__heading">
                        <svg>
                            <use xlinkHref="#id"></use>
                        </svg>
                        <h1>Resume</h1>
                    </div>
                    <div className="resume__history">
                        <div className="resume__history-item">
                            <h2>WORK HISTORY</h2>
                            <svg>
                                <use xlinkHref="#portfolio"></use>
                            </svg>
                        </div>
                        <div className="resume__history-item">
                            <h3>Jun 2016 - Current</h3>
                            <h4>Frontend Engineer</h4>
                            <h5>ENTech Solutions (USA)</h5>
                            <p>Working as a full-time Frontend engineer for ENTech Solutions. We build and deploy scalable Microsoft .Net stack web applications (SaaS), follow Agile Process and methodology.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2015 - Current</h3>
                            <h4>Tutor</h4>
                            <h5>HTML Academy (Russia)</h5>
                            <p>Tutor at basic and advanced HTML Academy intensives. Daily code review of students' practical tasks and code projects. Project development help during the individual online consultations.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2015</h3>
                            <h4>Webmaster</h4>
                            <h5>Positive Communications (Russia)</h5>
                            <p>Since 2013 I have been collaborating with the St. Petersburg branch of «Positive Communications». Main duty - maintaining the «RWM Capital» management company websites in the English and Russian languages; weekly back-up of the websites' lite version; Positive Communications company website development.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2015</h3>
                            <h4>LEAD WEB DEVELOPER</h4>
                            <h5>Teplodom and Domservis (Russia)</h5>
                            <p>Corporate websites development, SEO optimization and weekly maintenance.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2014</h3>
                            <h4>Webmaster</h4>
                            <h5>SAYTORIYA (Russia)</h5>
                            <p>From December 2013 to March 2014 I have collaborated with the design studio «Saytoriya». Five websites based on content management system MODx Revolution were created during this period.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2013</h3>
                            <h4>SENIOR BACK-END DEVELOPER</h4>
                            <h5>ADHERE MOBILE (Russia)</h5>
                            <p>Development of Kazakhstan mobile social network based on WAP and Yii PHP Framework.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2012 - 2013</h3>
                            <h4>FRONT-END WEB DEVELOPER & DESIGNER</h4>
                            <h5>ARKVISION (Russia)</h5>
                            <p>Websites design drawing (mostly Landing Pages) and Front-End development with Bootstrap.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2010 - Current</h3>
                            <h4>Webmaster</h4>
                            <h5>Freelance</h5>
                            <p>More than 100 websites for individual and corporate clients have been developed since 2010. Some of them are made with self-made CMS or WordPress CMS.</p>
                        </div>

                        <div className="resume__history-item">
                            <h2>EDUCATION</h2>
                            <svg>
                                <use xlinkHref="#study"></use>
                            </svg>
                        </div>
                        <div className="resume__history-item">
                            <h3>2012 &ndash; 2015</h3>
                            <h4>BACHELOR OF ENGINEERING</h4>
                            <h5>MIKKELIN AMMATTIKORKEAKOULU (Finland)</h5>
                            <p>From August 2012 to July 2015 I studied in Mikkeli University of Applied Sciences, Finland (Mikkelin Ammattikorkeakoulu) at the Information Technology department.</p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2009 &ndash; 2012</h3>
                            <h4>MASTER OF DIGITAL INFORMATION PROCESSING</h4>
                            <h5>GBOU LНСEUM AT SPB SUT (Russia)</h5>
                            <p>From September 2009 to May 2012 I participated in the «Master of digital information processing» major-training program in the amount of 1,020 hours).</p>
                        </div>
                    </div>

                    <div className="resume__skills">
                        <div className="title">
                            <h2>
                                <span>Coding skills</span>
                            </h2>
                        </div>
                        <div className="resume__skills-item">
                            <h4>HTML5</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--95">
                                    <span>95</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>CSS3</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--95">
                                    <span>95</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>LESS / SASS</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--75">
                                    <span>75</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>jQuery</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--60">
                                    <span>60</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>MySQL</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--40">
                                    <span>40</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Java Script</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--35">
                                    <span>35</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>PHP</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--25">
                                    <span>25</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>C#</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--10">
                                    <span>10</span>
                                </div>
                            </div>
                        </div>

                        <div className="title">
                            <h2>
                                <span>Design skills</span>
                            </h2>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Sketch</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--80">
                                    <span>80</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Adobe Photoshop CC</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--60">
                                    <span>60</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Adobe Illustrator CC</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--55">
                                    <span>55</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Adobe InDesign CC</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--30">
                                    <span>30</span>
                                </div>
                            </div>
                        </div>

                        <div className="title">
                            <h2>
                                <span>CMS skills</span>
                            </h2>
                        </div>
                        <div className="resume__skills-item">
                            <h4>WordPress</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--85">
                                    <span>85</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>1-C Bitrix</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--55">
                                    <span>55</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Livestreet</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--35">
                                    <span>35</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>MODX Revolution</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--30">
                                    <span>30</span>
                                </div>
                            </div>
                        </div>

                        <div className="title">
                            <h2>
                                <span>Languages</span>
                            </h2>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Russian</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--95">
                                    <span>95</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>English</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--85">
                                    <span>85</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__skills-item">
                            <h4>Chinese</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--15">
                                    <span>15</span>
                                </div>
                            </div>
                        </div>

                        <a href="https://hh.ru/resume/174b5603ff01623a6f0039ed1f6c5a434e5969?print=true" className="resume__download" target="_blank">
                            <svg>
                                <use xlinkHref="#download"></use>
                            </svg>
                            <span>Print CV</span>
                        </a>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default resume;
