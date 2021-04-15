import React, { Component } from "react"
import { Link as RouterLink, withRouter } from "react-router-dom"
import { CssBaseline, Grid, Paper, Avatar, Typography, Link,
TextField, FormControlLabel, Checkbox, Button, Box, Radio } from "@material-ui/core"

import "./Login.css"
import PostCard from "./PostCard";

import { connect } from "react-redux"
import { ActionCreators } from "../../redux/actions"

function mapStateTopProps({user}) {
    return {
        user: user.profile,
        error: user.error
    }
}

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userlogin: {
                email: 'emendoza@gmail.com',
                password: 'asd'
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        const { target } = evt
        
        this.setState({
            userlogin: Object.assign({}, this.state.userlogin, {
                [target.name]: target.value
            })
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.login(this.state.userlogin)
        this.props.history.push("/")
    }

    render() {
        const {userlogin} = this.state

        return (
            <Grid container component="main" className="Login">
                <CssBaseline />
                <PostCard/>
                <Grid item xs={12} sm={8} md={7} component={Paper} elevation={5} square>
                    <div className="paper">
                        <Grid container  alignItems="center" className="logo">
                            <Grid item>
                                <Avatar variant="square" className="avatar">
                                    P
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography component="h1" variant="h5">
                                    PROKUR
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Typography component="h1" variant="h5">
                            Log In.
                        </Typography>
                        <form className="form" noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Username or Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={userlogin.email}
                                onChange={this.handleChange}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={userlogin.password}
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Keep me logged in"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Log In
                            </Button>

                            <Grid container direction="column-reverse" alignItems="center">
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                    Forgot password?
                                    </Link>
                                </Grid>

                                <Grid item>
                                    Don't have an account? &nbsp;
                                    <Link href="#" variant="body2" component={RouterLink} to="/signup">                                        
                                        Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default connect(mapStateTopProps, { login: ActionCreators.login })(Login)