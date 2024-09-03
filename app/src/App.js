
import './App.css';
import Body from './components/body';
import Home from './components/home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contact';
import About from './components/about';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    
      <BrowserRouter>
       <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          
          <Route path="*" component={<NotFoundPage />} />
          <Route path="/404" component={<NotFoundPage />} />
        </Routes>
       </Body>

      </BrowserRouter>

      

  );
}

export default App;
