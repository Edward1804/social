const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const ADD_POST = "ADD_POST";

let initialState = {
    posts: [
        {id: 1, message: "hello, how are you?", likeCount: 10},
        {id: 2, message: "My name is Edward", likeCount: 4}
    ],
    newPostText: ""
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_POST_TEXT:
            debugger
            state.newPostText = action.newMessage;
            return state;
        default:
            return state;
    }
};


export default profileReducer;

export const updateTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newMessage: text
});

export const addPostActionCreator = () => ({
    type: ADD_POST
});


