import React from 'react';

const Time = () => {
    const timeButtonStyle = {
        display: 'flex',
        flexDirection: 'column'
    }
    return ( 
        <>
            <div style={timeButtonStyle}>
                <button>9:00</button>
                <button>10:00</button>
                <button>11:00</button>
                <button>12:00</button>
                <button>13:00</button>
            </div>
            <div style={timeButtonStyle}>
                <button>14:00</button>
                <button>15:00</button>
                <button>16:00</button>
                <button>17:00</button>
                <button>18:00</button>
            </div>
        </>
     );
}
 
export default Time;