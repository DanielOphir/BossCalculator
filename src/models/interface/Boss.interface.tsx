import { BossDifficulty } from "../enum/BossDifficulty.enum";

export interface IBoss {
    name: string;
    costs: { [key: string]: number };
    difficulties: BossDifficulty[];
    iconSrc?: string;
    id: string;
}