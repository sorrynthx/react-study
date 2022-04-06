import {useState} from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => { setToDo(event.target.value); }
  const onSubmit = (event) => {
    // auto submit 방지
    event.preventDefault();

    if (toDo === "") return;
    
    // 배열에 이전 데이터와 같이 추가
    setToDos((toDos) => [toDo, ...toDos]);
    
    // 값 초기화
    setToDo("");
  }

  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="right your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )}
        )}
      </ul>
    </div>
  );
}

export default App;
