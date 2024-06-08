import React from "react";

const ScheduleSubcomponent = (props) => {
    return(
        <div>
            <div className='-static'>
                <p>Години прийому</p>
            </div>
            <div>
                <p>{props?.time}</p>
            </div>
            <div className='-static'>
                <p>Лікар</p>
            </div>
            <div>
                <p>{props?.doctor}</p>
            </div>
        </div>

    )
}
export default ScheduleSubcomponent;