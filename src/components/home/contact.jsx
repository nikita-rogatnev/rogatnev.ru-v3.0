import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {SocialIcon} from 'react-social-icons';

const propTypes = {
    children: PropTypes.element
};

function contact({children}) {
    return (
        <div className="main__container">
            <section className="contact" id="contact">
                <div className="contact__container">
                    <div className="contact__heading">
                        <svg>
                            <use xlinkHref="#user"></use>
                        </svg>
                        <h1>Contact me</h1>
                    </div>
                    <div className="contact__social">
                        <div className="title">
                            <h2>
                                <span>Let's socialize</span>
                            </h2>
                        </div>
                        <SocialIcon className="contact__social-item" url="https://vk.com/rogatnev_nikita" network="vk" color="#1c262b" />
                        <SocialIcon className="contact__social-item" url="https://github.com/rogatnev-nikita" network="github" color="#1c262b" />
                        <SocialIcon className="contact__social-item" url="https://linkedin.com/in/rogatnevnikita/" network="linkedin" color="#1c262b" />
                        <SocialIcon className="contact__social-item" url="https://instagram.com/rogatnev_nikita/" network="instagram" color="#1c262b" />
                    </div>
                    <div className="contact__reach">
                        <div className="title">
                            <h2>
                                <span>Reach me</span>
                            </h2>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#pin"></use>
                            </svg>
                            <h3>Koh Samui, Thailand</h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#call"></use>
                            </svg>
                            <h3>Tel: +7 999 216-37-96</h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#mail"></use>
                            </svg>
                            <h3>mail [at] rogatnev.ru</h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#tick"></use>
                            </svg>
                            <h3>Freelance available</h3>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default contact;
