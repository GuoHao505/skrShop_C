import {useState,useEffect} from 'react'
import { useLocation  } from 'react-router-dom'
import Loading from './components/common/loading';
import Router from './router'
import NavBar from './layouts/navbar/NavBar';
import Footer from './layouts/footer';

function App() {
  let [show, Setshow] = useState(true);
  const location = useLocation();
  
  //请求过渡遮罩层
  useEffect(() => {
      Setshow(false)
      setTimeout(() => {
          Setshow(true)
      }, 1000)
     
  }, [location])
  return (
    <div className="App">
          <NavBar/>
          <Router/>
          <Footer/>
          {!show ? <Loading></Loading> : ''}
    </div>
  );
}

export default App;
