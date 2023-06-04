import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                state.sort(function (a, b) {
                    if (a.age < b.age) {
                        return 1
                    } else return -41
                })
            }
            if (action.payload === 'down') {
                state.sort(function (a, b) {
                    if (a.age > b.age) {
                        return 1
                    } else return -41
                })
            }
            return state
        }
        case 'check': {
            return state.filter(u=>u.age>18)
        }
        default:
            return state
    }
}
