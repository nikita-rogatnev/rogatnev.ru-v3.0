import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function about({children}) {
    return (
        <div className="main__container">
            <section className="about" id="about">
                <div className="about__container">
                    <div className="about__heading">
                        <svg>
                            <use xlinkHref="#user"></use>
                        </svg>
                        <h1>About me</h1>
                    </div>
                    <div className="about__services">
                        <div className="title">
                            <h2>
                                <span>Services</span>
                            </h2>
                        </div>
                        <div className="about__services-item"></div>
                        <div className="about__services-item"></div>
                        <div className="about__services-item"></div>
                        <div className="about__services-item"></div>
                    </div>
                    <div className="about__process">
                        <div className="title">
                            <h2>
                                <span>Work process</span>
                            </h2>
                        </div>
                        <div className="about__process-item"></div>
                        <div className="about__process-item"></div>
                        <div className="about__process-item"></div>
                        <div className="about__process-item"></div>
                        <div className="about__process-item"></div>
                        <div className="about__process-item"></div>
                    </div>
                    <div className="about__clients">
                        <div className="title">
                            <h2>
                                <span>Clients</span>
                            </h2>
                        </div>
                        <div className="about__clients-item">
                            <img src="/build/img/about/__clients/rwm.png" alt="" width="160" height="160"/>
                        </div>
                        <div className="about__clients-item"></div>
                        <div className="about__clients-item"></div>
                        <div className="about__clients-item"></div>
                        <div className="about__clients-item"></div>
                        <div className="about__clients-item"></div>
                    </div>
                    <div className="about__facts">
                        <div className="title">
                            <h2>
                                <span>Fun fact</span>
                            </h2>
                        </div>
                        <div className="about__facts-item"></div>
                        <div className="about__facts-item"></div>
                        <div className="about__facts-item"></div>
                        <div className="about__facts-item"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default about;
