import { BossDifficulty } from "../enum/BossDifficulty.enum";

export interface IBoss {
    name: string;
    cost: number;
    difficulty: BossDifficulty;
    iconSrc? :string;
    id: string;
}