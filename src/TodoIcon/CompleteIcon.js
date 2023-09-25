import React from "react";
import {TodoIcon} from './';

function CompleteIcon({completed, onComplete}){
    return (
        <TodoIcon onClick={onComplete} type='check' color={completed ? 'green':'darkblue'}/>
    )
}

export {CompleteIcon};