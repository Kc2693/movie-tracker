export const userReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    case 'REMOVE_USER':
      return state = [];
    default:
      return state;
  }
}