import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface RouteParam {
    coinId: string;
}

interface RouteState {
    state: {
        name: string,
    }
}

// 태그는 object로 나오나 실제로 Array이기 때문에 직접 interface 추가
interface ITag {
    coin_counter: number,
    ico_counter: number,
    id: string,
    name: string,
}

interface InfoData {
    id:string;
    name:string;
    symbol:string;
    rank:number;
    is_new:boolean;
    is_active:boolean;
    type:string;
    tags:ITag[];
    team:object;
    description:string;
    message:string;
    open_source:boolean;
    started_at:string;
    development_status:string;
    hardware_wallet:boolean;
    proof_type:string;
    org_structure:string;
    hash_algorithm:string;
    links:object;
    links_extended:object;
    hitepaper:object;
    first_data_at:string;
    ast_data_at:string;
}

interface PriceData {
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        }
    };
}

function Coin() {
    
    const [loading, setLoading] = useState(true);
    // Coin.tsx에서 param 받기
    const {coinId} = useParams() as unknown as RouteParam;
    // Coin.tsx에서 state 받기
    const {state} = useLocation() as RouteState;

    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();

    useEffect(() => {
       return () => {
           (async () => {
              const infoData = await (
                                       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
                                   ).json();
               console.log(infoData);     
   
               const priceData = await (
                                       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
                                   ).json();
               console.log(priceData);
   
               setInfo(infoData);
               setPriceInfo(priceData);
               setLoading(false);
          })();
       }
    }, []);

    return (
        <Container>
        <Header>
            <Title>{state?.name || "Loading..."}</Title>
        </Header>
        { 
            loading 
            ? (<Loader>Loading...</Loader>)
            : ( null )
        }
    </Container>
    );
}

export default Coin;