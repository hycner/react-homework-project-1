// Libraries
import * as React from 'react/addons';

// Modules
import { MyButton } from './MyComponent/MyButton.jsx';

let styles = {
    color: 'black'
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

        return (
            <div style={styles} onClick={this._handleButtonClick}>
                <MyButton/>
                {theText}
            </div>
        );
    }
    _handleButtonClick() {
        let newState = this.state;

        newState.showText = !newState.showText;

        this.setState(newState);
    }
}
// Displays that text in a span with styling of your choosing.

MyComponent.propTypes = {
    text: React.PropTypes.string.isRequired
};