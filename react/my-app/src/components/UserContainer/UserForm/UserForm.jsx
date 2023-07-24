import {useForm} from "react-hook-form";

export const UserForm=({setUsers})=>{
    const{register,handleSubmit,reset} =useForm()

    const save=(user)=>{
        fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        }).then(value=>value.json()).then(value=>{
                setUsers(prev=>[...prev,value])
                reset()
            })
    }



    return(
        <form onSubmit={handleSubmit(save)}>
            <label>name: <input type={"text"} {...register('name')}/></label>
            <label>username: <input type={"text"} {...register('username')}/></label>
            <label>email: <input type={"text"} {...register('email')}/></label>
            <label>city: <input type={"text"} {...register('address.city')}/></label>
            <button>Save</button>
        </form>
    )
}