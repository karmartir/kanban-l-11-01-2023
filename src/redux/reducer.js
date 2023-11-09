const initialState = {
    appName: 'Kanban Board',
    priorities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    boardStatuses: [
        {
            id: '1',
            status: 'todo'
        },
        {
            id: '2',
            status: 'in progress'
        },
        {
            id: '3',
            status: 'in review'
        },
        {
            id: '4',
            status: 'done'
        },

    ],
    tasks: [
        {name: 'learn redux', id: 111, description: 'do kanban with redux', priority: 1, status: 'todo'},
        {name: 'learn axios', id: 112, description: 'do kanban with server', priority: 3, status: 'in progress'},
        {
            name: 'learn typeScript',
            id: 113,
            description: 'do homework with typescript',
            priority: 2,
            status: 'in progress'
        },
        {
            name: 'learn graphQL',
            id: 114,
            description: 'learn documentation, watch tutorial',
            priority: 4,
            status: 'in review'
        },
        {name: 'learn unit tests', id: 115, description: 'join to webinars', priority: 1, status: 'done'},
        {name: 'find a job', id: 116, description: 'good salary, remote, interesting', priority: 1, status: 'done'},
    ],
}

const kanban = (state = initialState, action) => {
    switch (action.type) {

        case 'DELETE_TASK':
            const updatedTasks = state.tasks.filter(task => task.id !== action.payload)
            return {...state, tasks: updatedTasks}

        case 'CHANGE_PRIORITY':
            const value = action.payload.direction === 'up' ? 1 : -1;
            const newTasks = state.tasks.map(task =>
                task.id === action.payload.id ?
                    {...task, priority: task.priority + value} : task)
            return {...state, tasks: newTasks}

        case 'MOVE_TASK':
            const stringArrayStatuses = state.boardStatuses.map(el => el.status)
            const currentStatusIndex = stringArrayStatuses.indexOf(action.payload.status)
            const newStatusIndex = currentStatusIndex + (action.payload.direction === 'left' ? -1 : 1)
            const newStatus = stringArrayStatuses[newStatusIndex]
            const newTasks2 = state.tasks.map(el => el.id === action.payload.id ? {...el, status: newStatus} : el)
            return {...state, tasks: newTasks2}





        default:
            return state
    }
}
export default kanban;