function scheduleMeetings(meetingsList) {

    let meetings = {};

    for (const line of meetingsList) {
        let [day, name] = line.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

scheduleMeetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);

