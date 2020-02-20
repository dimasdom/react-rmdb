import React, {useEffect} from 'react'
import Actor from "./Actor";
import MovieInfoBar from "./MovieInfoBar";
import MovieInfo from "./MovieInfo";
import Navigation from './Navigation'
import Grid from "./Grid";
import Spinner from "./Spinner";
import {fetchFilm} from "../../redux/thunks/thunksCreator";
import {connect} from "react-redux";
import {getCredits, getDetails} from "../../redux/selectors/selectors";


let Movie = ({movieId,fetchFilm,Details,Credits}) =>{
    debugger
    const useFetching = (someFetchActionCreator,id) => {
        useEffect( () => {
            someFetchActionCreator(id);
        }, [])
    }
    useFetching(fetchFilm,movieId)
let Director = Credits.crew ? Credits.crew.filter(m=>m.job === "Director") : "None" ;
    console.log(Director)
    return (
    <>
        <Navigation movie={Details.original_title}/>
        <MovieInfo movie={Details} Director={Director}/>
        <MovieInfoBar time={Details.runtime} budget={Details.budget} revenue={Details.revenue}/>
        <Grid header={"Actors"}>
            {Credits.cast ?  Credits.cast.map(actor=>(
                <Actor key={actor.credit_id} actor={actor}/>
            )):<Spinner/>}

        </Grid>
        </>
    )
}

let mapStateToProps = state =>({
    Details:getDetails(state),
    Credits:getCredits(state),
})
let mapDispatchToProps = {
    fetchFilm:fetchFilm
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie)