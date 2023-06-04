import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // const newState = [...state]
            // if (action.payload === 'up') {
            //     newState.sort(function (a, b) {
            //         if (a.age < b.age) {
            //             return 1
            //         } else return -41
            //     })
            // }
            // if (action.payload === 'down') {
            //     newState.sort(function (a, b) {
            //         if (a.age > b.age) {
            //             return 1
            //         } else return -41
            //     })
            // }
            // return newState
            const newState = [...state].sort((a, b) => {
                if(a > b) return 1
                else if (a < b) return  -1
                else return  0
            })

            return  action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)

        }
        default:
            return state
    }
}
