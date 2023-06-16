import { has, toLower } from 'lodash';

import { CharacterDto } from '../dto/character.model';
import { RootState } from './store';
import { selectDetails } from '../features/shared/personal-details/personal-details-slice';
import { CharacterType, selectId, selectKind } from './token-slice';
import { selectConditionsDto } from '../features/shared/conditions/conditions-slices';
import { selectSkillsDto } from '../features/pc/skills/skills-slice';
import { selectStatsDto } from '../features/shared/stat/stats-slice';
import { selectArmorsDto } from '../features/shared/armor/armor-slice';
import { selectWeaponsDto } from '../features/shared/weapon/weapon-slice';

const LINKER_ID = 'linker';
const LIB_NAMESPACE = 'daedeross.mothership';
export type MacroOutput = 'self'
    | 'gm'
    | 'all'
    | 'none'
    | 'gm-self'
    | 'self'
    | 'list';

export function makeMacroLink(macroName: string, display: MacroOutput, args: any, target: string, lib_name: string = LIB_NAMESPACE, cachelib = false) {
    if (display == 'list' && !has(args, 'mlOutputList')) {
        throw new Error('args must contain "mlOutputList" if output is to be sent to "list".')
    }

    var stringArgs;
    if (typeof args === 'object' && args !== null) {
        stringArgs = JSON.stringify(args);
    }
    else {
        stringArgs = args;
    }
    
    return `macro://${macroName}@lib:${lib_name}/${display}/${(target || 'impersonated')}?${cachelib ? '' : 'cachelib=false&'}${encodeURIComponent(stringArgs)}`;
}

export const executeMacroLink = (macroName: string, display: MacroOutput, args: any, target: string, lib_name: string = LIB_NAMESPACE, cachelib = false) => {
    document.getElementById(LINKER_ID)?.setAttribute('href', makeMacroLink(macroName, display, args, target, lib_name, cachelib));
    document.getElementById(LINKER_ID)?.click();
}

export const executeSilentMacro = (macroName: string, args: any, target: string) => {
    // console.log("FOO");
    executeMacroLink(macroName, 'none', args, target);
}

export const extractDto = (state: RootState): CharacterDto => ({
    id: selectId(state),
    kind: toLower(CharacterType[selectKind(state)]),
    ...selectDetails(state),
    ...selectConditionsDto(state),
    ...selectStatsDto(state),
    ...selectSkillsDto(state),
    ...selectArmorsDto(state),
    ...selectWeaponsDto(state),
    equipment: [],
    credits: 0,
    description: '',
    patch: '',
    trinket: '',
})