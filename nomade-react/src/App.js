import {useEffect, useState} from 'react';

function Select(props) {
  return (
    <select>
        {props.data.map((coin) => {
          return (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          )}
        )}
    </select>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  
  // api 한번만 호출 
  useEffect(() => {
    // api 호출
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json()) // json 변환
      .then((json) => {                    // json으로 변환된 데이터 coins에 추가
        setCoins(json);
        setLoading(false);                 // loading 숨김
        
      });
  }, [] ) // []에 coins 넣으면 coins 변화 감지될때마다 api 실행
  return (
    <div>
      <h1>Coins! {loading ? "" : `(${coins.length})`} </h1>            {/* `(${coins.length})` 괄호만 텍스트로 인식 */}  
      {loading ? <strong>Loading...</strong> : <Select data={coins}/>} {/* loading true -> 로딩 false -> Select 영역 */}  
    </div>
  );
}

export default App;
