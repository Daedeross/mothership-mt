import { RollMode } from "../features/shared/roll/roll-mode-slice";

export enum CharacterClass {
    Marine = "Marine",
    Android = "Android",
    Scientist = "Scientist",
    Teamster = "Teamster",
}

type CharacterClassName = `${CharacterClass}`;

export enum RangeBand {
    Adjacent = "Adjacent",
    Close = "Close",
    Long = "Long",
    OutOfRange = "OutOfRange",
}

type RangeBandName = `${RangeBand}`;

export interface Armor {
    id: number;
    name: string;
    cost: number;
    ap: number;
    o2supply?: number;
    speedpenalty?: boolean;
    attributes: Array<string>
}

export interface Equipment {
    id: number;
    name: string;
    cost: number;
    description: string | null;
}

export interface Weapon {
    id: number;
    name: string;
    model?: string;
    cost: number;
    range: RangeBand;
    damage: string;
    wounddamage: string;
    shots: number;
    remainingammo: number;
    wound: string;
    special: string | Array<string>;
}

export interface CharacterDto {
    id: string;
    kind: string;
    age: number;
    armors: Array<Armor>;
    body?: number;
    class?: CharacterClass;
    combat: number;
    credits: number;
    currentarmor: number;
    currenthealth: number;
    currentstress: number;
    currentweapon: number;
    currentwounds: number;
    description: string;
    equipment: Array<Equipment>;
    expertskills: Array<string>;
    fear?: number;
    highscore?: number;
    intellect?: number;
    masterskills: Array<string>;
    maxhealth: number;
    maxwounds: number;
    minimumstress: number;
    name: string;
    notes: string;
    patch: string;
    player?: string;
    pronouns: string;
    sanity?: number;
    speed?: number;
    strength?: number;
    trainedskills: Array<string>;
    traumaresponse: string;
    trinket: string;
    weapons: Array<Weapon>;
    activeconditions?: Array<string>;
}