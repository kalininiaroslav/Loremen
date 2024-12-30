const moment = require('moment-timezone');

const timeZoneMappings = {
    'Zulu': 'Etc/UTC'
};

function parseDateInTimeZone(dateString, timeZoneLabel) {
    const timeZone = timeZoneMappings[timeZoneLabel] || timeZoneLabel;
    return moment.tz(dateString, timeZone);
}

const date = parseDateInTimeZone('2024-06-22T12:00:00', 'Zulu');
console.log(date.format()); // Outputs the date in UTC
