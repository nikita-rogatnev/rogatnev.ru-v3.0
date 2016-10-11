import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
    children: PropTypes.element
};

function blog({children}) {
    return (
        <div className="main__container">
            <section className="blog" id="blog">
                <div className="blog__container">
                    blog
                </div>
            </section>
        </div>
    );
}

export default blog;
