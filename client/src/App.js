import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Cat from './component/Cat';
import Phone from './component/Phone';
import {Route} from 'react-router-dom';
import Houses from './component/Houses';
import Beaches from './component/Beaches';

function App() {
  return (
    <div className="App">
      <Cat/>

      <Route path="/phone">

        <Phone/>
      </Route>
      <Route path="/beaches">

<Beaches/>
</Route>
      <Route path="/houses">

<Houses/>
</Route>
    </div>
  );
}

export default App;
