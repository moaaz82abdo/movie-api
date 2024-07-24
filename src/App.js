
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Contact from './Contact'
import About_us from './About_us'
import News from './News'
import Gallery from './Gallery'
import About_community from './About_community'
import Event_list from './Event_list'
import Event_calender from './Event_calender'

import Single_event_view from './Single_event_view'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='home' element={<Home />}/>
         <Route path='aboutus' element={<About_us />}/>
         <Route path='aboutc' element={<About_community />}/>
         <Route path='eventl' element={<Event_list />}/>
         <Route path='eventc' element={<Event_calender />}/>
         <Route path='singleev' element={<Single_event_view />}/>
         <Route path='gallery' element={<Gallery />}/>
         <Route path='news' element={<News />}/>
         <Route path='contact' element={<Contact />}/>
      </Routes>
     
     <Footer />
    </div>
  );
}

export default App;
