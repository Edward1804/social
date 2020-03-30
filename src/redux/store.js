import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hello, how are you?", likeCount: 10},
                {id: 2, message: "My name is Edward", likeCount: 4}
            ],
            newPostText: ""
        },
        messagePage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "What's up?"},
                {id: 4, message: "Hey!"}
            ],
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Edward"},
                {id: 3, name: "Nikita"},
                {id: 4, name: "Roma"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Anna"}
            ],
            messageText: ""
        }

    },
    _callSubscriber() {
        console.log("change");
    },

    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);

    },

};


window.state = store.getState();





export default store;