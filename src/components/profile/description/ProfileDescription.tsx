import React, {useState} from 'react';
import robot from './../../../assets/images/robot.png';
import {UserProfileResponseType} from "../../../types/types";
import {ProfileStatusWithHooks} from "./status/ProfileStatusWithHooks";
import {ProfileContactsForm} from "./ProfileContactsForm";
import {ProfileDataEditForm} from "../ProfileDataEditForm";

type PropsType = {
    profile: UserProfileResponseType;
    status: string;
    updateUserStatus: (value: string) => void;
    error: string[];
}
export const ProfileDescription = (props: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <div>
            <ProfileStatusWithHooks status={props.status}
                                    updateUserStatus={props.updateUserStatus}/>
            <div>{props.error}</div>
            <div>
                {
                    !props.profile.photos
                        ? <img src={robot} style={{width: '64px', height: '64px'}} alt={'robot_avatar_image'}/>
                        : <img src={props.profile.photos.small} alt={'small_profile_image'}/>

                }
                <div>
                    <b>FullName: </b>{props.profile.fullName}
                </div>
                <div>
                    <b>LookingForAJob: </b>{JSON.stringify(props.profile.lookingForAJob)}
                </div>
                <div>
                    <b>LookingForAJobDescription: </b>{props.profile.lookingForAJobDescription}
                </div>
                <div>
                    {
                        editMode
                            ? <ProfileDataEditForm profile={props.profile}/>
                            : <ProfileContactsForm profile={props.profile}/>
                    }
                </div>
            </div>
        </div>
    );
};
