import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/createpost';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
