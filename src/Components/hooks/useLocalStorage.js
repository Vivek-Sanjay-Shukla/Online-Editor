import React ,{useEffect,useState}from 'react'

const previous = `codepen-clone-`

const useLocalStorage = (key,initialValue) => {
 
  const prevKey = previous + key;

  const [value, setValue] = useState(() => {
    const JsonV = localStorage.getItem(prevKey)
    
    if(JsonV != null){
        return JSON.parse(JsonV)
    }

    if(typeof initialValue === 'function'){
        return initialValue()
    }
    else{
        return initialValue
    }
  });

  useEffect(() => {
     localStorage.setItem(prevKey,JSON.stringify(value))
  }, [prevKey,value]);
  
  return [value,setValue]
}

export default useLocalStorage