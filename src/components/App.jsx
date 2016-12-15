// ------------------------------------------ //
// REACT APP
// ------------------------------------------ //
import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

const propTypes = {
	children: PropTypes.element.isRequired,
	routes: PropTypes.array.isRequired
};

function App({ children, routes }) {
	return (
		<div className="app__container">
			<Header/>
			<main className="main" id="main">
				{children}
			</main>
		</div>
	);
}

// ------------------------------------------ //
// HEADER BLOCK
// ------------------------------------------ //
function Header( ) {
	return (
		<header className="header" id="header">
			<div className="header__mobile">
				<a className="header__mobile-toggle" id="header__mobile-toggle">
					<svg className="header__mobile-icon header__mobile-icon--active" id="header__mobile-open">
						<use xlinkHref="#menu"></use>
					</svg>
					<svg className="header__mobile-icon" id="header__mobile-close">
						<use xlinkHref="#close"></use>
					</svg>
				</a>
			</div>
			<div className="header__profile">
				<img src="build/img/header/header__profile.png" alt="Rogatnev Nikita" width="160" height="160"/>
				<h1>
					<span className="language__english language__active">Rogatnev Nikita</span>
					<span className="language__russian">Рогатнев Никита</span>
				</h1>
			</div>
			<nav id="header__navigation" className="header__navigation" role="navigation">
				<ul>
					<li className="header__navigation-item">
						<IndexLink to="/" className="header__navigation-link" activeClassName="header__navigation-link--active">
							<svg>
								<use xlinkHref="#id"></use>
							</svg>
							<span>
								<span className="language__english language__active">Resume</span>
								<span className="language__russian">Резюме</span>
							</span>
						</IndexLink>
					</li>
					<li className="header__navigation-item">
						<Link to="portfolio" className="header__navigation-link" activeClassName="header__navigation-link--active">
							<svg>
								<use xlinkHref="#glasses"></use>
							</svg>
							<span className="language__english language__active">Portfolio</span>
							<span className="language__russian">Портфолио</span>
						</Link>
					</li>
					<li className="header__navigation-item">
						<Link to="certificates" className="header__navigation-link" activeClassName="header__navigation-link--active">
							<svg>
								<use xlinkHref="#albums"></use>
							</svg>
							<span className="language__english language__active">Certifacates</span>
							<span className="language__russian">Сертификаты</span>
						</Link>
					</li>
					<li className="header__navigation-item">
						<Link to="blog" className="header__navigation-link" activeClassName="header__navigation-link--active">
							<svg>
								<use xlinkHref="#notebook"></use>
							</svg>
							<span className="language__english language__active">Blog</span>
							<span className="language__russian">Блог</span>
						</Link>
					</li>
					<li className="header__navigation-item">
						<Link to="contact" className="header__navigation-link" activeClassName="header__navigation-link--active">
							<svg>
								<use xlinkHref="#call"></use>
							</svg>
							<span className="language__english language__active">Contact</span>
							<span className="language__russian">Контакты</span>
						</Link>
					</li>

				</ul>
			</nav>
		</header>
	)
}

App.propTypes = propTypes;
export default App;
