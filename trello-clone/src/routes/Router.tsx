import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Test from './Test';

function Router() {
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Test />} />
        </Routes>
    </BrowserRouter>
    );
}
export default Router;