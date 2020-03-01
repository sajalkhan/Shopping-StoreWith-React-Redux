import {ADD_POCKET_MONEY, REMOVE_POCKET_MONEY} from '../Action';

function pocketMoney(state = 50,action){
    switch(action.type)
    {
        case ADD_POCKET_MONEY:
            var pocketMoney = state + action.cost;
            return pocketMoney;
        case REMOVE_POCKET_MONEY:
            pocketMoney = state - action.cost;
            return pocketMoney;
        default:
            return state;
    }
}

export default pocketMoney;