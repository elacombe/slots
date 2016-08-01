import { GENERATE_FRUIT } from '../actions';

const initialState = {
  0: { id: 0, color: '', name: '', },
  1: { id: 1, color: '', name: '', },
  2: { id: 2, color: '', name: '', },
  3: { id: 3, color: '', name: '', },
  4: { id: 4, color: '', name: '', },
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GENERATE_FRUIT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          color: action.color,
          name: action.name,
        }
      };
      default:
        return state;
  }
};

export default reducer;