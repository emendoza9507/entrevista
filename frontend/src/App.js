import  React ,{ Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import history from "history/browser"
import { connect } from 'react-redux';

import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import './App.css';

import Login from './components/Login/Login';
import Home from './components/Home';
import SignUp from './components/Login/SignUp';
import AppBar from './components/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E91E63',
      dark: '#C2185B'
    },
    secondary: {
      main: '#536DFE'
    },
    text: {
      primary: '#212121',
      secondary: '#757575'
    },
    divider: '#BDBDBD'
  }
})

function mapStateToProps(state) {
  const { profile } = state.user
  return {
    user: profile
  }
}

class App extends Component {
    constructor(props) {
      super(props)  
      this.state = {
        user: undefined
      }    
    }

    componentDidMount() {
      const { user } = this.props
    }

    render() {
      const { user } = this.props
       
      if((user && user.email === "") || user === undefined || user === null ) {
        return (
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Switch>
                  <Route exact path={["/", "/login"]} component={Login}/>
                  <Route exact path="/signup" component={SignUp}/>
              </Switch>
            </ThemeProvider>
          </BrowserRouter>
        )
      }

      return (
        <BrowserRouter history={history}>
          <ThemeProvider theme={theme}>
            <div className="App">
              <AppBar/>
              
              <div className="container">
                <Switch>
                  <Route exact path={["/", "/home"]} component={Home}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/signup" component={SignUp}/>
                </Switch>
              </div>
            </div>
          </ThemeProvider>          
        </BrowserRouter>
      )
    }
}

export default connect(mapStateToProps)(App);
