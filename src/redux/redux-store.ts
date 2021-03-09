import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-Reducer";
import DialogsReducer from "./Dialogs-Reducer";
import SitebarReducer from "./Sitebar-Reducer";
import UsersReducer from "./Users-Reducer";
import AuthReducer from "./AuthReducer";
import AsideReducer from "./Aside-Reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sitebar: SitebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    AsideReducer: AsideReducer
})

export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store