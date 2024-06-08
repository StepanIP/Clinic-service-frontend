import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import './patients.css';
import Input from "../../components/Input";

const Patients = () => {

    return(
      <div className='Patients bg-lightF'>
          <Header/>
          <div className='Patients-first-block '>
              <div className='Patients-first-block-output bg-white'>

                  <div className='Patients-first-block-title Body2'>
                      <p className='Patients-first-block-title-one PIB'>
                          ПІБ
                      </p>
                      <p className='Patients-first-block-title-one Insurance'>
                          Страховка
                      </p>
                      <p className='Patients-first-block-title-one Email'>
                          Пошта
                      </p>
                      <p className='Patients-first-block-title-one Directions'>
                          Направлення
                      </p>
                      <p className='Patients-first-block-title-one Послуги'>
                          Послуги
                      </p>

                  </div>
                  <div style={{
                      borderTop: '1.5px solid black',
                      borderColor: '#E4F3ED'
                  }} />
                  <div className='Patients-first-block-input'>
                      <Input type='text' placeholder='www' width={190}/>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
    );
};
export default Patients;