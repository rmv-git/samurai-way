import React from 'react';
import {Sidebar} from "./Sidebar";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {UserResponseType} from "../../types/types";
import {getAllUsersThunk} from "../../redux/sidebar-reducer";

export class SidebarClassComponent extends React.Component<SidebarContainerType, any>{

    componentDidMount() {
        this.props.getAllUsersThunk();
    }

    render() {
        return <Sidebar arrayUsers={this.props.arrayUsers}/>
    }
}

type MapStateToPropsType = {
    arrayUsers: UserResponseType[];
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        arrayUsers: state.sidebarReducer.items,
    }
}

const ConnectComponent = connect(mapStateToProps, {getAllUsersThunk});
type SidebarContainerType = ConnectedProps<typeof ConnectComponent> & MapStateToPropsType;
export const SidebarContainer = ConnectComponent(SidebarClassComponent);