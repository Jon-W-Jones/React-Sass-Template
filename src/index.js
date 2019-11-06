import React from 'react';
import { render } from 'react-dom';

const styles = require('./index.module.scss');
function App() {
    return (
        <>
            <h1 className={styles.test}>Fresh React + SASS Template</h1>
        </>
    );
}

render(<App />, document.getElementById('app'));