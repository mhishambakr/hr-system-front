import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import EmployeeState from './context/employee/EmployeeState';
import AttendanceState from './context/attendance/AttendanceState';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Employees from './components/employees/Employees'
import Attendance from './components/attendance/Attendance';
import { Container } from 'react-bootstrap';
const App = () => {


  return (
    <AuthState>
      <EmployeeState>
        <AttendanceState>
          <Router>
            <div className="App">
              <Container>

                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/employees' element={<Employees />} />
                  <Route path='/attendance' element={<Attendance />} />
                </Routes>

              </Container>
            </div>
          </Router>
        </AttendanceState>
      </EmployeeState>
    </AuthState>
  );
}

export default App;
