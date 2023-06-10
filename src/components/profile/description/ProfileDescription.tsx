import React from 'react';
import robot from './../../../assets/images/robot.png';
import {UserProfileResponseType} from "../../../types/types";

type PropsType = {
    profile: UserProfileResponseType;
}
export const ProfileDescription = (props: PropsType) => {
    return (
        <div>
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
                </div>
                {/*<img src={robot} style={{width: '64px', height: '64px'}} alt={'robot_avatar_image'}/>*/}
            </div>
        </div>
    );
};
