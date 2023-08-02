import axios from "axios";
import {oktenBaseURL} from "../constants/urls";

export const okApiServ=axios.create({baseURL:oktenBaseURL});

