import "../assets/css/loading.css";
import Logo2 from '../assets/images/Logo2.png'


const Loader = () => {
    return (
      <div className="loader-container">
        <div className="animated-background">
          <p className="loader-text">
            Rick Services International website is loading, please wait.
          </p>
        </div>
        <img
          src={Logo2} // Replace with your image path
          alt="Loading..."
          className="loader-wave"
        />
      </div>
    );
  };
  
  export default Loader;


