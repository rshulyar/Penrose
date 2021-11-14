import React from 'react';

import classes from './titleAndVideo.module.css';

function TitleAndVideo () {
    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}></div>
            <iframe width="640" height="480" className={classes['video']} src="https://www.youtube.com/embed/t3217H8JppI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default TitleAndVideo;