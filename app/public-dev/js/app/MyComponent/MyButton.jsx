// Libraries
import * as React from 'react/addons';

let styles = {
    color: 'blue'
};

export class MyButton extends React.Component {
    render() {
        return (
            <div style={styles}>
                I'm the button!
            </div>
        );
    }
}