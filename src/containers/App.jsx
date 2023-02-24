import { BrowserRouter, Routes,Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import VenderArte from '../pages/VenderArte';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path='/VenderArte' element={<VenderArte/>}/>
            </Routes>

        </BrowserRouter>
        
    );
}

export default App;