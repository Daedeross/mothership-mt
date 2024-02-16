[h: propName = arg(0)]
[h: propValue = arg(1)]
[H: id = arg(2)]
[h, if( propName == 'name' ), CODE: {
    [h, setName(propValue, id)]
    [h, return(0)]
}]
[h, if( propName == 'notes' ), CODE: {
    [h, setNotes(propValue, id)]
    [h, return(0)]
}]
[h: setProperty(propName, propValue, id)]
[h, if( lower(propName) == 'health' || lower(propName) == 'currenthealth' ), CODE: {
    [h: cur = number(getProperty('CurrentHealth'))]
    [h: max = number(getProperty('MaxHealth'))]
    [h: pct = cur / max]
    [h: setBar('Health', pct, id)]
}]
[h, if( lower(propName) == 'wounds' || lower(propName) == 'currentwounds' ), CODE: {
    [h: cur = number(getProperty('CurrentWounds'))]
    [h: pct = cur / 5.0]
    [h: setBar('Wounds', pct, id)]
}]
