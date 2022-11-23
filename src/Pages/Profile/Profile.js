import './Profile.css';
import HomeOption from './HomeOption/HomeOption';
import LoginOption from './LoginOption/LoginOption';
import Profile from './Pages/Profile/Profile';
import ProfileMain from '../../Components/ProfileMain/ProfileMain';

function Profile(){
    return(
        <div classnameName="homeContainer">
            <div classnameName="leftContainer">
               <HomeOption /> 
            </div>
            <div classnameName="centerContainer">
                <ProfileMain />
            </div>
            <div classnameName="rightContainer">
                <LoginOption />
            </div>
        </div>
    )
}
  export default Profile ;   