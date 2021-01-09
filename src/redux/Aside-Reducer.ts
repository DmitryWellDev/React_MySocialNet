import {ActionsTypes, SitebarElementType} from "./store";

let initialState = [
    {id: 1, name: 'Alex', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmj_Cw0a3bylkInAv06Rc0DBiORC9uv6Rrw&usqp=CAU'},
    {id: 2, name: 'Glasha', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcujFaNsNgjnwgNGSosKYaQBrsmAKwjh7oeA&usqp=CAU'},
    {id: 3, name: 'Natasha', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwG5AvRUHrqgfRMEWFDEwg_3IhUcgvYbwgA&usqp=CAU'},
]

const AsideReducer = (state: Array<SitebarElementType> = initialState, action: ActionsTypes) => {
    return state
}

export default AsideReducer