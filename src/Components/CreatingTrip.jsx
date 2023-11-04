import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const CreatingTrip = (props) => {
  const {onClickOnCreateTrip, place, setPlace, title, setTitle, description, setdescription, 
    error, setAllTrips, trips, setStartDate, startDate, endDate, setEndDate} = props
  
  return (
    <div style={{ marginTop: "24px" }}>
      <span>Create Your Trip</span> 
      <Grid
        container
        style={{
          justifyContent: "space-evenly",
          display: "flex",
          marginTop: "24px",
        }}
      >
        <Grid item lg={2}>
          <TextField
            label="Trip Place"
            style={{ marginTop: "24px" }}
            onChange={(e)=>setPlace(e.target.value)}
            value={place}
          />
        </Grid>
        <Grid item lg={2}>
          <TextField
            label="Title"
            style={{ marginTop: "24px" }}
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
          />
        </Grid>
        <Grid item lg={2}>
          <TextField
            label="Description"
            style={{ marginTop: "24px" }}
            onChange={(e)=>setdescription(e.target.value)}
            value={description}
          />
        </Grid>
        <Grid item lg={2} style={{ marginTop: "24px" }}>
          <MobileDatePicker
            label="Start Date"
            disablePast
            onChange={(date)=>setStartDate(date)}
            value={startDate}
            format="DD/MM/YYYY"
          />
        </Grid>
        <Grid item lg={2} style={{ marginTop: "24px" }}>
          <MobileDatePicker
            label="End Date"
            disablePast
            onChange={(date)=>setEndDate(date)}
            value={endDate}
            format="DD/MM/YYYY"
          />
        </Grid>
      </Grid>
      {error && <span style={{color: 'red'}}>{error} </span>}
      <Grid container style={{ marginTop: "24px", justifyContent:"center", display:"flex" }}>
        <Button onClick={onClickOnCreateTrip} variant="contained">Create Trip</Button>
        {trips.length > 0 && <Button onClick={()=>setAllTrips(true)} style={{marginLeft: '16px'}} variant="contained">SEE ALL TRIPS</Button>}
      </Grid>
    </div>
  );
};

export default CreatingTrip;
