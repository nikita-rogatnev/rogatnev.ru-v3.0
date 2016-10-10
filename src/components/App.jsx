import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.array.isRequired
};

function App({children, routes}) {
    function generateMapMenu() {
        let path = '';

        function nextPath(route) {
            path += ((path.slice(-1) === '/'
                ? ''
                : '/') + (route.path === '/'
                ? ''
                : route.path));
            return path;
        }

        return (routes.filter(route => route.mapMenuTitle).map((route, index, array) => (
            <span key={index}>
                <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
                {(index + 1) < array.length && ' / '}
            </span>
        )));
    }

    return (
        <div className="app-container__content">
            <header className="header">
                <nav id="header__navigation" className="header__navigation container" role="navigation">
                    <ul>
                        <li className="header__navigation-item header__navigation-item--active">
                            <a href="#home"><i className="pe-7s-home"></i>Home</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="#about"><i className="pe-7s-user"></i>About Me</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="#resume"><i className="pe-7s-id"></i>Resume</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="#portfolio"><i className="pe-7s-glasses"></i>Portfolio</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="#certifacates"><i className="pe-7s-glasses"></i>Certifacates</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="#blog"><i className="pe-7s-notebook"></i>Blog</a>
                        </li>
                        <li className="header__navigation-item">
                            <a href="#contact"><i className="pe-7s-call"></i>Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                {children}
            </main>
        </div>
    );
}

App.propTypes = propTypes;

export default App;
