import "./App.css";
import React, { useState } from "react";
import CreatingTrip from "./Components/CreatingTrip";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ViewingAndDeletingTrip from "./Components/ViewingAndDeletingTrip";
import moment from 'moment'

function App() {
  const [place, setPlace] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState(false);
  const [allTrips, setAllTrips] = useState(false);

  const onClickOnCreateTrip = () => {
    const startDateFormat = moment(startDate['$d']).format('yyyy-MM-DD')
    const endDateFormat = moment(endDate['$d']).format('yyyy-MM-DD')
    console.log(startDateFormat, startDate['$d'], moment(startDateFormat).isBefore(endDateFormat))
    if (
      place === "" ||
      title === "" ||
      description === "" ||
      startDate === '' ||
      endDate === ''
    ) {
      setError('Fill the required field');
    }else if(!moment(startDateFormat).isBefore(endDateFormat)){
      setError('Please Select End Date next dates to Start Date')
    } else {
      setError('')
      const emptyTripDetail = {
        place: place,
        title: title,
        description: description,
        startDate: startDate['$d'],
        endDate: endDate['$d'],
      };
      const tripsData = [];
      tripsData.push(...trips, emptyTripDetail);
      setTrips(tripsData);
      setPlace("");
      setTitle("");
      setStartDate('')
      setEndDate('')
      setdescription("");
    }
  };

  const onClickOnDelete = (index) => {
    if(trips.length === 1){
      setAllTrips(false)
      const data = trips.filter((datas,indexInside) => indexInside !== index)
      setTrips(data)
    }else{
      const data = trips.filter((datas,indexInside) => indexInside !== index)
      setTrips(data)
    }
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {allTrips ? (
          <ViewingAndDeletingTrip trips={trips} onClickOnDelete={onClickOnDelete} setAllTrips={setAllTrips} />
        ) : (
          <CreatingTrip
            place={place}
            setPlace={setPlace}
            title={title}
            setTitle={setTitle}
            onClickOnCreateTrip={onClickOnCreateTrip}
            description={description}
            setdescription={setdescription}
            error={error}
            setAllTrips={setAllTrips}
            trips={trips}
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
          />
        )}
      </div>
    </LocalizationProvider>
  );
}

export default App;
