import Header from './components/Header'
import Navbar from './components/Navbar'
import Product from './pages/product'
import Home from './home/home'
import Tentang from './tentang/tentang'
import Footer from './pages/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Myapp() {
  return (
    <Router>
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Product" element={<Product/>} />
        <Route path="/Tentang" element={<Tentang />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
