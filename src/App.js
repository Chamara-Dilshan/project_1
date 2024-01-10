import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome To Chamara</h2>
        <button className='users-button' onClick={() => navigate('/users')}>users</button>
        
      </header>
    </div>
  );
}

export default App;
