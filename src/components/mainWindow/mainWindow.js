import React from 'react';

import TitleAndVideo from './titleAndVideo';
import SliderBox from './sliderBox';

import classes from './mainWindow.module.css';

function MainWindow() {
    return (
        <div className={classes['wrap']}>
            <TitleAndVideo/>
            <SliderBox/>
        </div>
    );
}

export default MainWindow;
