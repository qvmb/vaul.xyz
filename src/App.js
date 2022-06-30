import './App.css';
import { getPreparedDataset} from './data/dataset';
import Spotify from './components/spotify';
import Profile from './components/profile';
import About from './components/about';
import Socials from './components/socials';

function App() {

  let data = getPreparedDataset();

  if (data !== undefined) {
    return (
      <div className="wrapper">
        <div className="body">
          <Profile data = {data}/>
        </div>
        <div className="body">
           <Spotify data = {data}/>
        </div>
        <div className="body">
            <About/>
        </div>
        <div className="body" style={{padding: "20px !important"}}>
          <Socials/>
        </div>
      </div>
    );
  }
}

export default App;
