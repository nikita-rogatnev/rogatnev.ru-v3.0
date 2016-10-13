import React, {PropTypes} from 'react';
import {Link} from 'react-router';

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
                    <div className="contact__reach">
                        <div className="title">
                            <h2>
                                <span>Reach me</span>
                            </h2>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#map-marker"></use>
                            </svg>
                            <h3>Location<br />Koh Samui</h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#call"></use>
                            </svg>
                            <h3>Skype<br /><a href="skype:rogatnev_nikita?chat">rogatnev_nikita</a></h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#mail"></use>
                            </svg>
                            <h3>Email<br /><a href="mailto:mail@rogatnev.ru">mail@rogatnev.ru</a></h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#check"></use>
                            </svg>
                            <h3>Freelance<br />Available</h3>
                        </div>
                    </div>
                    <div className="contact__social">
                        <div className="title">
                            <h2>
                                <span>Let's socialize</span>
                            </h2>
                        </div>
                        <a className="contact__social-item" target="_blank" href="https://vk.com/rogatnev_nikita">
                            <svg>
                                <use xlinkHref="#vk-logo"></use>
                            </svg>
                        </a>
                        <a className="contact__social-item" target="_blank" href="https://github.com/rogatnev-nikita">
                            <svg>
                                <use xlinkHref="#github-logo"></use>
                            </svg>
                        </a>
                        <a className="contact__social-item" target="_blank" href="https://linkedin.com/in/rogatnevnikita/">
                            <svg>
                                <use xlinkHref="#in-logo"></use>
                            </svg>
                        </a>
                        <a className="contact__social-item" target="_blank" href="https://instagram.com/rogatnev_nikita/">
                            <svg>
                                <use xlinkHref="#inst-logo"></use>
                            </svg>
                        </a>
                        <a className="contact__social-item" target="_blank" href="https://www.facebook.com/rogatnevnikita">
                            <svg>
                                <use xlinkHref="#fb-logo"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default contact;
