const INITIAL_STATE = {
    todoList: [],
};

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: Math.random(),
                        title: action.payload.title,
                    },
                ],
            };

        default:
            return state;
    }
}
