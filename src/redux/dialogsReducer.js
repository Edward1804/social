const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";


let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.messageText
            };
            state.messages.push(newMessage);
            state.messageText = "";
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.newMessage;
            return state;
        default:
            return state;
    }
};


export default dialogsReducer;

export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});


