import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <div className="login__logo"></div>
                <form className="login__form form">
                    <div className="form__row">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="form__row">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className="form__row">
                        <button className="form__submit">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
