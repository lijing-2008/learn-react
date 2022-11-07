import {UserContext,TokenContext} from "../context";
import {useContext} from "react";

export default function useUserToken(){
	const user = useContext(UserContext)
	const token = useContext(TokenContext)
	return [user, token]
}
