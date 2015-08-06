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
                MyComponent
                <MyButton/>
            </div>
        );
    }
}