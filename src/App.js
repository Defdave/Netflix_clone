import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })
  
    return unSubscribe
  }, [dispatch])
  

  return (
    <div className="App">
    <Router>
      {!user ?  (
      <LoginScreen /> 
      ):
      (<Routes>
        <Route path='/ProfileScreen' element={<ProfileScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      )}
    </Router>
    </div>
  );
}

export default App;
