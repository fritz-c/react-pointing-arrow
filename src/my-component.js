/*
 * my-component
 * Copyright 20XX Mega Man All rights reserved.
 * @license Open source under the MIT License
 */

import React, { Component, PropTypes } from 'react';
import styles from './style.scss';

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
            <div>Hello <span className={styles.myName}>{myName}</span>!</div>
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
