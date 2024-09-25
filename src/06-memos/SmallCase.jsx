import { memo } from 'react';

export const SmallCase = memo (( {counter} ) => {

    return (
        <small>{ counter }</small>
    )
});