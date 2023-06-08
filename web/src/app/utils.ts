
const LIB_NAMESPACE = 'daedeross.mothership';

export function makeMacroLink(macroName: string, display: string, args: any, target: string, lib_name: string = LIB_NAMESPACE, cachelib = false) {
    var stringArgs;
    if (typeof args === 'object' && args !== null) {
        stringArgs = JSON.stringify(args);
    }
    else {
        stringArgs = args;
    }
    return `macro://${macroName}@lib:${lib_name}/${display}/${(target || 'impersonated')}?${cachelib ? '' : 'cachelib=false&'}${encodeURIComponent(stringArgs)}`;
}