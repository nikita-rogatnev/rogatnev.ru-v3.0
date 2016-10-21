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
                    <h1>Hi, my name is Rogatnev Nikita. I am a professional Web Developer & Designer from Russia. My objective is to work on creating minimalistic good looking HTML5 & CSS3 websites.</h1>
                </div>
            </section>
        </div>
    );
}

export default intro;
