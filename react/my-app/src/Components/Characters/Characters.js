import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {charactersActions} from "../../redux/slices";
import {Character} from "../Character/Character";

const Characters = () => {
    const {state:{ids}}=useLocation()
    const dispatch=useDispatch()
    const {characters}=useSelector(state => state.characters)


    useEffect(()=>{
        dispatch(charactersActions.getByIds({ids}))
    },[])
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {
    Characters
};