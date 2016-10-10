import React, {PropTypes} from 'react';

const propTypes = {
    location: PropTypes.object.isRequired
};

function error__page({location}) {
    return (
        <div className="main__content">
            <section className="error">
                Page not found - the path,
                <code>{location.pathname}</code>, did not match any React Router routes.
            </section>
        </div>
    );
}

error__page.propTypes = propTypes;

export default error__page;
