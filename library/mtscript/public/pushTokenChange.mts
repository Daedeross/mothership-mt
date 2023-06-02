[h, if(json.type(macro.args) == "OBJECT"), CODE: {
	[lastId = json.get(macro.args, "tokenId")]
	[refresh = json.get(macro.args, "refresh") == "true"]
};{
	[lastId = ""]
	[refresh = false]
}]
[h: ids = getSelected("json")]
[h, if(json.length(ids) == 1), CODE: {
	[h: id = json.get(ids, 0)]
	[h, if(id == lastId && !refresh): return(0)]
	[h: owns = isGM() || isOwner(getPlayerName(), id)]
	[h: propType = getPropertyType(id)]
	[h: validType = propType == "PC" || (propType == "Basic" && isGM())]
	[h, if(! (owns && validType)): return(0)]
	[r, frame5("Character Sheet"), CODE: {
		[r, macro("sheet_wrapper.html@this"): json.set("", "tokenId", id)]
	}]
}]
