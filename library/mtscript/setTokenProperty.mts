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
