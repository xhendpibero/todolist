const initialState = {
  todo: [{
          val: "Apa Tugasmu Hari Ini? (click here)",
          selected: false,
        }],
  filter: 1,
  loading: false
}

const reducer = (state=initialState, action) => {
  const newState = {...state};
  var i = action.value
  switch (action.type) {
    case "ADD_LIST":
      newState.todo = [
          ...newState.todo,
          {
            val: "Apa Tugasmu Hari Ini? (click here)",
            selected: i
          }
      ]
      break;
    case "EDIT_LIST":
      var result = prompt("Apa Tugasmu Hari Ini?", newState.todo[i].val);
      if (result) {
        newState.todo[i].val =  result
        newState.todo = [
            ...newState.todo
        ]
      }
      break;
    case "DELETE_LIST":
      newState.todo.splice(i, 1);
      break;
    case "CHANGE_FILTER":
      newState.filter = i
      break;
    case "LIST_DONE":
      if (!newState.todo[i].selected) {
        newState.todo[i].selected = true
      }
      break;
    case "LOADING_LIST":
      newState.loading = i
      break;
    default:
    return newState;
  }
  newState.todo = [
      ...newState.todo
  ]
  return newState;
}

export default reducer;
