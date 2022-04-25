import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';

interface ChartProps {
  coinId: string;
}

interface ChartData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() { 

    const {coinId} = useOutletContext<ChartProps>();
    const { isLoading: chartLoading, data: chartData } = useQuery<ChartData>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    console.log(chartData);
    return (
      <h1>Chart</h1>
    );
  }
  
  export default Chart;