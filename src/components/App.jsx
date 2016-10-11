import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';


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
            <div className="header__mobile">
               <a className="header__mobile-toggle">
                   <svg className="header__mobile-icon header__mobile-icon--active">
                       <use xlinkHref="#menu"></use>
                   </svg>
                   <svg className="header__mobile-icon">
                       <use xlinkHref="#close"></use>
                   </svg>
               </a>
            </div>
            <div className="header__profile">
               <img src="/build/img/header/header__profile.png" alt="Rogatnev Nikita" width="160" height="160" />
               <h1>Rogatnev Nikita</h1>
            </div>
            <nav id="header__navigation" className="header__navigation" role="navigation">
               <ul>
                   <li className="header__navigation-item">
                       <IndexLink to="/" className="header__navigation-link" activeClassName="header__navigation-link--active">
                           <svg>
                               <use xlinkHref="#home"></use>
                           </svg>
                           <span>Home</span>
                       </IndexLink>
                   </li>
                   <li className="header__navigation-item">
                       <Link to="about" className="header__navigation-link" activeClassName="header__navigation-link--active">
                           <svg>
                               <use xlinkHref="#user"></use>
                           </svg>
                           <span>About Me</span>
                       </Link>
                   </li>
                   <li className="header__navigation-item">
                       <Link to="resume" className="header__navigation-link" activeClassName="header__navigation-link--active">
                           <svg><use xlinkHref="#id"></use></svg>
                           <span>Resume</span>
                       </Link>
                   </li>
                   <li className="header__navigation-item">
                       <Link to="portfolio" className="header__navigation-link" activeClassName="header__navigation-link--active">
                           <svg>
                               <use xlinkHref="#glasses"></use>
                           </svg>
                           <span>Portfolio</span>
                       </Link>
                   </li>
                   <li className="header__navigation-item">
                       <Link to="certificates" className="header__navigation-link" activeClassName="header__navigation-link--active">
                           <svg>
                               <use xlinkHref="#albums"></use>
                           </svg>
                           <span>Certifacates</span>
                       </Link>
                   </li>
                   <li className="header__navigation-item">
                       <Link to="blog" className="header__navigation-link" activeClassName="header__navigation-link--active">
                           <svg>
                               <use xlinkHref="#notebook"></use>
                           </svg>
                           <span>Blog</span>
                       </Link>
                   </li>
                   <li className="header__navigation-item">
                       <Link to="contact" className="header__navigation-link" activeClassName="header__navigation-link--active">
                           <svg>
                               <use xlinkHref="#call"></use>
                           </svg>
                           <span>Contact</span>
                       </Link>
                   </li>
               </ul>
            </nav>
        </header>
    )
}


App.propTypes = propTypes;
export default App;
