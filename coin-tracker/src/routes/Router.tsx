import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';
import Chart from './Chart';
import Price from './Price';

function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/:coinId" element={<Coin />}>
                <Route path="chart" element={<Chart />} />
                <Route path="price" element={<Price />} />
            </Route>
            <Route path="/" element={<Coins />} />
        </Routes>
    </BrowserRouter>
    );
}
export default Router;