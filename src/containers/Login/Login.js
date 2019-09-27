import React from 'react';
import firebase from "../../lib/firebase";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    submitForm = async (e) => {
        e.preventDefault();
        await firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        );
    };

    updateEmail = (email) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                email: email
            }
        })
    };

    updatePassword = (password) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                password: password
            }
        })
    };

    render() {
        return (
            <div className="login">
                <div className="login__logo"></div>
                <form className="login__form form">
                    <div className="form__row">
                        <label>Email</label>
                        <input name="email" type="email" onChange={(e) => this.updateEmail(e.target.value)} value={this.state.email}/>
                    </div>
                    <div className="form__row">
                        <label>Password</label>
                        <input name="password" type="password" onChange={(e) => this.updatePassword(e.target.value)} value={this.state.password}/>
                    </div>
                    <div className="form__row">
                        <button className="form__submit" onClick={(e) => this.submitForm(e)}>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
