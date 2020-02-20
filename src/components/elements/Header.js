import React from 'react';
import RMDBLogo from '../images/reactMovie_logo.png'
import TMDBLogo from '../images/tmdb_logo.svg'
import styled from 'styled-components'
import {Link} from '@reach/router'
const Header = () => {
    let StyledHeader = styled.div`
    background:#1c1c1c;
    padding: 0 20px;
    box-sizing:border-box;
    
    .header-content{
    max-width:1280px;
    min-height:120px;
    padding:20px 0 ;
    margin: auto;
    box-sizing: border-box;
    
    @media screen and (max-width :500px){
    min-height:0px;
    }
    
    `
let StyledRMDBLogo = styled.img`
width: 250px ;
margin-top:20px;

@media screen and (max-width:500px){
width:150px;
margin-top:5px;
}
`

    let StyledTMDBLogo = styled.img`
width: 122px ;
margin-top:5px;
float:right;

@media screen and (max-width:500px){
display:inline-block;
width:80px;
margin-top:0px;
}
`
return (
    <StyledHeader>
        <div>
            <Link to={'/'}>
            <StyledRMDBLogo src={RMDBLogo} alt='RMDBLogo' />
            <StyledTMDBLogo src={TMDBLogo} alt='TMDBLogo' />
            </Link>
        </div>
    </StyledHeader>)
}


export default Header
