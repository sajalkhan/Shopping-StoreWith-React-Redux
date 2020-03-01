export const ADD_GROCERY = "ADD_GROCERY";
export const REMOVE_SHOPPINGBAG_ITEM = "REMOVE_SHOPPINGBAG_ITEM";
export const ADD_POCKET_MONEY = "ADD_POCKET_MONEY";
export const REMOVE_POCKET_MONEY = "REMOVE_POCKET_MONEY";

export function addGroceryById(id) {
    const action = {
        type: ADD_GROCERY,
        id
    }
    return action;
}

export function removeShoppingBagItemById(id){
    const action = {
        type: REMOVE_SHOPPINGBAG_ITEM,
        id
    }
    return action;
}

export function addPocketMoney(cost){
    const action = {
        type: ADD_POCKET_MONEY,
        cost
    }
    return action;
}

export function removePocketMoney(cost){
    const action = {
        type: REMOVE_POCKET_MONEY,
        cost
    }
    return action;
}