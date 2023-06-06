[h: ids = getSelected("json")]
[h, if(json.length(ids) == 1), CODE: {
	[h: id = json.get(ids, 0)]
	[h: owns = isGM() || isOwner(getPlayerName(), id)]
	[h: propType = getPropertyType(id)]
	[h: validType = propType == "PC" || (propType == "Basic" && isGM())]
	[h, if(! (owns && validType)): return(0)]
	[h, macro('pushTokenChange@this'): id]
}]
