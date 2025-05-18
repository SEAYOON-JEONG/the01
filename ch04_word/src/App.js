import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateDay from "./component/CreateDay";
import CreateWord from "./component/CreateWord";
import DayDelete from "./component/DayDelete";

function App() {
  return (
     <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DayList />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_day" element={<CreateDay />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="*" element={<EmptyPage />} />
        <Route path="/delete_day" element={<DayDelete />} />
      </Routes>
    </div>
   </BrowserRouter>



  )
}

export default App;
