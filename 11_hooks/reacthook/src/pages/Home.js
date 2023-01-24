// componentes
import HookUseState from '../components/HookUseState';
import HookeUseReducer from '../components/HookeUseReducer';
import HookUseEffect from '../components/HookUseEffect';

const Home = () => {

  return (
    <div>
      <HookUseState/>
      <hr />
      <HookeUseReducer/>
      <hr />  
      <HookUseEffect/>
    </div>
  )
}
export default Home