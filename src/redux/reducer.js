import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";

export const initalState={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
}

// When first timer reducer is called, then state will be undefined
// So to avoid error, passing default paramenter
export const Reducer = (state = initalState,action)=>{
    return state;
}