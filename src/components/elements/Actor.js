import React from 'react'
import No_image from'../images/no_image.jpg'
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../config";
import {StyledActor} from "../styles/StyledActor";
import {Link} from "@reach/router";

const Actor = ({actor,id}) => (
    <StyledActor>
        <Link to={`/person/${id}`}>
        <img src={ actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path }`: No_image}
            alt="actorThumb"/>
        </Link>
        <span className={"actor-Name"}>{actor.name}</span>
        <span className={"actor-character"}>{actor.character} </span>
    </StyledActor>
)

export default Actor