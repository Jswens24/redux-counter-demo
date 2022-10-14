import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMonday, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

  // console.log(AC)

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMonday(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
