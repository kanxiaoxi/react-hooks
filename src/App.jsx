import './App.css'
import StateDemo from './UseState/StateDemo'
import ReducerDemo from './UseReducer/ReducerDemo'
import EffectDemo from './UseEffect/EffectDemo'
import RefDemo from './UseRef/RefDemo'
import LayoutEffectDemo from './UseLayoutEffect/LayoutEffectDemo'
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle'
import ContextDemo from './UseContext/ContextDemo'
import MemoDemo from './UseMemo/MemoDemo'
import CallbackDemo from './UseCallback/CallbackDemo'


function App() {
  return (
    <div className="App">
      <StateDemo />
      <hr />
      <ReducerDemo />
      <hr />
      <EffectDemo />
      <hr />
      <RefDemo />
      <hr />
      <LayoutEffectDemo />
      <hr />
      <ImperativeHandle />
      <hr />
      <ContextDemo />
      <hr />
      <MemoDemo />
      <hr />
      <CallbackDemo />
      <hr />
    </div>
  )
}

export default App
