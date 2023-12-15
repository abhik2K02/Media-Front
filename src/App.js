import { Route, Routes } from 'react-router-dom';
        import './App.css';
        import Landing from './pages/Landing';
        import Home from './pages/Home';
import Wacthistory from './pages/Watchhistory';
import Header from './Components/Header';
import Footer from './Components/Footer';

        function App() {
          return (
            <>
            <Header/>
            <div className='container m-5'>
              <Routes>
              
                <Route path='/' element={<Landing/>}/>
                <Route  path='/home' element={ <Home/>}/>
                <Route path='/watchhistory' element={<Wacthistory/>}/>

              </Routes>
            </div>

            <Footer/>
            </>
          );
        }

        export default App;