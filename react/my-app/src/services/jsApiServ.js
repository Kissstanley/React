import axios from "axios";
import {jsonBaseURL} from "../constants/urls";

export const jsApiServ=axios.create({baseURL:jsonBaseURL});
