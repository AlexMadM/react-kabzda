import type {Meta} from '@storybook/react';

import Rating, {RatingValueType} from './Rating';
import {useState} from "react";
import OnOff from "./OnOff";

const meta: Meta<typeof OnOff> = {
    component: OnOff,
};

export default meta;

export const ModeChanging=()=>{
    const [value,setValue]=useState<boolean>(true)

    return <OnOff on={value} setOff={setValue}/>
}