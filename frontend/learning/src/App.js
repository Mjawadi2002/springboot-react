
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import Profile from './Profile';
import AddUser from './AddUser';
import Nomatch from './Nomatch';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
