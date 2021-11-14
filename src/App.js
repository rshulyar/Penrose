import React from 'react';

import Header from './components/header';
import MainWindow from './components/mainWindow';

import classes from './app.module.css';

function App() {
    return (
        <div className={classes['main-div']}>
                <Header/>
                <MainWindow/>
        </div>
    );
}

export default App;
