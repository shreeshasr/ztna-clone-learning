import './App.css';
import Sidebar from './Sidebar/Sidebar'
import Dashboard from './Dashboard/Dashboard';
import {
  Switch,
  Route,
} from "react-router-dom";
import Reports from './Reports/Reports';
import { createBrowserHistory } from "history";
import Gateways from './Gateways/Gateways';
import Resources from './Resources/Resources';
import Policy from './Policy/Policy';
import IdentityProvider from './IdentityProvider/IdentityProvider';
import Settings from './Settings/Settings';

function App() {
  const customHistory = createBrowserHistory();
  console.log(customHistory)
  return (
    <div className="App">
      <div className="fixedLeft">
         <Sidebar/>
      </div>
        <div className="body-components">
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/reports" component={Reports}/>
            <Route path="/gateways" component={Gateways}/>
            <Route path="/resources" component={Resources}/>
            <Route path="/policies" component={Policy}/>
            <Route path="/identityproviders" component={IdentityProvider}/>
            <Route path="/settings" component={Settings}/>
        </Switch>
        </div>
    </div>
  );
}

export default App;
