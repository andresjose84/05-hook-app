const initState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }
    return state;
}

let todo = todoReducer();

const newToDo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}];

const agregarToDoAction = {
    type: 'agregar',
    payload: newToDo
};

todo = todoReducer(todo, agregarToDoAction);

console.log(todo);