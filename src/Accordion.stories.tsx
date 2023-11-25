// Button.stories.ts|tsx

import type { Meta } from '@storybook/react';

import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

export const Collapsed =()=>{
    return <div>collapsed</div>
}