import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };

    
    const { register, watch } = useForm();
    console.log(watch(), 'watching...' );
    
    return (
        <div>
            <form>
            <input {...register("email")} placeholder="Email" />
            <input {...register("firstName")} placeholder="First Name" />
            <input {...register("lastName")} placeholder="Last Name" />
            <input {...register("username")} placeholder="Username" />
            <input {...register("password")} placeholder="Password" />
            <input {...register("password1")} placeholder="Password1" />
            <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;