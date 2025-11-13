import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: any){
    const [storedValue, setStoredValue] = useState(()=> {
        try {
            const value = localStorage.getItem(key)

            if (value) {
                return JSON.parse(value)
            }else{
                return initialValue
            }
        } catch (error) {
            console.error(error)
            return initialValue
        }

    })

    useEffect(()=> {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (error) {
            console.error(error)
        }

    }, [storedValue, key])

    return [storedValue, setStoredValue]
}

export default useLocalStorage

//useLocalStorage<string>('user', 'abe')