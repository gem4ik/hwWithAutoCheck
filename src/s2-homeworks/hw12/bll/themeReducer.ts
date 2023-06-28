export type initStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: initStateType = initState, action: changeThemeIdActionType): initStateType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id } as const) // fix any
