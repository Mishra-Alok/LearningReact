import './App.css';
import User from './components/User';
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <div>
      <div style={{textAlign: "center", border: "2px solid green"}}>
        <h1>Props in ReactJS</h1>
      </div>
      <User name={"Alok Mishra"} />
      <User />

      <Wrapper />
    </div>
  )
}

export default App;