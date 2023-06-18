import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string;
    updateUserStatus: (value: string) => void;
}

type StateType = {
    editMode: boolean
    status: string
}

export class Status extends React.Component<PropsType, StateType> {

    state: StateType = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status);
    }

    onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: event.currentTarget.value});
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <input value={this.state.status}
                                 onChange={this.onChangeHandler}
                                 onBlur={this.deactivateEditMode}
                                 autoFocus/>
                        : <span onDoubleClick={this.activateEditMode}>status: {this.state.status}</span>
                }
            </div>
        );
    }
};

