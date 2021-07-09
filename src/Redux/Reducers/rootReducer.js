const initialState = {
  home: [],
  tvShows: [],
  movies: [],
  newAndPopular: [],
  myList: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.id !== action.payload),
    //   };
    default:
      return state;
  }
}
