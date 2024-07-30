import { Route, Routes } from 'react-router';
import LoginPage from './Pages/LoginPage';
import './App.css';
import ProfilePage from './Pages/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/registration' element={<RegistrationPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
     </Routes>
    </div>
  );
}

export default App;
