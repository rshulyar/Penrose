import React from 'react';
import Header from './components/header';

import classes from './app.module.css';

function App() {
    return (
        <div className={classes['main-div']}>
            <Header/>
        </div>
    );
}

export default App;
