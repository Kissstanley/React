import {apiServices} from "./apiServices";
import {urls} from "../const";

const charactersService = {
    getByIds:(ids)=>apiServices.get(urls.characters(ids))
}

export {
    charactersService
}