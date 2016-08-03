import React, { Component, PropTypes } from 'react';
import styles from './style.scss';

export function hello(name) {
    return `Hello ${name}!`;
}

class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 'value',
        };
    }

    render() {
        const {
            myName,
        } = this.props;

        return (
            <div className={styles.myName}>{hello(myName)}</div>
        );
    }
}

MyComponent.propTypes = {
    myName: PropTypes.string,
};

MyComponent.defaultProps = {
    myName: 'World',
};

export default MyComponent;
