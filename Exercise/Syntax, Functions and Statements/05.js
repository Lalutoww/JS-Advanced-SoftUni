function timeToWalk(stepsNeeded,stepsInMeters,studentSpeed){

    const distanceInMeters = (stepsInMeters * stepsNeeded);
    const speedInMetersPerSecond = studentSpeed / 3.6;
    const totalTime = distanceInMeters / speedInMetersPerSecond;
    const rest = Math.floor(distanceInMeters / 500);

    const minutes = Math.floor(totalTime/60);
    const seconds = Math.round(totalTime - (minutes * 60));
    const hours = Math.floor(totalTime / 3600);
    console.log(`${(hours < 10 ? "0" : "")}${hours}:${(minutes + rest < 10 ? "0" : "")}${(minutes + rest)}:${(seconds < 10 ? "0" : "")}${seconds}`);
}
timeToWalk(4000, 0.60, 5);
//00:32:48
timeToWalk(2564, 0.70, 5.5);
//00:22:35