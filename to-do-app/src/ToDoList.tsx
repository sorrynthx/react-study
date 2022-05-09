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
    const {register, watch, handleSubmit, formState} = useForm();
    const onValid = (data:any) => {
        console.log(data);
    }
    //console.log(watch());
    console.log(formState.errors);

    return (
        <div>
            <form 
                style={{display: 'flex', flexDirection: 'column'}} 
                onSubmit={handleSubmit(onValid)}
            >
                <input 
                    {...register("email", 
                                    {
                                        required: "Eamil 필수", 
                                        minLength: {
                                        value: 5, 
                                        message: "최소 5자 이상"}
                                    }
                                )
                    } placeholder="write a Email" /><br/>
                
                <input {...register("name", {required: true})} placeholder="write a Name" /><br/>
                <input {...register("password", {required: true})} placeholder="write a Password" /><br/>
                <input {...register("password_confirm", {required: true})} placeholder="write a Password Confirm" /><br/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;