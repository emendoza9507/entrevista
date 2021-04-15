import React, { Component } from "react"
import { Link as RouterLink } from "react-router-dom"
import { CssBaseline, Grid, Paper, Typography, Link,
TextField, Button} from "@material-ui/core"

import "./Login.css"
import PostCard from "./PostCard";

import { connect } from "react-redux"
import { ActionCreators } from "../../redux/actions"


function mapStateTopProps({user}) {
    return {
        user: user.profile
    }
}

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: '',
                password: '',
                password2: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        const { target } = evt
        
        this.setState({
            user: Object.assign({}, this.state.user, {
                [target.name]: target.value
            })
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addUser(this.state.user)
    }

    render() {
        return (
            <Grid container component="main" className="Login">
                <CssBaseline />
                <PostCard/>
                <Grid item xs={12} sm={8} md={7} component={Paper} elevation={5} square>
                    <div className="paper">                        
                        <Typography component="h1" variant="h5">
                            Sign Up.
                        </Typography>
                        <form className="form" noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email adress"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password2"
                                label="Re-enter password"
                                type="password"
                                id="password2"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign Up
                            </Button>

                            <Grid container direction="column-reverse" alignItems="center">

                                <Grid item>
                                    Already have an account? &nbsp;
                                    <Link href="#" variant="body2" component={RouterLink} to="/login">                                        
                                        Log In
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

export default connect(mapStateTopProps, { addUser: ActionCreators.addUser })(SignUp)