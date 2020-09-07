export const addToDo = text => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text
})

export const toggleToDo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter
    }
}