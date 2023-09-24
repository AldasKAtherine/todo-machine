import React from "react";


function useLocalStorage(itemName, initialValue) {

  const [item, setItem]= React.useState(initialValue);
  const [loading, setLloading]= React.useState(true);
  const [error, setError]= React.useState(false);
  
    React.useEffect(()=>{
    setTimeout(()=> {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLloading(false);
        
       } catch (error) {
        setLloading(true);
        setError(true);
  
       }
    },1000);

    }, [itemName, initialValue]);  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
  }

  
  export {useLocalStorage};

  // const defaultTodos = [
//   { text: "4pm sumergirme en mi propia miseria", completed: true },
//   { text: "4:30 contemplar el avismo", completed: false},
//   {
//     text: "5pm solucionar la hambruna mundial sin decirselo a nadie",
//     completed: false,
//   },
//   { text: "5:30 danza y ejercicio", completed: false },
//   { text: "6pm cena conmigo esa no la cancelo", completed: false },
//   { text: "7pm luchar con el odio que me tengo", completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1');