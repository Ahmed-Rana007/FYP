import React from 'react';
import './Signup.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Signup() {
  return (
    <div className="Signup">
      <div className='Header'>
            <p>Link Building <span>Automation</span></p>
      </div>
      <div>
      <form>
                <div className="Box">
                <h1>Sign Up</h1>
                <p>Please fill this form to create account</p>
                <hr/>
                <div id='fn'>
                <input  placeholder="First Name" type="text"  />
                <input  placeholder="Last Name" type="text"  />
                </div>

                <input id="email" placeholder="Email" type="text"/>

                <div className='icon_container'>
                    <input placeholder="Password" type="password"/>
                     <span id='icon'><VisibilityIcon/></span>
                </div>
                <div className='icon_container'>
                    <input placeholder="Confirm Password" type="password"   />
                    <span id='icon'><VisibilityIcon/></span>
                </div>
                <button>Sign Up</button>
                </div>
                <div className='forgot'>
                    <input type="checkbox"  name="ch" />
                    <label for="ch"> I have accepted the <a href="https://www.google.com">terms and policy</a></label>
                    <p>Already have an account? <a href="https://www.google.com">Login</a></p>
                </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
