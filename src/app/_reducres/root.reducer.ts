import {Action} from "../_interfaces/action.interface";
import {INITIAL_STATE} from "../_interfaces/InitialState.interface"
import {SearchState} from "../_interfaces/SearchState.interface";
export  function RootReducer(state:SearchState=INITIAL_STATE, action:Action):SearchState {
  switch(action.type){
    case 'InitialSearch':
      return [{
      text:action.type,
        completed:true
      }];
    default:
    return state;
  }

}
