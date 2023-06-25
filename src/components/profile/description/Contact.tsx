import React from "react";

type ContactType = {
    contactTitle: string,
    contactValue: string | null,
}
export const Contact = (props: ContactType) => {
    return (
        <div>
            <b>{props.contactTitle}: </b>{props.contactValue}
        </div>
    );
};
