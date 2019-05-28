import moment from "moment";

export default [
    //   {
    //     start: new Date(),
    //     end: new Date(moment().add(1, "days")),
    //     title: "Some title"
    //   },
      {
        title: 'you',
        start: new Date(2019, 4, 28, 9, 0, 0),
        end: new Date(2019, 4, 28, 10, 0, 0),
      },
      {
        title: 'can',
        start: new Date(2019, 4, 28, 10, 0, 0),
        end: new Date(2019, 4, 28, 11, 0, 0),
      },
      {
        title: 'pass',
        start: new Date(2019, 4, 28, 11, 0, 0),
        end: new Date(2019, 4, 28, 12, 0, 0),
      },
    //   {
    //     title: 'Today',
    //     start: new Date(new Date().setHours(new Date().getHours() - 2)),
    //     end: new Date(new Date().setHours(new Date().getHours() + 3)),
    //   },
    // {
    //     title: 'test',
    //     start: moment().add(1, 'days').subtract(5, 'hours').toDate(),
    //     end: moment().add(1, 'days').subtract(4, 'hours').toDate(),
    //     allDay: false
    //   },
      {
        title: 'straday everyday',
        start: moment().toDate(),
        end: moment().toDate(),
        allDay: true
      }
    ]