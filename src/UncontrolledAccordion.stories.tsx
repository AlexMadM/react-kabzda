import type { Meta } from '@storybook/react';

import UncontrolledAccordion from './UncontrolledAccordion';

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;

export const Collapsed =()=>{
    return <div>collapsed</div>
}