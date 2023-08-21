import axios from "axios";

import {baseURL} from "../const";

const apiServices=axios.create({baseURL})

export {
    apiServices
}