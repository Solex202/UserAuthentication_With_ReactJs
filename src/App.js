import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Authentication from './components/Authentication';
import WelcomePage from './components/WelcomePage';
import ListOfUsers from './components/ListOfUsers';
import EthData from './components/EthData';
import SpyData from './components/SpyData';
import FutureData from './components/FutureData';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Authentication/>}></Route>
      <Route path="welcomePage" element={<WelcomePage/>}></Route>
      <Route path="listOfUsers" element={<ListOfUsers/>}></Route>
      <Route path="ethData" element={<EthData/>}></Route>
      <Route path="spyData" element={<SpyData/>}></Route>
      <Route path="futureData" element={<FutureData/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
