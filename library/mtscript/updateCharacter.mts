[h: macroArgs = trim(decode(replace(macro.args, "cachelib=false ;", "")))]
[h, foreach(operation, macroArgs, ""), CODE: {
    [h: opName = json.get(operation, "op")]
    [h, if(opName == "replace"), CODE: {
        [h: propName = substring(json.get(operation, "path"), 1)]
        [h: propValue = json.get(operation, "value")]
        [h: mothership.setProperty(propName, propValue, currentToken())]
    }] 
}]