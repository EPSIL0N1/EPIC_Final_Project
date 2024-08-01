import React, { useEffect, useState } from "react";
import './User_Calendar.css'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";
import { json, useParams } from "react-router-dom";
import { getDatesById, addDatesById } from "../services/PeriodDates";
import User_Nav from "./User_Nav";
import Lottie from 'lottie-react'
import womanAnimation from "../assets/animations/Woman_doing_yoga.json"
import { getPredictionsById } from "../services/PredictionService";


export default function User_Calendar() {

  const [events, setEvents] = useState([]);
  
  const { id } = useParams();

  const [preStartDate, setPreStartDate] = useState("");
  const [fRate, setFRate] = useState(0.0);
  const [dHighFer, setDHighFer] = useState("");
  const [cycle, setCycle] = useState(0);
  const [totalPain, setTotalPain] = useState(0);

  useEffect(() => {
    getAllDates();
  },[preStartDate]);

  function mygetDate(data, c)
  {
    let year = data[0];
    let month = "";
    let date = "";

    let month_temp = data[1];
    let date_temp = data[2];

    if (Number(month_temp[0]) === 0)
    {
        month = month_temp[1];
    }
    else{
        month = month_temp;
    }

    if(Number(date_temp[0] === 0))
    {
      date = date_temp[1];
    }
    else{
      date = date_temp[0] + date_temp[1];
    }

    if (c === "e")
    {
      date = String(Number(date) + 1);
    }

    let PeriodDate = year + "-" + month + "-" + date;
    return PeriodDate;
  }

  async function getAllDates() {

    let tempEvents = [];
    
    await getDatesById(id).then((res)=>{
      
      // let temp = [];
      for (let i = 0; i < res.data.length; i++)
      {
        let data = String(res.data[i].periodStart).split('-');
        let PeriodStart = mygetDate(data, "s");
        // console.log(PeriodStart);
        data = String(res.data[i].periodEnd).split('-');
        let PeriodEnd = mygetDate(data, "e");
        // console.log(PeriodEnd);

        tempEvents.push({
          title: "My Period Cycle 💖",
          allDay: true,
          start: new Date(PeriodStart),
          end: new Date(PeriodEnd),
          colorEvento:'#983A39',
        })

        // setEvents(tempEvents);  // <- Add Dates in this
        // console.log(events);
      }
      
    }).catch((err)=>{
      console.log(err);
    })

    await getPredictionsById(id).then((res)=>{
      
      setPreStartDate(res.data["nextMonthStartDate"]);
      setFRate(res.data["fertilityRate"]);
      setDHighFer(res.data["dateofHighFertility"])
      setCycle(res.data["averageCycleLength"]);
      setTotalPain(res.data["totalDaysofPain"]);

      // console.log(preStartDate)

      const newDate = new Date(preStartDate);
      newDate.setDate(newDate.getDate() + 5);

      tempEvents.push({
        title: "Next Predicted Period Cycle 🩸",
        allDay: true,
        start: new Date(preStartDate),
        end: new Date(newDate),
        colorEvento: '#d42522'
      })

      tempEvents.push({
        title: "High Fertility",
        allDay: true,
        start: new Date(dHighFer),
        end: new Date(dHighFer),
        colorEvento:'#009B77'
      })

    }).catch((err)=>{
      console.log(err);
    });

    setEvents(tempEvents);

  }

  const locales ={
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});


  const [newEvent, setNewEvent] = useState({
    periodStart: "",
    periodEnd: ""
  })

  // const [allEvents, setAllEvents] = useState(events);

  function AddDate()
  {
    
    // let ptemp = [];
    let pDate = String(newEvent.periodStart.getDate());
    if(pDate.length === 1)
      {
        pDate = '0' + pDate;
      }
    let pMonth = String(Number(newEvent.periodStart.getMonth()) + 1);
    if(pMonth.length === 1)
    {
      pMonth = '0' + pMonth;
    }
    let pYear = String(newEvent.periodStart.getFullYear());
    let pFinal = pYear + "-" + pMonth + "-" + pDate;
    
    let eDate = String(newEvent.periodEnd.getDate());
    if(eDate.length === 1)
      {
        eDate = '0' + eDate;
      }
    let eMonth = String(Number(newEvent.periodEnd.getMonth()) + 1);
    if(eMonth.length === 1)
      {
        eMonth = '0' + eMonth;
      }
    let eYear = String(newEvent.periodEnd.getFullYear());
    let eFinal = eYear + "-" + eMonth + "-" + eDate;

    // console.log(pFinal);
    // console.log(eFinal);
    
    addDatesById(id, {periodStart: pFinal, periodEnd: eFinal}).then((res)=>{
        // console.log(res);
        getAllDates();
    }).catch((err)=>{
      console.log(err);
    });
  
  }

  return (
    <>
    <User_Nav/>
    <div className="user-calendar-main-container">

      <div className="user-calendar-banner">
          <Lottie animationData={womanAnimation} className="user-cal-ani"/>
          <div className="user-banner-header">
          Track Your Cycle with Ease!
            <p className="user-banner-p">
            Mark your period dates and get - 

            Predictions for next periods Fertility insights Early health alerts

            Stay in control of your reproductive health!
            </p>
          </div>
      </div>
      
      <div className='calendar-container'>

      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" 
      eventPropGetter={(events) => {

        const backgroundColor = events.colorEvento ? events.colorEvento : 'blue';
        return { style: { backgroundColor} }

      }}/>
      
      <div className="cal-add-date">
        <div className="add-period-date">


          <div className="add-period-sub">
              <div className="add-period-date-heading">

                <i className="fa-regular fa-calendar"/>
                    Add Period Start Date
                    
              </div>
            <DatePicker placeholderText="Start Date" selected={newEvent.periodStart} onChange={(periodStart) => setNewEvent({...newEvent, periodStart})}/>
          </div>


        <div className="add-period-sub">
              <div className="add-period-date-heading">

                <i className="fa-regular fa-calendar"/>
                  Add Period End Date
              </div>

            <DatePicker placeholderText="End Date" selected={newEvent.periodEnd} onChange={(periodEnd) => setNewEvent({...newEvent, periodEnd})}/>
        </div>
        </div>
      </div>

      <div className="period-date-addButton">
        <div onClick={AddDate} className="Button-water-hover-effect"> <span>Add Date</span> <div className='wave'></div> </div>
       </div>

      </div>
      
      <div className="user-pred">
        <h1 className="user-pred-heading">
          Your Report 📈
        </h1>
        <div className="user-pred-sub">

          <div className="p-report">

          <i className="fa-solid fa-calendar-days"></i>
          <div className="p-report-sub">
            <h3 className="p-report-sub-heading">
              Next Period Start Date
            </h3>
            {preStartDate}
          </div>

          </div>

          <div className="p-report">

          <i className="fa-solid fa-droplet"></i>

          <div className="p-report-sub">
            <h3 className="p-report-sub-heading">
              Date of High Fertility
            </h3>
            {dHighFer}
          </div>

          </div>

          <div className="p-report">

          <i className="fa-solid fa-disease"></i>
          <div className="p-report-sub">
            <h3 className="p-report-sub-heading">
              Disease Prediction
            </h3>
            No disease predicted !
          </div>

          </div>

          <div className="p-report">

          <i className="fa-solid fa-heart"></i>

          <div className="p-report-sub">
            <h3 className="p-report-sub-heading">
              Fertility Rate
            </h3>
            {(fRate * 100).toFixed(0) + '%'}
          </div>

          </div>

          <div className="p-report">

          <i class="fa-solid fa-triangle-exclamation"></i>

          <div className="p-report-sub">
            <h3 className="p-report-sub-heading">
              Total Days of Pain
            </h3>
            {totalPain + " Days"}
          </div>

          </div>

          <div className="p-report">

          <i class="fa-solid fa-rotate-right"></i>

          <div className="p-report-sub">
            <h3 className="p-report-sub-heading">
              Average Cycle Length
            </h3>
            {cycle + " Days"}
          </div>

          </div>

        </div>
      </div>

    </div>
    </>
  )
}
