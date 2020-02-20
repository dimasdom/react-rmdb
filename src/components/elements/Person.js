import React, {useEffect} from 'react'
import {getPerson, getPersonBackimg} from "../../redux/selectors/selectors";
import {connect} from "react-redux";
import {fetchPerson} from "../../redux/thunks/thunksCreator";
import {StyledMovieInfo} from "../styles/StyledMovieInfo";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import {StyledMovieThumb} from "../styles/StyledMovieThumb";
import Spinner from "./Spinner";
import Navigation from "./Navigation";
let Person = ({personId,Person,fetchPerson,PersonBackImg}) =>{
    const useFetching = (someFetchActionCreator,id) => {
        useEffect( () => {
            someFetchActionCreator(id);
        }, [])
    }
    useFetching(fetchPerson,personId)
    if(!Person){return <Spinner/> }
    else{
    return(<>
            <Navigation movie={Person.name}/>
        <StyledMovieInfo backdrop={PersonBackImg}>
            <div className={"movieinfo-content"}>
                <div className={"movieinfo-thumb"}>
                <StyledMovieThumb>
                        <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${Person.profile_path}`} />
                </StyledMovieThumb>
                </div>

            <div className={"movieinfo-text"}>
                <h1>{Person.name}</h1>
                <p>{Person.biography}</p>
            </div>
            </div>
        </StyledMovieInfo>
        </>
    )}
}
let mapStateToProps = state =>({
    Person:getPerson(state),
    PersonBackImg : getPersonBackimg(state)
})
let mapDispatchToProps = {
    fetchPerson : fetchPerson
}
export default connect(mapStateToProps,mapDispatchToProps)(Person)