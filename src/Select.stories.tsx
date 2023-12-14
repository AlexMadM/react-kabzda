import type {Meta} from '@storybook/react';

import Select, {RatingValueType} from './Rating';
import {useState} from "react";

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;

// export const SelectBase =()=> <Select value={'1'} onChange={action('adsfasdf')} items={[
//     {value"1", title:'minsk'},
//     {value"2", title:'minsk'},
//     {value"3", title:'minsk'},
//     {value"4", title:'minsk'},
// ]}/>