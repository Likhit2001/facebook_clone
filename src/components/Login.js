import { Button } from '@material-ui/core'
import React from 'react'
import "../Css/Login.css"
import {auth , provider} from "../firebase.js"
import { actionTypes} from './reducer'
import { useStateValue } from './StateProvider'

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //signIn..
        auth
            .signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
            
          
        }).catch(error => alert(error.message));

    }
    return (
        <div className='Login'>
            <div className="login__logo">

                <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png" alt="" />


                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                <div className="login__button">
                    <Button type='submit'  onClick={signIn}>
                    <p>Sign In</p>
                </Button>
            </div>
            
        </div>
    </div >
  )
}

export default Login