import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';
import Chart from './Chart';
import Price from './Price';

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;
}

function Router({toggleDark, isDark}: IRouterProps) {
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/:coinId" element={<Coin isDark={isDark} />}>
                <Route path="chart" element={<Chart />} />
                <Route path="price" element={<Price />} />
            </Route>
            <Route path="/" element={<Coins toggleDark={toggleDark} />} />
        </Routes>
    </BrowserRouter>
    );
}
export default Router;