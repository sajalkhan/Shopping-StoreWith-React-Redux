import GroceryItemList from '../DB/items.json';

export const addItem = (id)=>{
    let item = GroceryItemList.find((item)=> item.id === id);
    return item;
}