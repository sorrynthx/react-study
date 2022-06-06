import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function Test() { 
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);

    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => { 
      // + "1" -> int (string -> int)
      setMinutes( + event.currentTarget.value);
    };

    const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
      setHours( + event.currentTarget.value);
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
          onChange={onHoursChange}
          type="number" 
          placeholder="hours" 
        />
      </div>
    );
  }
  
  export default Test;
  