import { useState } from 'react';
import './App.css';

const MinutesToHours = () =>
{
  const [value, setValue] = useState(0);
  const [isMinute, setIsMinute] = useState(false);
  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input type="number" id="minutes" placeholder="Minutes"
          disabled={isMinute} value={!isMinute ? value : value * 60}
          onChange={(e) =>
          {
            const v = e.target.value;
            setValue(v);
          }} />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input type="number" id="hours" placeholder="Hours"
          disabled={!isMinute} value={!isMinute ? value / 60 : value}
          onChange={(e) =>
          {
            const v = e.target.value; // String
            console.log(v);
            let v2 = '';

            if (v.startsWith('0'))
            { // 시작하는 문자 확인
              v2 = v.substring(1); // 1번 인덱스부터 문자 가져오기
            } // 1번 인덱스부터 문자 가져오기
            if (parseInt(v2) < 0) { setValue(0); }
            else { setValue(v2); }
          }}
        />
      </div>
      <button onClick={() =>
      {
        setValue(0);
      }}>Reset</button>
      <button onClick={() => { setIsMinute(!isMinute); }}>Flip</button>
    </div>
  )
};

function App()
{
  return (
    <div className="App">
      <MinutesToHours />
    </div>
  );
}
export default App;