import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function resume({children}) {
    return (
        <div className="main__container">
            <section className="resume" id="resume">
                <div className="resume__container">
                    <div className="resume__heading">
                        <svg>
                            <use xlinkHref="#id"></use>
                        </svg>
                        <h1>Resume</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default resume;
