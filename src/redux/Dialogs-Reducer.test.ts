import DialogsReducer from "./Dialogs-Reducer";
import {dialogsPageType} from "./store";

test('correct message should be added', () => {
    const startState: dialogsPageType = {
        dialogs: [
            {id: 1, name: "Skril", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"},
            {id: 2, name: "Banan", photo: "https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"},
            {id: 3, name: "Ej", photo: "https://klike.net/uploads/posts/2019-03/medium/1551515289_11.jpg"},
            {id: 4, name: "Zviazko", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512890_12.jpg"},
            {
                id: 5, name: "Yus", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512905_15.jpg"
            },
        ],
        uncheckedDialogs: [
            {id: 1, name: "Sasha", photo: "https://klike.net/uploads/posts/2019-03/1551512897_16.jpg"},
            {id: 2, name: "Masha", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512911_25.jpg"},
            {id: 3, name: "Vlad", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512926_36.jpg"},
            {id: 4, name: "Miha", photo: "https://klike.net/uploads/posts/2019-03/1551512878_44.jpg"},
            {
                id: 5, name: "Chort", photo: "https://klike.net/uploads/posts/2019-03/1551512969_49.jpg"
            },
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Buhai!"},
            {id: 3, message: "Otdihai!"}
        ],
        newMessageText: "React way of SAMURAI",
        uncheckedMessages: [
            {id: 1, message: "Yo!"},
            {id: 2, message: "Ege-ge!"},
            {id: 3, message: "Hello!"}
        ]
    }

    const newMessage = 'IT Incubator'

    const endState = DialogsReducer(startState, {type: "ADD-MESSAGE", w:newMessage})

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe(newMessage)
})

test('ProfileReducer should add entered message correctly', () => {
    const startState: dialogsPageType = {
        dialogs: [
            {id: 1, name: "Skril", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"},
            {id: 2, name: "Banan", photo: "https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"},
            {id: 3, name: "Ej", photo: "https://klike.net/uploads/posts/2019-03/medium/1551515289_11.jpg"},
            {id: 4, name: "Zviazko", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512890_12.jpg"},
            {
                id: 5, name: "Yus", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512905_15.jpg"
            },
        ],
        uncheckedDialogs: [
            {id: 1, name: "Sasha", photo: "https://klike.net/uploads/posts/2019-03/1551512897_16.jpg"},
            {id: 2, name: "Masha", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512911_25.jpg"},
            {id: 3, name: "Vlad", photo: "https://klike.net/uploads/posts/2019-03/medium/1551512926_36.jpg"},
            {id: 4, name: "Miha", photo: "https://klike.net/uploads/posts/2019-03/1551512878_44.jpg"},
            {
                id: 5, name: "Chort", photo: "https://klike.net/uploads/posts/2019-03/1551512969_49.jpg"
            },
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Buhai!"},
            {id: 3, message: "Otdihai!"}
        ],
        newMessageText: "React way of SAMURAI",
        uncheckedMessages: [
            {id: 1, message: "Yo!"},
            {id: 2, message: "Ege-ge!"},
            {id: 3, message: "Hello!"}
        ]
    }

    const newMessage = 'New message text'

    const endState = DialogsReducer(startState, {type: "UPDATE-NEW-MESSAGE-TEXT", newText: newMessage})

    expect(endState.newMessageText).toBe(newMessage)
})