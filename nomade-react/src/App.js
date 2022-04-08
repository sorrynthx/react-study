import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; // npm i react-router-dom@5.3.0
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
    return (
        <Router>
            <Switch>
                
                <Route path="/movie/:id">
                    <Detail />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </Router>
    );
};

export default App;