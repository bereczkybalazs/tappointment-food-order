import React from 'react';
import {Redirect, Route} from "react-router-dom";
import firebase from "../../lib/firebase";

class AuthRoute extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        isAuthenticated: true
                    }
                })
            }
        });
    }

    render() {
        const Component = this.props.component;
        return (
            <Route {...this.props} render={(props) => (
                this.state.isAuthenticated
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )} />
        )
    }
}

export default AuthRoute;