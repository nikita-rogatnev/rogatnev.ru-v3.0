// ------------------------------------------ //
// CERTIFICATES PAGE
// ------------------------------------------ //
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function certificates({children}) {
    return (
        <div className="main__container">
            <section className="certificates" id="certificates">
                <div className="certificates__container">
                    <div className="certificates__heading">
                        <svg>
                            <use xlinkHref="#albums"></use>
                        </svg>
                        <h1>Certificates</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default certificates;
