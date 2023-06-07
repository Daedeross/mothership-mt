[h: numArgs = argCount()]
[h: assert(numArgs > 0, "requires at least 1 argument")]
[h: stat = arg(0)]
[h, if(numArgs > 1): mode = arg(1); mode = ""]
[h: assert(mode == "" || mode == "+" || mode == "-", "mode (arg(2)) must be '', '+', or '-'")]
[h, if(numArgs > 2): output = arg(2); output = "all"]
[h, if(numArgs > 3): id = arg(3); id = currentToken() ]
[h: target = getProperty(stat, id)]
[h: assert(isNumber(target), strformat("Stat '%s' not found on token.", stat))]
[h: target = number(target)]
[h: rollArgs = json.append("[]", target, mode, stat, output, id)]
[h, macro("makeRoll@this"): rollArgs]
[h: link = macroLinkText("showText@this", output, macro.return, id)]
[h: execLink(link)]