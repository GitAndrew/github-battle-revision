import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

// Component
// - State (manage their own)
// - Lifecycle
// - UI

function App() {
    const [ theme, setTheme ] = React.useState('light')
    const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light')

    return (
        <Router>
            <ThemeProvider value={theme}>
                <div className={theme}>
                    <div className='container'>
                        <Nav toggleTheme={toggleTheme}/>

                        <React.Suspense fallback={<Loading/>}>
                            <Switch>
                                <Route exact path='/' component={Popular}/>
                                <Route exact path='/battle' component={Battle}/>
                                <Route path='/battle/results' component={Results}/>
                                <Route render={() => <h1>404</h1>}/>
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>
            </ThemeProvider>
        </Router>
    )
}

// ReactDOM is de-coupled from the React package so that you can develop in React for other platforms to render to, not necessarily the DOM, e.g. phone apps
ReactDOM.render(
    // Takes two arguments:
    // React Element
    // Where to render the Element to
    <App/>, // Remember JSX > Javascript via Babel creates a React Element
    document.getElementById('app')
)