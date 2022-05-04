import React, { useState } from "react";
import {useForm} from "react-hook-form";

// function ToDoList() {
//     const [toDo, setTodo] = useState("");
//     const [toDoError, setTodoError] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: {value},
//         } = event;
//         setTodo(value);
//         setTodoError("");
//     };
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setTodoError("To do should be longer");
//         }
//         console.log("submit");
//     };
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input placeholder="write a to do" value={toDo} onChange={onChange} />
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError : ""}
//             </form>

//         </div>
//     );
// }

function ToDoList() {
    const {register, watch} = useForm();
    console.log(watch());
    
    return (
        <div>
            <form>
                <input {...register("email")} placeholder="write a Email" /><br/>
                <input {...register("name")} placeholder="write a Name" /><br/>
                <input {...register("password")} placeholder="write a Password" /><br/>
                <input {...register("password_confirm")} placeholder="write a Password Confirm" /><br/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;