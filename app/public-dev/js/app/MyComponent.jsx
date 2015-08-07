// Libraries
import * as React from 'react/addons';

// Modules
import { MyButton } from './MyComponent/MyButton.jsx';

let styles = {
    outer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        marginTop: 30,
        fontSize: 18,
        color: '#623108'
    }
};

export class MyComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            showText: true
        };

        this._handleButtonClick = this._handleButtonClick.bind(this);
    }
    render() {
        let theText = this.state.showText
            ? <span>{this.props.text}</span>
            : null;
        let btnText = this.state.showText
            ? 'Hide Text'
            : 'Show Text';

        return (
            <div style={styles.outer}>
                <MyButton clickHandler={this._handleButtonClick}>
                    {btnText}
                </MyButton>
                <span style={styles.text}>{theText}</span>
            </div>
        );
    }
    _handleButtonClick() {
        let newState = this.state;

        newState.showText = !newState.showText;

        this.setState(newState);
    }
}

MyComponent.propTypes = {
    text: React.PropTypes.string.isRequired
};