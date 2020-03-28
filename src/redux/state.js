const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const ADD_POST = "ADD_POST";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

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
        switch (action.type) {
            case ADD_MESSAGE:
                let newMessage = {
                    id: 5,
                    message: this._state.messagePage.messageText
                };
                this._state.messagePage.messages.push(newMessage);
                this._state.messagePage.messageText = "";
                this._callSubscriber(this._state);
                break;
            case UPDATE_MESSAGE_TEXT:
                this._state.messagePage.messageText = action.newMessage;
                this._callSubscriber(this._state);
                break;
            case ADD_POST:
                let newPost = {
                    id: 3,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
                break;
            case UPDATE_POST_TEXT:
                this._state.profilePage.newPostText = action.newMessage;
                this._callSubscriber(this._state);
                break;
        }

    },

};

export const updateTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newMessage: text
});

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});




export default store;