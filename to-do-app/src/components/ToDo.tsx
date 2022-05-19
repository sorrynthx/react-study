import { IToDo } from "./atoms";

function ToDo(data:IToDo) {
    return (
        <li> 
            <span>{data.text}</span>
            <button>TO_DO</button>
            <button>DOING</button>
            <button>DONE</button>
        </li>
    );
}

export default ToDo;