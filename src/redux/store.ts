import {ActionsType} from "../types/actions";
import {MessageType, PostType, StoreType} from "../types/types";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            arrayPosts: [
                {id: 1, text: 'Lorem ipsum dolor sit amet.', likesCount: 10},
                {id: 2, text: 'Lorem ipsum dolor sit amet.', likesCount: 7},
                {id: 3, text: 'Lorem ipsum dolor sit amet.', likesCount: 99},
            ],
        },
        dialogsPage: {
            newMessageText: '',
            arrayUsers: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Katya'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Viktor'},
            ],
            arrayMessages: [
                {id: 1, text: 'Hi!'},
                {id: 2, text: 'Hi, hi!'},
                {id: 3, text: 'Yo!'},
                {id: 4, text: 'Yo, yo!'},
                {id: 5, text: 'Yo, yo, yo!'},
            ],
        },
        sidebar: {
            arrayUsers: [
                {id: 1, name: 'Viktor'},
                {id: 2, name: 'Dimych'},
                {id: 4, name: 'Valera'},
            ],
        }
    },
    dispatch(action: ActionsType) {
        profileReducer(store._state.profilePage, action);
        dialogsReducer(store._state.dialogsPage, action);
        sidebarReducer(store._state.sidebar, action);
        this._renderThree(this._state);
        /*  if (action.type === 'ADD_POST') {
              const newPost: PostType = {
                  id: new Date().getTime(),
                  text: this._state.profilePage.newPostText,
                  likesCount: 0,
              };
              if (this._state.profilePage.newPostText !== '') {
                  this._state.profilePage.arrayPosts.push(newPost);
              }
              this._state.profilePage.newPostText = '';
              this._renderThree(this._state);
          }
          if (action.type === 'UPDATE_NEW_POST_TEXT') {
              this._state.profilePage.newPostText = action.value;
              this._renderThree(this._state);
          }
          if (action.type === 'SEND_MESSAGE') {
              const newMessage: MessageType = {
                  id: new Date().getTime(),
                  text: this._state.dialogsPage.newMessageText,
              };
              if (this._state.dialogsPage.newMessageText !== '') {
                  this._state.dialogsPage.arrayMessages.push(newMessage);
              }
              this._state.dialogsPage.newMessageText = '';
              this._renderThree(this._state);
          }
          if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
              this._state.dialogsPage.newMessageText = action.value;
              this._renderThree(this._state);
          }*/
    },
    _renderThree() {
        console.log('no subscribers (observers)')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderThree = observer;
    },
};