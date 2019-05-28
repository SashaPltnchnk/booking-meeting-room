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
        title: 'must',
        start: new Date(2019, 4, 28, 10, 0, 0),
        end: new Date(2019, 4, 28, 11, 0, 0),
      },
      {
        title: 'do',
        start: new Date(2019, 4, 28, 11, 0, 0),
        end: new Date(2019, 4, 28, 12, 0, 0),
      },
      {
        title: 'it',
        start: new Date(2019, 4, 29, 12, 0, 0),
        end: new Date(2019, 4, 29, 13, 0, 0),
      },
      {
        title: 'betterrrrrr',
        start: new Date(2019, 4, 29, 13, 0, 0),
        end: new Date(2019, 4, 29, 14, 0, 0),
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