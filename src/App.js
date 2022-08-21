import logo from "./logo.svg";
import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => state.counter.count);

  // event handler
  const handleIncrease = () => {
    // dispatch action
    // props.increaseCounter1();
    dispatch(increaseCounter());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Count:{newCount}</div>
        <button onClick={() => handleIncrease()}>Increase Counter</button>
        <button onClick={() => props.decrementCounter()}>
          Decrease Counter
        </button>
      </header>
    </div>
  );
}
// map state (redux store)  + props react
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };
// map dispatch (redux) to prop react
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter1: () => dispatch(increaseCounter()),
//     decrementCounter: () => dispatch(decrementCounter()),
//   };
// };
// higher order component
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
