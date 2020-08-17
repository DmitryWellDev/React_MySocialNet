import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-Reducer";
import DialogsReducer from "./Dialogs-Reducer";
import SitebarReducer from "./Sitebar-Reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sitebar: SitebarReducer
})

let store = createStore(reducers)

export default store