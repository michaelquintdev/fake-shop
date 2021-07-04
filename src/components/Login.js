import React from 'react'

function Login() {
    return (
        <div>
            <h2>Login Here</h2>
            <form>
                <label>Username
                    <input name = 'login' type = 'text' onChange = {null} value = {null}/>
                </label>
                <label>Password
                    <input name = 'password' type = 'text' onChange = {null} value = {null}/>
                </label>
            </form>
            <p>Don't have an account? Sign up here.</p>
        </div>
    )
}

export default Login
