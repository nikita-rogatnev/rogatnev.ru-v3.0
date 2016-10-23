// ------------------------------------------ //
// ERROR PAGE
// ------------------------------------------ //
import React, {PropTypes} from 'react';

const propTypes = {
    location: PropTypes.object.isRequired
};

function error({location}) {
    return (
        <div className="main__content">
            <section className="error">
                Page not found - the path,
                <code>{location.pathname}</code>, did not match any React Router routes.
            </section>
        </div>
    );
}

error.propTypes = propTypes;

export default error;
