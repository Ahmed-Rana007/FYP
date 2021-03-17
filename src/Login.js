import React from 'react';
import './Login.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <div className='Header'>
            <p>Link Building <span>Automation</span></p>
      </div>
      <div>
      <form>
                <div className = 'Box_sec'>
                <h1>Sign in</h1>

                <div className='icon_container'>
                    <PersonIcon/>
                    <input className="input_login" placeholder="Username" type="User" /><br/><br/>
                </div>
                <div className='icon_container'>
                    <LockIcon/>
                    <input className='input_login' placeholder="Password" type="password" /><br/><br/>
                </div>
                <button>Sign in</button>
                </div>
                <div className='forgot'>
                    <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
                    <a href="https://www.google.com">Forgot Password?</a>
                </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
