
import React from "react";
import { useRecoilState, useRecoilValue} from "recoil";
import { categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
    
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    };
    return (
        <div>
            <h1> To Dos</h1> 
            < hr /> 
            <CreateToDo /> 
            
            <select value={category} onInput={onInput}>
                <option value="TO_DO">TO DO</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </select>
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo} />) }
        </div>
    );
}

export default ToDoList;