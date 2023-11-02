const initialState = {
    appName: 'Kanban Board',
    boardStatuses: [
        {
            id: '1',
            status: 'To do'
        },
        {
            id: '2',
            status: 'In progress'
        },
        {
            id: '3',
            status: 'In review'
        },
        {
            id: '4',
            status: 'Done'
        },

    ],
    tasks: [
        {name: 'learn redux', id: 111, description: 'do kanban with redux', priority: 1, status: 'todo'},
        {name: 'learn axios', id: 112, description: 'do kanban with server', priority: 3, status: 'progress'},
        {name: 'learn typeScript', id: 113, description: 'do homework with typescript', priority: 2, status: 'progress'},
        {name: 'learn graphQL', id: 114, description: 'learn documentation, watch tutorial', priority: 4, status: 'review'},
        {name: 'learn unit tests', id: 115, description: 'join to webinars', priority: 1, status: 'done'},
        {name: 'find a job', id: 116, description: 'good salary, remote, interesting', priority: 1, status: 'done'},
    ],
}

const kanban = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_TASK':
            return state
        default:
            return state
    }
}
export default kanban;