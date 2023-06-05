
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
    attributes: Array<string>
}

export interface Equipment {
    id: number;
    name: string;
    cost: number;
    description: string | null;
}

export interface WeaponDto  {
    id: number;
    name: string;
    cost: number;
    range: RangeBand;
    damage: string;
    wounds: number;
    shots: number;
    remainingammo: 0;
    wound: string;
    woundadvantage: boolean;
    special: string;
}

export interface CharacterDto {
    kind: string;
    age: number;
    armors: Array<Armor>;
    body: number;
    class: CharacterClass;
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
    fear: number;
    highscore: number;
    intellect: number;
    masterskills: Array<string>;
    maxhealth: number;
    maxwounds: number;
    minimumstress: number;
    name: string;
    notes: string;
    patch: string;
    player: string;
    pronouns: string;
    sanity: number;
    speed: number;
    strength: number;
    trainedskills: Array<string>;
    traumaresponse: string;
    trinket: string;
    weapons: Array<WeaponDto>;
}