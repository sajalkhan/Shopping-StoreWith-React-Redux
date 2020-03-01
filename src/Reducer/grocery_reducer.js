import {ADD_GROCERY, REMOVE_SHOPPINGBAG_ITEM} from '../Action';
import GroceryItemList from '../DB/items.json';
import {addItem} from './helper';

function grocery(state = GroceryItemList,action){
    switch(action.type)
    {
        case ADD_GROCERY:
            var grocery = state.filter(item=> item.id !== action.id);
            return grocery;
        case REMOVE_SHOPPINGBAG_ITEM:
            grocery = [...state, addItem(action.id)];
            return grocery.sort((a,b)=>{return a.id-b.id});
        default:
            return state;
    }
}

export default grocery;