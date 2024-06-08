import React from "react";

const ScheduleComponent = (props) => {

    return(
        <div className=''>

            <div className='schedule-day'>
                <p>{props?.dayOfWeek}</p>
            </div>
            <div className='schedule-room'>
                <p>Кабінет {props?.office}</p>
            </div>

            <div className='schedule-subcomponent'>
                {
                    props.data.map(item => {
                        return(
                            <div>
                                {}
                            </div>
                        )
                    })
                }
            </div>
            <div style={{
                borderTop: '1.5px solid black',
                marginTop: '54px',
                borderColor: '#23AB7D'
            }} />
        </div>
    )
}
export default ScheduleComponent;
