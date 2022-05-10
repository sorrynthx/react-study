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

interface IForm {
    name?: string,  // 필수가 아닐때, ? 물음표 추가
    email: string,
    password: string,
    password_confirm: string
}

function ToDoList() {
    const {
        register, 
        watch, 
        handleSubmit, 
        formState:{errors}
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
            name: "홍길동",
        },
    });
    const onValid = (data:any) => {
        console.log(data);
    }
    //console.log(watch());
    console.log(errors);

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
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@naver.com$/,
                                            message: "이메일 형식!"
                                        },
                                        minLength: {
                                            value: 5, 
                                            message: "최소 5자 이상"
                                        }
                                    }
                                )
                    } placeholder="write a Email" 
                />
                <span>
                    {errors?.email?.message}
                </span>
                <br/>
                
                <input {...register("name", {required: "이름 필수!"})} placeholder="write a Name" /><br/>
                <span>
                    {errors?.name?.message}
                </span>
                <input {...register("password", {required: "비밀번호 필수!"})} placeholder="write a Password" /><br/>
                <span>
                    {errors?.password?.message}
                </span>
                <input {...register("password_confirm", {required: "비밀번호 컨펌 필수!"})} placeholder="write a Password Confirm" /><br/>
                <span>
                    {errors?.password_confirm?.message}
                </span>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;