// ------------------------------------------ //
// CONTACT PAGE
// ------------------------------------------ //
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
                            <use xlinkHref="#call"></use>
                        </svg>
                        <h1>
                            <span className="language__english language__active">Contact me</span>
                            <span className="language__russian">Контакты</span>
                        </h1>
                    </div>
                    <div className="contact__reach">
                        <div className="title">
                            <h2>
                                <span className="language__english language__active">Reach me</span>
                                <span className="language__russian">Свяжитесь со мной</span>
                            </h2>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#map-marker"></use>
                            </svg>
                            <h3>
                                <span className="language__english language__active">Location</span>
                                <span className="language__russian">Местоположение</span>
                                <span>St. Petersburg</span>
                            </h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#call"></use>
                            </svg>
                            <h3>
                                <span>Skype</span>
                                <a href="skype:rogatnev_nikita?chat">rogatnev_nikita</a>
                            </h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#mail"></use>
                            </svg>
                            <h3>
                                <span>Email</span>
                                <a href="mailto:mail@rogatnev.ru">mail@rogatnev.ru</a>
                            </h3>
                        </div>
                        <div className="contact__reach-item">
                            <svg>
                                <use xlinkHref="#check"></use>
                            </svg>
                            <h3>
                                <span className="language__english language__active">Freelance</span>
                                <span className="language__russian">Найм</span>
                                <span className="language__english language__active">Available</span>
                                <span className="language__russian">Доступен</span>
                            </h3>
                        </div>
                    </div>
                    <div className="contact__social">
                        <div className="title">
                            <h2>
                                <span className="language__english language__active">Let's socialize</span>
                                <span className="language__russian">Социальные сети</span>
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
