[h, if(json.contains(macro.args, "id")), CODE: {
	[id = json.get(macro.args, "id")]
	[id = if(length(id) == 32, id, currentToken())]
};{
	[id = currentToken()]
}]
[h: names = json.get(macro.args, "names")]
[h: macro.return = "{}"]
[h, foreach(name, names), CODE: {
	[macro.return = json.set(macro.return, name, getProperty(name, id))]
}]