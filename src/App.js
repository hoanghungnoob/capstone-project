import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './Page/BookingPage';
import HomePage from './Page/HomePage';
import ConfirmedBooking from './Page/ConfirmedBooking';
import CustomerOfReservation from './Component/CustomerOfReservation';



function App() {
  return (
    <div className='App'>
      <CustomerOfReservation>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
          <Route path='/confirmed' element={<ConfirmedBooking />}></Route>
        </Routes>
      </CustomerOfReservation>
    </div>
  )
}

export default App;
