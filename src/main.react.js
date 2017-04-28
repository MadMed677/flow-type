import React from 'react';

import styles from 'styled-components';

class Main extends React.Component {
    props: {
        prop1: string,
        prop2: number,
    };

    static defaultProps = {
        prop1: "foo"
    };

    render() {
        return (
            <div>
                <div>prop1: { this.props.prop1 }</div>
                <div>prop2: { this.props.prop2 }</div>
            </div>
        );
    }
}

export default Main;
