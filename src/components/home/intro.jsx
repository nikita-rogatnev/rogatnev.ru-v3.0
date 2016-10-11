import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function intro({children}) {
    return (
        <div className="main__container">
            <section className="intro" id="intro">
                <div className="intro__container">
                    intro
                </div>
            </section>
        </div>
    );
}

export default intro;
