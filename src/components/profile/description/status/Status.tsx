import React from 'react';

type PropsType = {
    status: string;
}
export const Status = (props: PropsType) => {
    return (
        <div>
            {props.status}
        </div>
    );
};

