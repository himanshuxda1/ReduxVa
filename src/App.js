import './App.css';
import { usersSlice } from './store/slices/UserSlice';
import { addUser } from './store/slices/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.users);
  const shower = (addUser) => {}

  console.log(usersSlice.actions)
  return (
    <div className="App">
      Learn Redux Toolkit
      <h2>The data is {currentData}</h2>
      <h3><button onClick={()=>{dispatch(addUser())}} >Change Type</button></h3>
    </div>
  );
}

export default App;
