// ------------------------------------------ //
// PORTFOLIO PAGE
// ------------------------------------------ //
import React, {PropTypes} from 'react';
import {portfolio__link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

var Portfolio = React.createClass({
    render: function () {
        var PortfolioItemsComponents = this
            .props
            .PortfolioItems
            .map(function (portfolio__item) {
                return (
                    <article className="portfolio__item">
                        <a href={portfolio__item.portfolio__link} className="portfolio__link" target="_blank">
                            <img src={portfolio__item.portfolio__image} className="portfolio__image" alt={portfolio__item.portfolio__title}/>
                        </a>
                        <div className="portfolio__description">
                            <h2>{portfolio__item.portfolio__title}</h2>
                            <p>{portfolio__item.portfolio__description}</p>
                        </div>
                    </article>
                );
            });
        return <div className="portfolio__items">{PortfolioItemsComponents}</div>;
    }
});

var PortfolioItems = [
    {
        key: '1',
        portfolio__title: 'Airbnb Open 2016',
        portfolio__link: 'https://airbnbopen.com/home',
        portfolio__description: 'LESS, HTML5, CSS3, JS',
        portfolio__image: 'build/img/portfolio/airbnbopen.png'
    }, {
        key: '2',
        portfolio__title: 'Vocord',
        portfolio__link: 'https://mayer-web.github.io/vocord/',
        portfolio__description: 'LESS, HTML5, CSS3, JS',
        portfolio__image: 'build/img/portfolio/vocord.png'
    }, {
        key: '3',
        portfolio__title: 'Positive Communications',
        portfolio__link: 'http://positivecommunications.ru/',
        portfolio__description: 'HTML5, CSS3, JS, WordPress',
        portfolio__image: 'build/img/portfolio/positive.png'
    }, {
        key: '4',
        portfolio__title: 'MOOVY Template',
        portfolio__link: 'http://rogatnev-nikita.github.io/moovy/html/',
        portfolio__description: 'HTML5, CSS3, JS',
        portfolio__image: 'build/img/portfolio/moovy.png'
    }, {
        key: '5',
        portfolio__title: 'DIGITIZE Template',
        portfolio__link: 'http://rogatnev-nikita.github.io/digitize-theme/html/',
        portfolio__description: 'HTML5, CSS3, JS',
        portfolio__image: 'build/img/portfolio/digitize.png'
    }, {
        key: '6',
        portfolio__title: 'Olesya Tattoo Master',
        portfolio__link: 'http://www.olesya-tattoo.ru/',
        portfolio__description: 'HTML5, CSS3, JS',
        portfolio__image: 'build/img/portfolio/tattoo.png'
    }
];

function portfolio({children}) {
    return (
        <div className="main__container">
            <section className="portfolio" id="portfolio">
                <div className="portfolio__container">
                    <div className="portfolio__heading">
                        <svg>
                            <use xlinkHref="#glasses"></use>
                        </svg>
                        <h1>Latest works</h1>
                    </div>
                    <Portfolio PortfolioItems={PortfolioItems}/>
                </div>
            </section>
        </div>

    );
}

export default portfolio;
