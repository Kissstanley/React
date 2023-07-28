import {useForm} from "react-hook-form";
import {UserService} from "../../../services/UserService";

export const UserForm=({setUsers})=>{
    const{register,handleSubmit,reset} =useForm()

    const save=async (user)=>{
        await UserService.create(user)
        console.log(user);
        setUsers(prev=>[...prev,user])
        reset()
    }



    return(
        <form onSubmit={handleSubmit(save)}>
            <label>id: <input type={"number"} {...register('id')}/></label>
            <label>name: <input type={"text"} {...register('name')}/></label>
            <label>username: <input type={"text"} {...register('username')}/></label>
            <label>email: <input type={"text"} {...register('email')}/></label>
            <label>city: <input type={"text"} {...register('address.city')}/></label>
            <button>Save</button>
        </form>
    )
}