// Libraries
import * as React from 'react/addons';
import Radium from 'radium'

let styles = {
    transition: 'all 0.4s',
    border: '1px solid #292929',
    borderRadius: 'none',
    height: 50,
    width: 300,
    background: 'none',
    padding: '0 25px 0 20px',
    color: '#c52018',
    fontSize: 22,

    ':focus': {
        outline: 0
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

// Make your CSS responsive so the style of the button changes when the screen is less than 600px.

MyButton.propTypes = {
    clickHandler: React.PropTypes.func.isRequired
};