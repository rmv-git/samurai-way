import {RootStateType} from "../redux/redux-store";

// export const newPostTextSl = (state: RootStateType) => {
//     return state.profileReducer.newPostText
// }
export const arrayPostsSl = (state: RootStateType) => {
    return state.profileReducer.arrayPosts
}

export const profileSl = (state: RootStateType) => {
    return state.profileReducer.profile
}
export const isFetchingSl = (state: RootStateType) => {
    return state.appReducer.isFetching
}
export const statusSl = (state: RootStateType) => {
    return state.profileReducer.status
}
export const errorSl = (state: RootStateType) => {
    return state.profileReducer.error
}
