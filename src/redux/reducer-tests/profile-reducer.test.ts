import {addPostAC, InitialStateType, profileReducer, removePostAC} from "../profile-reducer";

const state: InitialStateType = {
    arrayPosts: [
        {id: 1, text: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, text: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, text: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
    profile: {
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    },
    status: '',
    error: [],
};

test('length of posts should be incremented', () => {

    let newState = profileReducer(state, addPostAC('it-incubator'));

    expect(newState.arrayPosts.length).toBe(4);
});

test('message of new post should be correct', () => {

    let newState = profileReducer(state, addPostAC('it-incubator'));

    expect(newState.arrayPosts[0].text).toBe('it-incubator');
});

test('after deleting length of messages should be decrement', () => {

    let newState = profileReducer(state, removePostAC(1));

    expect(newState.arrayPosts.length).toBe(2);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {

    let newState = profileReducer(state, removePostAC(9));

    expect(newState.arrayPosts.length).toBe(3);
});
