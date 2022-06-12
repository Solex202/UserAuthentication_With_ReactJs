import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Authentication from './components/Authentication';
import CyrptoData from './components/CyrptoData';
import WelcomePage from './components/WelcomePage';
import ListOfUsers from './components/ListOfUsers';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Authentication/>}></Route>
      <Route path="welcomePage" element={  <WelcomePage/>}></Route>
      <Route path="listOfUsers" element={  <ListOfUsers/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
