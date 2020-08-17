import {ActionsTypes, RootStateType, SitebarElementType} from "./store";

let initialState = [
    {id: 1, name: 'Masha'},
    {id: 2, name: 'Glasha'},
    {id: 3, name: 'Natasha'},
]

const SitebarReducer = (state: Array<SitebarElementType> = initialState, action: ActionsTypes) => {
    return state
}

export default SitebarReducer