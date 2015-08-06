// Libraries
import * as React from 'react/addons';

// Modules
import { Headline } from './Home/Headline.jsx';

let styles = {
    wrap: {
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    cardWrap: {
        display: 'flex',
        justifyContent: 'center'
    }
};

export class Home extends React.Component {
    render() {
        return (
            <div style={styles.wrap}>
                <Headline>The Button</Headline>
                <div style={styles.cardWrap}>
                    button here
                </div>
            </div>
        );
    }
}