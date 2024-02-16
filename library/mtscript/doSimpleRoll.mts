[h: macroArgs = trim(decode(replace(macro.args, "cachelib=false ;", "")))]
[h, if(json.type(macroArgs) == "OBJECT"), CODE: {
    [h: expression = json.get(macroArgs, "expression")]
};{
    [h: expression = macroArgs]
}]
[h: result = eval(string(expression))]
[h: assert(isNumber(result), "invalid dice expression")]
[r: strformat("Rolls <b>%{expression}</b> and gets: <b title='%{expression}'>%{result}</b>")]
[g: strformat("('%{expression}' -> %{result})"))]
