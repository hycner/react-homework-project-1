// Libraries
import * as React from 'react/addons';
import Radium from 'radium';

let colors = {
    gray: '#292929',
    red: '#c52018',
    yellow: '#fff6a4'
};

let styles = {
    transition: 'all 0.4s',
    border: '1px solid ' + colors.gray,
    borderRadius: 0,
    height: 50,
    width: 300,
    background: 'none',
    padding: '0 25px 0 20px',
    color: colors.gray,
    fontSize: 22,
    cursor: 'pointer',

    ':hover': {
        background: colors.gray,
        color: colors.yellow
    },
    ':focus': {
        outline: 0
    },

    '@media (max-width: 600px)': {
        border: '1px solid ' + colors.red,
        color: colors.red,

        ':hover': {
            background: colors.red,
            color: colors.yellow
        }
    }
};

@Radium
export class MyButton extends React.Component {
    constructor() {
        super();

        this._handleClick = this._handleClick.bind(this);
    }
    render() {
        return (
            <button style={styles}
                    onClick={this._handleClick}>
                {this.props.children}
            </button>
        );
    }
    _handleClick() {
        this.props.clickHandler();
    }
}

MyButton.propTypes = {
    clickHandler: React.PropTypes.func.isRequired
};