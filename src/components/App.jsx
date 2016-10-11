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
        <div className="app__container">
            <Header />
            <main className="main">
                {children}
            </main>
        </div>
    );
}


// ------------------------------------------ //
// HEADER BLOCK
// ------------------------------------------ //
function Header() {
    return (
        <header className="header">
            <div className="header__profile">
               <img src="https://ru.gravatar.com/userimage/94050862/3286ae2da6fb3e5602cc2ef5a5158bc8.png?size=120" alt="Rogatnev Nikita" width="120" height="120" />
               <h1 class="site-title">Rogatnev Nikita</h1>
            </div>
            <nav id="header__navigation" className="header__navigation" role="navigation">
               <ul>
                   <li className="header__navigation-item header__navigation-item--active">
                       <a href="#intro">
                           <svg>
                               <use xlinkHref="#home"></use>
                           </svg>
                           <span>Home</span>
                       </a>
                   </li>
                   <li className="header__navigation-item">
                       <a href="#about">
                           <svg>
                               <use xlinkHref="#user"></use>
                           </svg>
                           <span>About Me</span>
                       </a>
                   </li>
                   <li className="header__navigation-item">
                       <a href="#resume">
                           <svg><use xlinkHref="#id"></use></svg>
                           <span>Resume</span>
                       </a>
                   </li>
                   <li className="header__navigation-item">
                       <a href="#portfolio">
                           <svg>
                               <use xlinkHref="#glasses"></use>
                           </svg>
                           <span>Portfolio</span>
                       </a>
                   </li>
                   <li className="header__navigation-item">
                       <a href="#certificates">
                           <svg>
                               <use xlinkHref="#albums"></use>
                           </svg>
                           <span>Certifacates</span>
                       </a>
                   </li>
                   <li className="header__navigation-item">
                       <a href="#blog">
                           <svg>
                               <use xlinkHref="#notebook"></use>
                           </svg>
                           <span>Blog</span>
                       </a>
                   </li>
                   <li className="header__navigation-item">
                       <a href="#contact">
                           <svg>
                               <use xlinkHref="#call"></use>
                           </svg>
                           <span>Contact</span>
                       </a>
                   </li>
               </ul>
            </nav>
        </header>
    )
}


App.propTypes = propTypes;
export default App;
