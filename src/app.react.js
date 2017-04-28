import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main.react';

class App extends React.Component {
    props: object

    render() {
        return <Main />
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
