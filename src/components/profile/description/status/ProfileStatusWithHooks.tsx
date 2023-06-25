import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string;
    updateUserStatus: (value: string) => void;
}
export const ProfileStatusWithHooks = (props: PropsType) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [value, setValue] = useState<string>(props.status);

    useEffect(() => {
        setValue(props.status)
    }, [props.status]);

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
                    : <span onDoubleClick={activateEditMode}>status: {props.status}</span>
            }
        </div>
    );
};
