import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string;
    updateUserStatus: (value: string) => void;
}
export const Status = (props: PropsType) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const activateEditMode = () => {
        setEdit(true);
    }

    const deactivateEditMode = () => {
        setEdit(false);
        props.updateUserStatus(value);
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <div>
            {
                edit
                    ? <input value={value}
                             onChange={onChangeHandler}
                             onBlur={deactivateEditMode}
                             autoFocus/>
                    : <span onDoubleClick={activateEditMode}>{props.status}</span>
            }
            {/*{props.status}*/}
        </div>
    );
};

