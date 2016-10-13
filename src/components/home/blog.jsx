import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function blog({children}) {
    return (
        <div className="main__container">
            <section className="blog" id="blog">
                <div className="blog__container container-grid">

                    <article className="blog__item">
                        <div className="blog__item-media">
                            <a href="https://habrahabr.ru/post/213187/" target="_blank">
                                <img src="/build/img/blog/blog__img-213187.jpg" alt="blog image" />
                            </a>
                        </div>
                        <header className="blog__item-content">
                            <span title="2014" className="blog__item-date"><span className="blog__item-day">2</span>mar</span>
                            <h3>
                                <span>Как удалить 1500000 записей из базы данных Yahoo</span>
                                <a href="https://habrahabr.ru/post/213187/" target="_blank">Continue reading at [habrahabr.ru]</a>
                            </h3>
                        </header>
                    </article>

                </div>
            </section>
        </div>
    );
}

export default blog;
