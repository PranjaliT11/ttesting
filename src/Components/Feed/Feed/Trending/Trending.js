
import './Trending.css';

function Trending(props){
    return(
      <div classnameName="trendingMain">
        <p classnameName="header_small">{props.data.header}</p> 
        <p classnameName="text">{props.data.text}</p>
        <p classnameName="header_small">{props.data.tweets}</p>
      </div>
    )
}
export default Trending;