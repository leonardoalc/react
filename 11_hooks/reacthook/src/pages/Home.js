// componentes
import HookUseState from '../components/HookUseState';
import HookeUseReducer from '../components/HookeUseReducer';
import HookUseEffect from '../components/HookUseEffect';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';

// useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';



const Home = () => {
  const {contextValue} = useContext(SomeContext)


  return (
    <div>
      <HookUseState/>
      <hr />
      <HookeUseReducer/>
      <hr />  
      <HookUseEffect/>
      <hr />
      <div>
        <h2>UseContext</h2>
        <p>Valor do contexto: {contextValue}</p>
      </div>
      <hr />
      <HookUseRef/>
      <hr />
      <HookUseCallback/>
      <hr />
    </div>
  )
}
export default Home