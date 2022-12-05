import React from 'react';
import Tweet from '../Feed/Tweet/Tweet';
import './ProfileMain.css';
import {useEffect} from 'react';
import {useState} from 'react';

 
function ProfileMain(){

    const [ptweets, setPtweets]=useState([]);
    useEffect(()=>{
        fetch("elonmusk.json").then(
            (resp)=>{
                return resp.json();
            }
        ).then(
            (resp)=>{
                console.log(resp);
                setPtweets(resp);
            }
        );
    },[]); 
      
    return(
    
        <div classnameName="profile-main">
            <div classnameName="cover">
                <a href="#">
                <img classnameName="profile-img"src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"></img>
               
                </a>
                <div classnameName="follow-btn-container fw-bold float-end">
                    <button classnameName="follow-btn">Follow</button>

                </div>
                </div>
                <ul>
                    <li>
                        <a href="#">Tweets</a>
                    </li>
                    <li>
                        <a href="#">Tweets & Replies</a>
                    </li>
                    <li>
                        <a href="#">Media</a>
                    </li>
                    <li>
                        <a href="#">Likes</a>
                    </li>
                </ul>
            {
        
            ptweets.map(ptweet=>
                <div>
                    <Tweet data={ptweet}/>
                    <hr/>
                </div>
                
                )
            }
        
      </div>


    );
        }
     


export default ProfileMain;