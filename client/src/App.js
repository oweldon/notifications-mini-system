import './App.css';
import Notifications from './components/notifications/Notifications';
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function App() {
  const localData = localStorage.getItem('notificationsInLocalStorage')
  const [notifications, setNotifications] = useState(
    JSON.parse(localData) || []
  )

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    fetchItems();
  }, 15000);

  const fetchItems = async () => {
    const result = await axios('/api/notifications')
    setNotifications([...notifications, result.data.results])
    localStorage.setItem('notificationsInLocalStorage', JSON.stringify(notifications));
    console.log('notifications', notifications)
  }
  
  return (
    <div className="App">
      <Notifications notifications={notifications}/>
    </div>
  );
}

export default App;
