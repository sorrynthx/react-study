import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({text, category, id}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        // 변경할 카테고리
        const {
            currentTarget: {name},
        } = event;

        setToDos((oldToDos) => {
            // 인덱스 find
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            // 새로운 toDo + 변경할 category
            const newToDo = {text, id, category: name as any};
            
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo, 
                ...oldToDos.slice(targetIndex+1)
            ];
        })
    };
    return (
        <li> 
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick}>DOING</button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick}>TO_DO</button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>DONE</button>
            )}
        </li>
    );
}

export default ToDo;