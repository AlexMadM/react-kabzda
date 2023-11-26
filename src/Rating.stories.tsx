import type {Meta} from '@storybook/react';

import Rating from './Rating';

const meta: Meta<typeof Rating> = {
    component: Rating,
};

export default meta;

export const EmptyStars = () => {
    return (<>
            <Rating value={0} onClick={x => x}/>
            <Rating value={1} onClick={x => x}/>
            <Rating value={2} onClick={x => x}/>
            <Rating value={3} onClick={x => x}/>
            <Rating value={4} onClick={x => x}/>
        </>
    )
}