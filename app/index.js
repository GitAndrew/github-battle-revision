import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Component
// - State (manage their own)
// - Lifecycle
// - UI

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            }
        }
    }

    render() {
       // Description of what the UI will look like
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav/>
                            <Route exact path='/' component={Popular}/>
                            <Route path='/battle' component={Battle}/>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
        // Babel is needed to convert this JSX code into normal Javascript (browser-readable code)
        //    return React.createElement(
        //        "div",
        //        null,
        //        "Hello World!"
        //    )
    }
}

// ReactDOM is de-coupled from the React package so that you can develop in React for other platforms to render to, not necessarily the DOM, e.g. phone apps
ReactDOM.render(
    // Takes two arguments:
    // React Element
    // Where to render the Element to
    <App/>, // Remember JSX > Javascript via Babel creates a React Element
    document.getElementById('app')
)