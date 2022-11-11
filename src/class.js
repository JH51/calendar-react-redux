Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    var dayOfYear = ((today - onejan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
};

class Calendar {
    //do something with the data here
    constructor(data) {
        // this.name = 'GENERIC CALENDAR';
        this.events = [];
        this.minWeek = Infinity;
        this.maxWeek = -Infinity;
        for (const key in data) {
            for (const calendarevent of data[key]) {
                const newEvent = new Event(calendarevent);
                if (newEvent.week < this.minWeek)
                    this.minWeek = newEvent.week;
                if (newEvent.week > this.maxWeek)
                    this.maxWeek = newEvent.week;
                this.events.push(newEvent);
            }
        }
    }
    // getLength() {
    //     return this.events.length;
    // }
}

class Year {

}

class Month {

}

class Week {
    constructor(number) {
        this.number = number;
        this.days = [];
        this.addDay = (name) => {
            const day = new Day(name);
            this.days.push(day);
        }
    }
}

class Day {
    constructor(name) {
        this.name = name;
        this.date = new Date(name);
        this.week = this.date.getWeek();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.weekday = this.date.getDay() % 7;
        this.events = [];
        this.addEvent = (eventData) => {
            this.events.push(new Event(eventData));
        }
        this.orderEvents = () => {
            //go through events and sort them by start and end time
        }
    }
}

class Event {
    constructor(data) {
        this.title = data.summary;
        this.description = data.description;
        this.start = new Date(data.start.dateTime);
        this.startTime = `${this.start.getHours()}:${(this.start.getMinutes() < 10) ? this.start.getMinutes() + '0': this.start.getMinutes()}`;
        this.end = new Date(data.end.dateTime);
        this.endTime = `${this.end.getHours()}:${(this.end.getMinutes() < 10) ? '0' + this.end.getMinutes(): this.end.getMinutes()}`;
        this.year = this.start.getFullYear();
        this.month = this.start.getMonth();
        this.week = this.start.getWeek();
        this.weekday = this.start.getDay();
        this.day = this.start.getDate();
        this.location = data.location;
        this.link = data.htmlLink;
    }
}

const monthsFull = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

export { Calendar, Year, Month, Week, Day, Event, monthsFull };