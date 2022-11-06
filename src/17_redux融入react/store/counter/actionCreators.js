import * as actionTypes from "./constant";

export const changeNumAction = (num) =>  {
	return {
		type: actionTypes.CHANGE_NUM,
		num
	}
}
