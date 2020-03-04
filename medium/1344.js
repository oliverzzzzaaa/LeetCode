var angleClock = function(hour, minutes) {
    let htoM = hourPos(hour, minutes) - minutePos(minutes)
    if (htoM < 0) {
        htoM = htoM + 360;
    }
    let mtoH = minutePos(minutes) - hourPos(hour, minutes)
    if (mtoH < 0) {mtoH = mtoH + 360}
    if (mtoH > htoM) {return htoM}
    return mtoH
};

const hourPos = function(hour, minutes) {
    return ((hour % 12) * 30 + (minutes * 30 / 60))
}

const minutePos = function(minutes) {
    return minutes * 6
}

console.log(angleClock(12, 1))

