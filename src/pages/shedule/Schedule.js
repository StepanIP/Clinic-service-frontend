import React, {useEffect, useState} from "react";
import './schedule.css';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import DropdownComponent from "../../components/DropdownComponent";
import date from '../../data/date.json';
import useFetch from "../../hooks/useFetch";
const Schedule = () => {
    const [selectDate, setSelectDate] = useState('')
    const {data, loading, error, fetchData} = useFetch('v1/Clinic-name/schedule/all', {fetchOnMount:true})

    console.log(data)
    return(
        <div className='Schedule'>
            <Header/>
            <div className='Schedule-first-block'>
                <div className='Schedule-first-block-blur bg-darkBlue70'>
                    <h2 className='Display-1 tx-white'>Розклад</h2>
                </div>
            </div>
            <div className='Schedule-second-block'>
                <div className='Schedule-second-block-bg bg-white'>
                    <div className='Schedule-second-block-search'>
                        <div className='Schedule-second-block-search-1'>
                            <DropdownComponent
                                Toggle='Виберіть день'
                                Item={date.dates}
                                onItemSelected={(selectedItemDate) => {
                                    fetchData('http://localhost:8081/api/v1/Clinic-name/schedule/byDay?day=' + selectedItemDate)
                                }}
                            />
                        </div>
                    </div>
                    <div style={{
                        borderTop: '1.5px solid black',
                        marginTop: '54px',
                        borderColor: '#23AB7D'
                    }} />
                    <div className='Schedule-container'>
                        {
                            data?.map(item =>{
                                return(
                                    <div className='sch-con-data Body2'>
                                        <div className='sch-con-data-title'>
                                            <p className='Caption'>
                                                {item.dayOfWeek}
                                            </p>
                                            <p className='sch-con-data-off '>
                                                Кабінет {item.office}
                                            </p>
                                        </div>
                                        <div className='sch-con-data-inf'>
                                            <div className='sch-con-data-inf-sub'>
                                                <p className='text tx-green'>
                                                    Години прийому
                                                </p>
                                                <p>
                                                    {item.appointmentTime}
                                                </p>
                                            </div>
                                            <div className='sch-con-data-inf-sub'>
                                                <p className='text tx-green'>
                                                    Лікар
                                                </p>
                                                <p>
                                                    {item.doctor.doctorName}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{
                                            borderTop: '1.5px solid black',
                                            marginTop: '54px',
                                            borderColor: '#23AB7D'
                                        }}/>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Schedule;