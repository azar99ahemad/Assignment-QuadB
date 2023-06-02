import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Summary from './components/Summary'
import Booking from './components/Booking'
import Error from './components/error'
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}
