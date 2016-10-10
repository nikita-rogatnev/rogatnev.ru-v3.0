import React from 'react';
import {Link} from 'react-router';

function Home() {
    const reactLink = 'https://github.com/facebook/react';
    const reactRouterLink = 'https://github.com/reactjs/react-router';
    const ghPagesLink = 'https://pages.github.com/';
    const repoReadmeLink = 'https://github.com/rogatnev-nikita/rogatnev-nikita.github.io#readme';

    return (
        <div>
            <p>
                This is an example single page app built
                <div>
                    <Link to="/example">Example page</Link>
                </div>
            </p>
        </div>
    );
}

export default Home;
