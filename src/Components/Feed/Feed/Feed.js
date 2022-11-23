import './Feed.css';
import Trending from './Trending/Trending';
import {useEffect,useState} from "react";
import Tweet from '../Tweet/Tweet';

function Feed(){
     
     const [trendings, setTrendings]=useState([]);
     const [tweets, setTweets]=useState([]);
     

    useEffect(()=>{
    fetch("trendigData.json").then(res=> res.json()).then(res=>{
          setTrendings(res);
    })
    },[]);
    useEffect(()=>{
        fetch("tweet.json").then(res=> res.json()).then(res=>{
              setTweets(res);
        })
        },[]);
    
     
    return(
        <div>
            
            <div classnameName="sticky">
            <div classnameName="searchHeader">
        <div classnameName="searchBox">
            {/*Search Box*/}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classname="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
               </svg>
        
            <input type="search" placeholder="Search Twitter"/>
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classname="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
         </svg>
         
         </div>
             
                 {/*navigation */}
             <nav>
                <ul>
                    <li> 
                        <a href="#">For you</a>
                    </li>
                    <li> 
                        <a href="#">Trendings</a>
                    </li>
                    <li> 
                        <a href="#">News</a>
                    </li>
                    <li> 
                        <a href="#">Sports</a>
                    </li>
                    <li> 
                        <a href="#">Entertainment</a>
                    </li>
                </ul>
             </nav>
             </div>
             {/*Banner*/}
             <div classnameName="banner">
              <p classnameName="banner_small">ICC T20 World Cup </p>
              <p classnameName="banner_large">England Won the World CUp T20</p>

             </div>
             
             {
               
                trendings.map(trend=>
                    <Trending  data={trend} />
                )
             }
             <hr />
             {
               
               tweets.map(tweet=>
                <div>
                   <Tweet  data={tweet} />
                   </div>
               )
            }
            <hr />
             <Tweet />
            
        </div>
    )
    }
     
    

export default Feed;