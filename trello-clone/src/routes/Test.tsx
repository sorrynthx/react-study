import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function Test() { 
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const hours = useRecoilValue(hourSelector);

    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => { 
      // + "1" -> int (string -> int)
      setMinutes( + event.currentTarget.value);
    };

    return (
      <div>
        <input 
          value={minutes} 
          onChange={onMinutesChange} 
          type="number" 
          placeholder="mins" 
        />

        <input 
          value={hours} 
          //onChange={}
          readOnly
          type="number" 
          placeholder="hours" 
        />
      </div>
    );
  }
  
  export default Test;
  