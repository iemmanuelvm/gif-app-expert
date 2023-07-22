import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        // categories.push('valorant');
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'valorant']);
    };

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                onNewCategory={event => onAddCategory(event)}
            />

            {
            categories.map((category) => {
                return (
                    <GifGrid 
                    key={category} 
                    category={category}
                    />
                )
            })
            }
        </>
    );
}