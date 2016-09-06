import React, { Component, PropTypes } from 'react';
import TetherComponent from 'react-tether';
import styles from './style.scss';

class Arrow extends Component {
    render() {
        const {
            children,
            show,
            tetherProps,
        } = this.props;

        if (!show) {
            return children;
        }

        return (
            <TetherComponent
                attachment="top center"
                targetAttachment="bottom center"
                classPrefix="reactpa"
                constraints={[
                    {
                        pin:         true,
                        to:         'scrollParent',
                        attachment: 'together',
                    },
                    {
                        pin:         true,
                        to:         'window',
                        attachment: 'together',
                    },
                ]}
                {...tetherProps}
            >
                {children || <div />}

                <div className={styles.arrow} />
            </TetherComponent>
        );
    }
}

Arrow.propTypes = {
    children: PropTypes.node,
    show:     PropTypes.bool,

    tetherProps: PropTypes.object,
};

Arrow.defaultProps = {
    show: true,
    tetherProps: {},
};

export default Arrow;
