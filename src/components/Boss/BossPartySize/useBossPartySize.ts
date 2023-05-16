import { useState, FormEvent } from 'react'

const useBossPartySize = () => {

    const [checked, setChecked] = useState("1");

    const onInputChange = (event: FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value
        setChecked(value);
    }

    return {
        checked,
        onInputChange
    }
}

export default useBossPartySize;
