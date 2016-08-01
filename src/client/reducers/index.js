import { FINAL_FRUIT, MAKE_FRUIT } from '../actions';

const initialState = {
  0: { id: 0, color: 'yellow', icon: 'spinner', },
  1: { id: 1, color: 'yellow', icon: 'spinner', },
  2: { id: 2, color: 'yellow', icon: 'spinner', },
  3: { id: 3, color: 'yellow', icon: 'spinner', },
  4: { id: 4, color: 'yellow', icon: 'spinner', },
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case MAKE_FRUIT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          color: action.color,
          icon: action.icon,
        }
      };
    case FINAL_FRUIT:
      return {
        ...state,
        0: { id: 0, color: '#cd4436', icon: 'paper-plane', },
        1: { id: 1, color: '#cd4436', icon: 'paper-plane', },
        2: { id: 2, color: '#cd4436', icon: 'paper-plane', },
        3: { id: 3, color: '#cd4436', icon: 'paper-plane', },
        4: { id: 4, color: '#cd4436', icon: 'paper-plane', },
      }
      default:
        return state;
  }
};

export default reducer;
