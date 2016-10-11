import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function contact({children}) {
    return (
        <div className="main__container">
            <section className="contact" id="contact">
                <div className="contact__container">
                    contact
                </div>
            </section>
        </div>
    );
}

export default contact;
