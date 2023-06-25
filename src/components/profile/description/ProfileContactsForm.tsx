import React from "react";
import {UserProfileResponseType} from "../../../types/types";
import {Contact} from "./Contact";


type ProfileInfoType = {
    profile: UserProfileResponseType;
}

export const ProfileContactsForm = (props: ProfileInfoType) => {
    return (
        <div>
            <b>Contacts:</b>{Object.entries(props.profile.contacts).map((keyValues) => {
                return (
                    <Contact key={keyValues[0]}
                             contactTitle={keyValues[0]}
                             contactValue={keyValues[1]}/>
                )
            }
        )}
        </div>
    );
};
