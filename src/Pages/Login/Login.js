import './Login.css';
import React from 'react';
import {useState} from 'react';
import HomeOption from '../../components/HomeOption/HomeOption';
import {useNavigate} from 'react-router-dom';
function Login(){
    const[message, setMessage]=useState("");
    const[userName, updateName]=useState(message);
    const navigate=useNavigate();
    
    const handleChange=(event)=>{        
        setMessage(event.target.value);
    }
    function formValidate(){
        updateName(message);
        console.log(userName);
        <HomeOption msg={updateName(message)}/>
        navigate("/");

        
        // let usernameGet=document.getElementById('inp').value;
        // console.log(userName);
        // let passwordGet=document.getElementById('pass').value;
        // if(!usernameGet){
        //     alert('Please provide the username');
        // }
        // if(!passwordGet){
        //     alert('Please provide the password');

        // }
        // if(passwordGet.length<3 || passwordGet.length>10){
        //     alert('Please provide the password in the range 3-10');
        // }
        // else{
        //     let getUsername=document.getElementById('inp').innerText;
        //     updateName(getUsername);
        //     console.log(userName);
        //     <HomeOption data={userName}/>
        // }

    }

    return(
        <div className='login-style'>
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="twitter-logo"></img>
            <h3>Login to Twitter</h3>
            <form>
                <div>
                <label fw-bold>Username</label>
                <input id="inp" onChange={handleChange} type="text" placeholder='enter username'></input>
                </div>

                <div>
                <label fw-bold>Password</label>
                <input id="pass" type="password" placeholder='enter password'></input>
                </div>

                <div>
                <button className='submit-btn' onClick={formValidate}>Submit</button>
                </div>
            </form>
            

        </div>
    );
}
export default Login;