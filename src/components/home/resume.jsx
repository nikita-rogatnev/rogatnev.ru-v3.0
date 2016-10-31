// ------------------------------------------ //
// RESUME PAGE
// ------------------------------------------ //
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
                        <h1>
                            <span className="language__english language__active">Resume</span>
                            <span className="language__russian">Резюме</span>
                        </h1>
                    </div>
                    <div className="resume__history">
                        <div className="resume__history-item">
                            <h2>
                                <span className="language__english language__active">Work history</span>
                                <span className="language__russian">Опыт работы</span>
                            </h2>
                            <svg>
                                <use xlinkHref="#portfolio"></use>
                            </svg>
                        </div>
                        <div className="resume__history-item">
                            <h3>
                                <span className="language__english language__active">Jun 2016 - Current</span>
                                <span className="language__russian">Июнь 2016 - НВ</span>
                            </h3>
                            <h4>
                                <span className="language__english language__active">Front-End Engineer</span>
                                <span className="language__russian">Front-End инженер</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">ENTech Solutions (USA)</span>
                                <span className="language__russian">ENTech Solutions (США)</span>
                            </h5>
                            <a href="http://www.entechsolutions.com" target="_blank">
                                <img src="build/img/resume/entechsolutions.png" alt="ENTech Solutions" width="135"/>
                            </a>
                            <p>
                                <span className="language__english language__active">Working as a full-time Front-End engineer in ENTech Solutions. We build and deploy scalable Microsoft .Net stack web applications (SaaS), follow Agile Process and methodology.</span>
                                <span className="language__russian">12</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>
                                <span className="language__english language__active">Mar 2015 - Current</span>
                                <span className="language__russian">Март 2015 - НВ</span>
                            </h3>
                            <h4>
                                <span className="language__english language__active">Tutor</span>
                                <span className="language__russian">Наставник базового и продвинутого интенсивов</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">HTML Academy (Russia)</span>
                                <span className="language__russian">HTML Academy (Россия)</span>
                            </h5>
                            <a href="https://htmlacademy.ru/" target="_blank">
                                <img src="build/img/resume/htmlacademy.svg" alt="HTML Academy" width="135"/>
                            </a>
                            <p>
                                <span className="language__english language__active">Tutor at basic and advanced HTML Academy intensives. Daily code review of students' practical tasks and code projects. Project development help during the individual online consultations.</span>
                                <span className="language__russian">Проверка практических заданий и код-ревью проектов студентов, а также помощь с вёрсткой макетов во время индивидуальных онлайн консультаций.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2016</h3>
                            <h4>
                                <span className="language__english language__active">Webmaster</span>
                                <span className="language__russian">Веб-мастер</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">Positive Communications (Russia)</span>
                                <span className="language__russian">Positive Communications (Россия)</span>
                            </h5>
                            <a href="http://positivecommunications.ru/" target="_blank">
                                <img src="build/img/resume/positivecommunications.svg" alt="Positive Communications" width="135"/>
                            </a>
                            <p>
                                <span className="language__english language__active">Since 2013 I have been collaborating with the St. Petersburg branch of «Positive Communications». Main duty - maintaining the «RWM Capital» management company websites in the English and Russian languages; weekly back-up of the websites' lite version; Positive Communications company website development.</span>
                                <span className="language__russian">С 2013 года сотрудничаю с Санкт-Петербургским отделением «Positive Communications». Основная задача - поддержание английской и русской версий сайта управляющей компании «РВМ Капитал»; еженедельное создание резервной копии lite версии сайта; разработка сайта Positive Communications.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2015</h3>
                            <h4>
                                <span className="language__english language__active">Lead web developer</span>
                                <span className="language__russian">Lead веб разработчик</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">Teplodom and Domservis (Russia)</span>
                                <span className="language__russian">Теплый дом и Домсервис (Россия)</span>
                            </h5>
                            <p>
                                <span className="language__english language__active">Corporate websites development, SEO optimization and weekly maintenance.</span>
                                <span className="language__russian">Создание корпоративных сайтов, SEO оптимизация и их еженедельное поддержание.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2014</h3>
                            <h4>
                                <span className="language__english language__active">Webmaster</span>
                                <span className="language__russian">Веб-мастер</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">Saytoriya (Russia)</span>
                                <span className="language__russian">Сайтория (Россия)</span>
                            </h5>
                            <p>
                                <span className="language__english language__active">From December 2013 to March 2014 I have collaborated with the design studio «Saytoriya». Five websites based on content management system MODx Revolution were created during this period.</span>
                                <span className="language__russian">С декабря 2013 по март 2014 года сотрудничал со студией дизайна «Сайтория». За этот период было создано пять сайтов на системе управления содержимым MODx Revolution.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2013 - 2013</h3>
                            <h4>
                                <span className="language__english language__active">Senior Back-End developer</span>
                                <span className="language__russian">Senior Back-End разработчик</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">Adhere mobile (Russia)</span>
                                <span className="language__russian">Adhere mobile (Россия)</span>
                            </h5>
                            <p>
                                <span className="language__english language__active">Development of Kazakhstan mobile social network based on WAP and Yii PHP Framework.</span>
                                <span className="language__russian">Разработка Казахстанской мобильной социальной сети на базе WAP и Yii PHP фреймворкa.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2012 - 2013</h3>
                            <h4>
                                <span className="language__english language__active">Front-End developer and designer</span>
                                <span className="language__russian">Front-End разработчик и дизайнер</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">Arkvision (Russia)</span>
                                <span className="language__russian">Arkvision (Россия)</span>
                            </h5>
                            <p>
                                <span className="language__english language__active">Websites design drawing (mostly Landing Pages) and Front-End development with Bootstrap.</span>
                                <span className="language__russian">Создание дизайн-макетов сайтов (преимущественно лендингов) и их верстка на базе Bootstrap.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>
                                <span className="language__english language__active">2010 - Current</span>
                                <span className="language__russian">2010 - НВ</span>
                            </h3>
                            <h4>
                                <span className="language__english language__active">Web Developer</span>
                                <span className="language__russian">Веб разработчик</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">Freelance</span>
                                <span className="language__russian">Фриланс</span>
                            </h5>
                            <p>
                                <span className="language__english language__active">More than 100 websites for individual and corporate clients have been developed since 2010. Some of them are made with self-made CMS or WordPress CMS.</span>
                                <span className="language__russian">С 2010 года разработано более 100 сайтов для индивидуальных и корпоративных клиентов. некоторые из них на самописной CMS или CMS WordPress.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h2>
                                <span className="language__english language__active">Education</span>
                                <span className="language__russian">Образование</span>
                            </h2>
                            <svg>
                                <use xlinkHref="#study"></use>
                            </svg>
                        </div>
                        <div className="resume__history-item">
                            <h3>2012 &ndash; 2015</h3>
                            <h4>
                                <span className="language__english language__active">Bachelor of engineering</span>
                                <span className="language__russian">Бакалавр инженерии</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">Mikkelin ammattikorkeakoulu (Finland)</span>
                                <span className="language__russian">Mikkelin ammattikorkeakoulu (Финляндия)</span>
                            </h5>
                            <a href="http://www.mamk.fi/" target="_blank">
                                <img src="build/img/resume/mamk.png" alt="Mikkelin ammattikorkeakoulu" width="135"/>
                            </a>
                            <p>
                                <span className="language__english language__active">From August 2012 to July 2015 I studied in Mikkeli University of Applied Sciences, Finland (Mikkelin Ammattikorkeakoulu) at the Information Technology department. Mikkelin Ammattikorkeakoulu was ranked as the best Finnish university of applied sciences in 2014.</span>
                                <span className="language__russian">С августа 2012 г. по июль 2015 г. прошел обучение в университете прикладных наук города Миккели, Финляндия (Mikkelin Ammattikorkeakoulu) на кафедре IT (Информационные Технологии). В 2014 году Mikkelin Ammattikorkeakoulu был признан лучшим университетом прикладных наук Финляндии.</span>
                            </p>
                        </div>
                        <div className="resume__history-item">
                            <h3>2009 &ndash; 2012</h3>
                            <h4>
                                <span className="language__english language__active">Master of digital information processing</span>
                                <span className="language__russian">Мастер цифровой обработки информации</span>
                            </h4>
                            <h5>
                                <span className="language__english language__active">GBOU liceum at St. Petersburg State University of Telecommunications (Russia)</span>
                                <span className="language__russian">ГБОУ лицей при Санкт-Петербургском государственном университете телекоммуникаций им. проф. М.А. Бонч-Бруевича (Россия)</span>
                            </h5>
                            <p>
                                <span className="language__english language__active">From September 2009 to May 2012 I participated in the «Master of digital information processing» major-training program in the amount of 1,020 hours).</span>
                                <span className="language__russian">С сентября 2009 г. по май 2012 г. прошел обучение по программе профильно-профессиональной подготовки «Мастер цифровой обработки информации» в объеме 1020 часов.</span>
                            </p>
                        </div>
                    </div>

                    <div className="resume__skills">
                        <div className="title title--first">
                            <h2>
                                <span className="language__english language__active">Dev skills</span>
                                <span className="language__russian">Скилы</span>
                            </h2>
                        </div>
                        <div className="resume__skills-dev">
                            <h4>Agile</h4>
                            <h4>
                                <span className="language__english language__active">BEM</span>
                                <span className="language__russian">БЭМ</span>
                            </h4>
                            <h4>Gulp</h4>
                            <h4>Git</h4>
                            <h4>Github</h4>
                            <h4>Mobile first</h4>
                            <h4>
                                <span className="language__english language__active">Adaptive design</span>
                                <span className="language__russian">Адаптив</span>
                            </h4>
                            <h4>Pixel perfect</h4>
                            <h4>SEO</h4>
                            <h4>
                                <span className="language__english language__active">Progressive enhancement</span>
                                <span className="language__russian">Прогрессивное улучшение</span>
                            </h4>
                        </div>

                        <div className="title">
                            <h2>
                                <span className="language__english language__active">Coding skills</span>
                                <span className="language__russian">Программирование</span>
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
                            <h4>Bootstrap</h4>
                            <div className="resume__skills-bar">
                                <div className="resume__skills-progress resume__skills-progress--90">
                                    <span>90</span>
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
                                <span className="language__english language__active">Design skills</span>
                                <span className="language__russian">Дизайн</span>
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
                                <span className="language__english language__active">CMS skills</span>
                                <span className="language__russian">Разрабодка под CMS</span>
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
                                <span className="language__english language__active">Languages</span>
                                <span className="language__russian">Языки</span>
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
                            <span>
                                <span className="language__english language__active">Print / Download CV</span>
                                <span className="language__russian">Распечатать / Скачать CV</span>
                            </span>
                        </a>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default resume;
