import logo from './logo.svg';
import './App.css';
import { usersSlice } from './store/slices/UserSlice';

function App() {

console.log(usersSlice.actions)
  return (
    <div className="App">
      
          Learn Redux Toolkit
        
    </div>
  );
}

export default App;
