// ------------------------------------------ //
// ERROR PAGE
// ------------------------------------------ //
import React, { PropTypes } from 'react';

const propTypes = {
	location: PropTypes.object.isRequired
};

function error({ location }) {
	return (
		<div className="main__container">
			<section className="error" id="error">
				<div className="error__container">
					<div className="error__heading">
						<svg>
							<use xlinkHref="#tools"></use>
						</svg>
						<h1>
							<span className="language__english language__active">404 - Page not found</span>
							<span className="language__russian">404 - Страница не найдена</span>
						</h1>
					</div>
				</div>
			</section>
		</div>
	);
}

error.propTypes = propTypes;

export default error;
