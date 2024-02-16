[h: numArgs = argCount()]
[h, if(numArgs == 0), code: {
    [h: offset = -1]
    [h: spread = 2147483647]
};{
    [h, if(numArgs == 1), code: {
        [h: offset = -1]
        [h: spread = arg(0) + 1]
    }; {
        [h: offset = arg(0) - 1]
        [h: spread = arg(1) - arg(0)]
    }]
}]
[r: macro.return = roll(1, spread) + offset]