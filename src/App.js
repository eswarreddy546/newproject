import { Route,Switch} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div  className="App">
    <HomeNavbar />
    <div style={{backgroundColor:'hsla(0, 0%, 0%, 0.6)',height:"90%",margin:'0'}}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    </div> 
    </div>
  );
}

export default App;