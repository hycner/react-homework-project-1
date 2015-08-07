// Libraries
import * as React from 'react/addons';
import Radium from 'radium';

let styles = {
    margin: '0 0 30px 0',
    fontSize: 160,
    fontFamily: 'Lobster',
    color: '#623108',

    '@media (max-width: 600px)': {
        fontSize: 125
    }
};

@Radium
export class Headline extends React.Component {
    render() {
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
}