// Libraries
import * as React from 'react/addons';

// Modules
import { Headline } from './app/Headline.jsx';
import { MyComponent } from './app/MyComponent.jsx';

let styles = {
    outer: {
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    inner: {
        display: 'flex',
        justifyContent: 'center'
    }
};

let theText = 'FUN FACT: This color palette is made entirely of hex colors pulled from Pikachu\'s sprite';

class App extends React.Component {
    render() {
        return (
            <div style={styles.outer}>
                <Headline>The Button</Headline>
                <div style={styles.inner}>
                    <MyComponent text={theText}/>
                </div>
            </div>
        );
    }
}

React.render(<App/>, document.getElementById('root'));