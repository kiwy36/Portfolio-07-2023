import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Root from './routes/Root';
import Memorama from './components/Memorama/Memorama';
import BattleGame from './components/Batle/BattleGame';
import EcommerceCap from './components/EcommerceCap/EcommerceCap';
import CoffePage from './components/CoffePage/CoffePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root/>}/>
                <Route path="/memorama" element={<Memorama/>} />
                <Route path="/batlegame" element={<BattleGame/>} />
                <Route path="/EcommerceCap" element={<EcommerceCap/>} />
                <Route path="/Coffepage" element={<CoffePage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
