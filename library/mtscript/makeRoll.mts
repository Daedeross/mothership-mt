[h: target = json.get(macro.args, 0)]
[h: mode = json.get(macro.args, 1)]
[h: modeString = if(mode == "A", "<span style='color:green'>[+]</span>", if(mode == "-", "<span style='color:red'>[-]</span>", ""))]
[h: stat = json.get(macro.args, 2)]
[h: bonus = json.get(macro.args, 3)]
[h: targets = json.get(macro.args, 4)]

[h: id = json.get(macro.args, 5)]
[h, if(findToken(id) == ""), code: {
	[h: name = "Someone "]
};{
	[h: owns = isOwner(player.getName(), id)]
	[h, if(isGM() || owns), code: {
		[h: name = ""]
	}; {
		[h: name = getName(id) + " "]
	}]
}]

[h: die1 = roll(1, 10) - 1]
[h: die2 = roll(1, 10) - 1]
[h: result1 = die1 * 10 + die2]
[h: critical1 = die1 == die2]
[h: success1 = result1 < 90 && result1 < (target + bonus)]
[h: quality1 = if(success1, if(critical1, 0, 1), if(critical1, 3, 2))]
[h: useNew = false]

[h, if(mode != ""), code: {
	[h: die3 = roll(1, 10) - 1]
	[h: die4 = roll(1, 10) - 1]
	[h: result2 = die3 * 10 + die4]
	[h: critical2 = die3 == die4]
	[h: success2 = result2 < 90 && result2 < (target + bonus)]
	[h: quality2 = if(success2, if(critical2, 0, 1), if(critical2, 3, 2))]
	[h: newBetter = (quality2 < quality1) || ((quality1 == quality2) && result2 < result1)]
	[h: useNew = if(mode == "A", newBetter, !newBetter)]
	[h, if(useNew), code: {
		[h: critical = critical2]
		[h: success = success2]
		[h: resultText = strformat("<span style='color:white;background-color:gray'>&nbsp;<strike>%{die1}%{die2}</strike>&nbsp;<b>%{die3}%{die4}</b>&nbsp;</span>")]
	}; {
		[h: critical = critical1]
		[h: success = success1]
		[h: resultText = strformat("<span style='color:white;background-color:gray'>&nbsp;<b>%{die1}%{die2}</b>&nbsp;<strike>%{die3}%{die4}</strike>&nbsp;</span>")]
	}]
};{
	[h: critical = critical1]
	[h: success = success1]
	[h: resultText = strformat("<span style='color:white;background-color:gray'>&nbsp;<b>%{die1}%{die2}</b> </span>")]
}]

[h: critText = if(critical, "<b>critical</b> ", "")]
[h: resultColor = if(success, "#0000ff", "#ff0000")]
[h: successText = if(success, "success", "failure")]
[h: statStart = lower(substring(stat, 0, 1))]
[h: article = if(statStart == "a" || statStart == "e" || statStart == "i" || statStart == "o" || statStart == "u", "an", "a")]
[h: statText = if(stat == "", "", strformat("<b>%s</b> ", upper(stat)))]
[h: targetText = if(bonus == 0, target, strformat("%d (%d+%d)", target+bonus, target, bonus))]
[h: text = strformat("%{name}attempts %{article} %{statText}roll and gets a %{resultText}&nbsp;vs <b>%{targetText}</b>.<br><span style='color:%{resultColor}'>A %{critText}%{successText}</span>")]
[h: macro.return = text]