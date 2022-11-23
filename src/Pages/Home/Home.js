
import './Home.css'
import HomeOption from './HomeOption/HomeOption';
import LoginOption from './LoginOption/LoginOption';
import Feed from './Components/Feed/Feed/Feed';

function Home(){
    return(
        <div classnameName="homeContainer">
            <div classnameName="leftContainer">
               <HomeOption /> 
            </div>
            <div classnameName="centerContainer">
                <Feed />
            </div>
            <div classnameName="rightContainer">
                <LoginOption />
            </div>
        </div>
        

    )
}
export default Home;