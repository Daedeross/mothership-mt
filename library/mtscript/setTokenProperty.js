const args = MTScript.getMTScriptCallingArgs();
const token = MapTool.tokens.getTokenByID(args[0]);
const propName = args[1];
const propValue = args[2];
MapTool.chat.broadcast("foo");
switch (propName) {
    case 'name' :
        token.setName(propValue);
        break;
    case 'notes':
        token.setNotes(propValue);
        break;
    default:
        token.setProperty(propName, propValue);
}