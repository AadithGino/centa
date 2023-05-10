import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
   </Routes>
  // <div className={`navbar-container ${isOpen ? "open" : ""}`}>
  //     <div className="navbar">
  //       <h1>Logo</h1>
  //       <button onClick={handleToggleClick}>Menu</button>
  //     </div>
  //     <div className="menu">
  //       <ul>
  //         <li>Link 1</li>
  //         <li>Link 2</li>
  //         <li>Link 3</li>
  //       </ul>
  //       h1sdfsdfsdfs
  //     </div>
  //     <div className="content">
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem eget sapien dignissim fringilla vel sed ipsum. Sed vulputate nisl a libero rutrum, sit amet euismod velit semper. Duis euismod tincidunt augue non pretium. Sed auctor vitae nulla id tincidunt. Donec maximus nisl vel tellus lobortis, eu suscipit mauris pharetra.</p>
  //     </div>
  //   </div>
 
  );
}

export default App;
