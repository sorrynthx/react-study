import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from "react-apexcharts";
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

interface ChartProps {
  coinId: string;
}

interface IHistorical {
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
    const { isLoading: chartLoading, data: chartData } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {refetchInterval: 3000});
    
    const isDark = useRecoilValue(isDarkAtom);

    return (
      <>
      <div>
        { chartLoading 
        ? 
          "Loading Chart..." 
        : 
          <ApexChart 
            type="line" 
            series={[
              {
                name: "Price",
                data: chartData?.map((price) => price.close) as number[]
              }
            ]}
            options={{
                      chart: {height: 300, width: 500, toolbar: {show: false}, background: "transparent"},
                      theme: {mode: isDark ? 'dark' : 'light'},
                      stroke: {curve: "smooth", width: 4},
                      grid: {show: false},
                      yaxis: {show: false},
                      xaxis: {labels: {show: false}, axisTicks: {show: false}, axisBorder: {show: false}, categories: chartData?.map((price) => price.time_close) as string[], type: "datetime"},
                      fill: {type: "gradient", gradient: {gradientToColors:["blue"], stops:[0, 100]}},
                      colors: ["red"],
                      tooltip: {y:{formatter: (value) => `$${value.toFixed(2)}`}},
                      
            }}
          />
        }
      </div>
      </>
    );
  }
  
  export default Chart;