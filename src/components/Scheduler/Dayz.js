import React from 'react';
import Dayz from 'dayz';
// could also import the sass if you have a loader at dayz/dayz.scss
import 'dayz/dist/styles.css';
import moment from 'moment';
// import range from 'moment-range';

// would come from a network request in a "real" app
const EVENTS = new Dayz.EventsCollection([
    { content: 'A short event',
      range: moment.range( date.clone(),
                           date.clone().add(1, 'day') ) },
    { content: 'Two Hours ~ 8-10',
      range: moment.range( date.clone().hour(8),
                           date.clone().hour(10) ) },
    { content: "A Longer Event",
      range: moment.range( date.clone().subtract(2,'days'),
                           date.clone().add(8,'days') ) }
]);

class DayzComponent extends React.PureComponent {

    render() {
        return <Dayz
                   display='week'
                   date={this.props.date}
                   events={EVENTS}
               />
    }

}

export default DayzComponent;