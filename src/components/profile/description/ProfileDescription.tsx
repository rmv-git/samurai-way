import React from 'react';
import robot from './../../../assets/images/robot.png';
import {UserProfileResponseType} from "../../../types/types";
import {ProfileStatusWithHooks} from "./status/ProfileStatusWithHooks";

type PropsType = {
    profile: UserProfileResponseType;
    status: string;
    updateUserStatus: (value: string) => void;
    error: string[];
}
export const ProfileDescription = (props: PropsType) => {
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
                    Contacts:
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.vk}</div>
                </div>
                <div>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    );
};
