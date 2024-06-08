import React, {useEffect, useState} from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import './procedureRooms.css';
import DropdownComponent from "../../components/DropdownComponent";
import useFetch from "../../hooks/useFetch";

const ProcedureRooms = () => {
    const {data, loading, error, fetchData} = useFetch('http://localhost:8081/api/v1/Clinic-name/procedure/all', {fetchOnMount:true})
    const {data:procedureNames} = useFetch('http://localhost:8081/api/v1/Clinic-name/procedure/all')
    const {data:offices} = useFetch('http://localhost:8081/api/v1/Clinic-name/procedure/all')


    function renderProcedures(){
        return procedureNames?.map(item => {
            return item.procedureName
        })??[]
    }

    function renderCabinet(){
        return [...new Set(offices?.map(item => {
            return item.office
        }).sort((a, b) => Number(a) - Number(b)))] ?? []
    }
    return(
        <div className='ProcedureRooms'>
            <Header/>
            <div className='ProcedureRooms-first-block'>
                <div className='ProcedureRooms-first-block-blur bg-darkBlue70'>
                    <h2 className='Display-1 tx-white'>Розклад процедур</h2>
                </div>
            </div>
            <div className='ProcedureRooms-second-block'>
                <div className='ProcedureRooms-second-block-bg bg-white'>
                    <div className='ProcedureRooms-second-block-search'>
                        <div className='ProcedureRooms-second-block-search-1'>
                            <DropdownComponent
                                Toggle='Виберіть процедуру'
                                Item={renderProcedures()}
                                onItemSelected={(selectedProcedure) => {
                                    console.log(selectedProcedure)
                                    fetchData(`http://localhost:8081/api/v1/Clinic-name/procedure/search?name=` + selectedProcedure);
                                }}
                            />
                        </div>
                        <div className='ProcedureRooms-second-block-search-2'>
                            <DropdownComponent
                                Toggle='Виберіть кабінет'
                                Item={renderCabinet()}
                                onItemSelected={(selectedOffice) => {
                                    console.log(selectedOffice)
                                    fetchData(`http://localhost:8081/api/v1/Clinic-name/procedure/search?office=` + selectedOffice);
                                }}
                            />
                        </div>
                    </div>
                    <div style={{
                        borderTop: '1.5px solid black',
                        marginTop: '54px',
                        borderColor: '#23AB7D'
                    }}/>
                    <div className='Schedule-container'>
                        {
                            data?.map(item => {
                                return (
                                    <div className='sch-con-data Body2'>
                                        <div className='sch-con-data-title'>
                                            <p className='Caption'>
                                                {item.procedureDate[0] + '.' + item.procedureDate[1] + '.' + item.procedureDate[2]}
                                            </p>
                                            <p className='sch-con-data-off '>
                                                Кабінет {item.office}
                                            </p>
                                        </div>
                                        <div className='sch-con-data-inf'>
                                            <div className='sch-con-data-inf-sub'>
                                                <p className='text tx-green'>
                                                    Назва процедури:
                                                </p>
                                                <p>
                                                    {item.procedureName}
                                                </p>
                                            </div>
                                            <div className='sch-con-data-inf-sub'>
                                                <p className='text tx-green'>
                                                    Початок:
                                                </p>
                                                <p>
                                                    {item.startTime[0] + ':' + (item.startTime[1] === 0 ? '00' : item.startTime[1])}
                                                </p>
                                            </div>
                                            <div className='sch-con-data-inf-sub'>
                                                <p className='text tx-green'>
                                                    Кінець:
                                                </p>
                                                <p>
                                                    {item.endTime[0] + ':' + (item.endTime[1] === 0 ? '00' : item.endTime[1])}
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
    )
}
export default ProcedureRooms;