import { FormEvent, useState } from "react";

const useBossPanel = () => {

    const [mesoSum, setMesoSum] = useState<number>(0);

    const handleInputCheck = (event: FormEvent<HTMLInputElement>, cost: number) => {
        const isChecked = (event.target as HTMLInputElement).checked;

        if (isChecked) {
            setMesoSum(mesoSum + cost);
            return;
        }

        setMesoSum(mesoSum - cost);
    }

    return {
        mesoSum,
        handleInputCheck
    }
}

export default useBossPanel;