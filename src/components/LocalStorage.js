import React, { useEffect, useState } from 'react'

function LocalStorage(key, initialValue) {
    const [value, setValue] = useState(()=>{
        const data = localStorage.getItem(key)
        if(data != null) 
        return JSON.parse(data)

        if(typeof initialValue === 'function'){
            return initialValue()
        } else{
            return initialValue
        }
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);
    
  return (
    [value, setValue]
  )
}

export default LocalStorage;