import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    
    const [InputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = InputValue.trim();
        if(newInputValue.length <= 1) {return};
        
        // console.log(event);
        
        // console.log(InputValue);
        // setCategories(categories=>[InputValue, ...categories]);
        onNewCategory(newInputValue);
        setInputValue('');
    }


    return (
        <form onSubmit={(event)=>onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={InputValue}
                onChange={(event)=>{onInputChange(event)}}
            />
        </form>
        
    )
}
