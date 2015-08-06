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

class App extends React.Component {
    render() {
        return (
            <div style={styles.outer}>
                <Headline>The Button</Headline>
                <div style={styles.inner}>
                    <MyComponent/>
                </div>
            </div>
        );
    }
}

React.render(<App/>, document.getElementById('root'));