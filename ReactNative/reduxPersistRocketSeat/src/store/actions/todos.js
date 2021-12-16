export function addTodo(title) {
    const id = Math.random();

    return {
        type: 'ADD_TODO',
        payload: {
            title,
        },
    };
}
