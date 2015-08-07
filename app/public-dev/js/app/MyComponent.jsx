// Libraries
import * as React from 'react/addons';

// Modules
import { MyButton } from './MyComponent/MyButton.jsx';

let styles = {
    color: 'black'
};

export class MyComponent extends React.Component {
    render() {
        return (
            <div style={styles}>
                <MyButton/>
                <span>{this.props.text}</span>
            </div>
        );
    }
}
// Displays that text in a span with styling of your choosing.

MyComponent.propTypes = {
    text: React.PropTypes.string.isRequired
};