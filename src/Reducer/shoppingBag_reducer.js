import {ADD_GROCERY,REMOVE_SHOPPINGBAG_ITEM} from '../Action';
import {addItem} from './helper';

function shoppingBag(state = [],action){
    switch(action.type)
    {
        case ADD_GROCERY:
            var shoppingBag = [...state, addItem(action.id)];
            return shoppingBag;
        case REMOVE_SHOPPINGBAG_ITEM:
                shoppingBag = state.filter(item=> item.id !== action.id);
            return shoppingBag;
        default:
            return state;
    }
}

export default shoppingBag;