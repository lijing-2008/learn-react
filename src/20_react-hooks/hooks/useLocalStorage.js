import {useEffect, useState} from "react";

export default function useLocalStorage(key) {
	const [data, setData] = useState(() => {
		const item = localStorage.getItem(key)
		// 如果item是undefined,返回一个默认值""，不然parse会报错
		if (!item) return ""
		return JSON.parse(item)
	});
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(data))
	}, [key, data])
	return [data, setData]
}
