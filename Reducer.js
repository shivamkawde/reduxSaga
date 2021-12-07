export const mainReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      console.log(action);
      return state + 1;
    case "data":
      console.log(action.data);
    case "getUsers":
      return state - 1;
    default:
      return state;
  }
};
