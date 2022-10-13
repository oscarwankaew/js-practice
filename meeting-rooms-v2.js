function meetingRooms(intervals) {
  if (intervals.length < 2) {
    return intervals.length;
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let roomTime = [intervals[0][1]];

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = [...intervals[i]];
    let earliest = Math.min(...roomTime);

    if (start < earliest) {
      roomTime.push(end);
    } else {
      roomTime[roomTime.indexOf(earliest)] = end;
    }
  }

  return roomTime.length;
}

console.log(
  meetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
