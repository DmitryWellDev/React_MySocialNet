import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-Reducer";
import DialogsReducer from "./Dialogs-Reducer";
import SitebarReducer from "./Sitebar-Reducer";
import UsersReducer from "./Users-Reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sitebar: SitebarReducer,
    usersPage: UsersReducer
})

export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store