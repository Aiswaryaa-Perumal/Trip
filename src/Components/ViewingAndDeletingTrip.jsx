import { Button, Grid } from '@mui/material'
import React from 'react'
import moment from 'moment'

const ViewingAndDeletingTrip = (props) => {
    const {trips, onClickOnDelete, setAllTrips} = props
    return (
    <div style={{marginTop: '24px'}}>
        <span>All Trips <Button onClick={()=>setAllTrips(false)} variant='contained' >Create Trip</Button></span>
        <Grid container style={{marginTop: '24px'}}>
            <Grid item xs={2}>
                <span>Trip Place</span>
            </Grid>
            <Grid item xs={2}>
                <span>Trip Title</span>
            </Grid>
            <Grid item xs={2}>
                <span>Trip Description</span>
            </Grid>
            <Grid item xs={2}>
                <span>Start Date</span>
            </Grid>
            <Grid item xs={2}>
                <span>End Date</span>
            </Grid>
        </Grid>
        {trips.map((trip, index)=>{
            return(
            <Grid container style={{marginTop: '24px', display: "flex", alignItems:'center'}}>
                <Grid item xs={2}>
                    {trip.place}
                </Grid> 
                <Grid item xs={2}>
                    {trip.title}
                </Grid> 
                <Grid item xs={2}>
                    {trip.description}
                </Grid> 
                <Grid item xs={2}>
                    {/* {trip.startDate} */}
                    {moment(trip.startDate).format('DD-MM-yyyy')}
                </Grid> 
                <Grid item xs={2}>
                    {/* {trip.endDate} */}
                    {moment(trip.endDate).format('DD-MM-yyyy')}
                </Grid> 
                <Grid item xs={2}>
                    <Button onClick={()=>onClickOnDelete(index)} variant='contained' style={{backgroundColor: "red"}}>DELETE</Button>
                </Grid>
            </Grid>
        )})}
    </div>
  )
}

export default ViewingAndDeletingTrip