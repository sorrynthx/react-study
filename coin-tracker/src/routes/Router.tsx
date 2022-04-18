import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';

function Router() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/:coinId" component={Coin} />
            <Route path="/" component={Coins} />
        </Switch>
    </BrowserRouter>
    );
}
export default Router;