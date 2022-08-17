import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import {TestComponent} from "./components/TestComponent/TestComponent";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
    return (

        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path="/profile"  element={<Profile />} />
                    <Route path="/dialogs"  element={<Dialogs />} />
                </Routes>
                <TestComponent on={true}/>
            </div>
       </BrowserRouter>
    )
        ;
}


export default App;
