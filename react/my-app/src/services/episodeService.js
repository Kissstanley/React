import {apiServices} from "./apiServices";
import {urls} from "../const";

const episodeService = {
    getAll:(page)=>apiServices.get(urls.episodes, {params:{page}})
}

export {
    episodeService
}