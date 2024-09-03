import { ADD_USER } from "../constants/constants";

export function addUserAction(user){
    return {
        type:ADD_USER,
        payload:user,
    }
}