import { useState, FormEvent } from 'react'

const useBossPartySize = (onPartySizeChangeHandler: Function) => {


    const onInputChange = (value: number) => {
        onPartySizeChangeHandler(value);
    }

    return {
        onInputChange
    }
}

export default useBossPartySize;
