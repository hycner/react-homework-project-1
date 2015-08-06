// Libraries
import * as React from 'react/addons';

let styles = {
    margin: '0 0 30px 0',
    fontSize: 160,
    fontFamily: 'Lobster',
    color: '#e63931'
};

export class Headline extends React.Component {
    render() {
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
}