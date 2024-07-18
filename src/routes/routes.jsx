import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivacyPage from '../Pages/privacy.jsx';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/privacy" exact component={PrivacyPage} />
                
            </Switch>
        </Router>
    );
};

export default App;
