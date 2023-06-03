import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {RootStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";

type MapStateToPropsType = {
    arrayUsers: UserType[],
}
export type NavbarContainerType = MapStateToPropsType;
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        arrayUsers: state.dialogsReducer.arrayUsers,
    }
}
export const NavbarContainer = connect(mapStateToProps)(Navbar);