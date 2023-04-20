import React from 'react';
import {UserType} from "../../types/types";
import avatar_male from '../../assets/images/avatar_male_person.png';

type PropsType = {
    arrayUsers: Array<UserType>;
}
export const Sidebar = (props: PropsType) => {
    return (
        <div style={{display: 'flex', alignItems: 'flex-start', border: 'solid', borderColor: 'white', borderWidth: '2px' }}>
            {props.arrayUsers.map((user: UserType) => <div key={user.id}>
                <img src={avatar_male} alt={'avatar_male_images'}
                     style={{width: '48px', height: '48px'}}/>
                <div>{user.name}</div>
            </div>)}
        </div>
    );
};
