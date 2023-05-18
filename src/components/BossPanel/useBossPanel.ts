import { useEffect, useState } from "react";
import { IBoss } from "../../models/interface/Boss.interface";

const useBossPanel = (bosses: IBoss[]) => {

    const [mesoSum, setMesoSum] = useState<number>(0);
    const [formattedBosses, setFormattedBosses] = useState<{ [key: string]: number }>({});

    const handleInputCheck = (isChecked: boolean, id:string, cost: number) => {
        if (isChecked) {
            setFormattedBosses({...formattedBosses, [id]:cost});
            return;
        }

        setFormattedBosses({...formattedBosses, [id]:0});
    }

    useEffect(() => {
        const formattedBosses = bosses.reduce((obj, boss) => ({ ...obj, [boss.id]: 0 }), {});
        setFormattedBosses(formattedBosses);
    }, [bosses]);

    useEffect(() => {
        setMesoSum(Math.floor(Object.values(formattedBosses).reduce((partialSum, a) => partialSum + a, 0)));
    }, [formattedBosses]);

    return {
        mesoSum,
        handleInputCheck
    }
}

export default useBossPanel;