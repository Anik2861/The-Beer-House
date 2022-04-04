
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Reviews from './Component/Reviews/Reviews';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import NotFound from './Component/NotFound/NotFound';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div >
      <Header></Header>
      <h1 className='head-title'>The Beer House</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>Dashboard</Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
     <Footer></Footer>

    </div>
  );
}

export default App;
