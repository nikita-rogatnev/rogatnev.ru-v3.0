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
                  certificates
                </div>
            </section>
        </div>
    );
}

export default certificates;
