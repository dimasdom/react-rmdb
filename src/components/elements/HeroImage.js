import React from 'react';
import styled from 'styled-components'

const StyledHeroImage = styled.div`
background:${props=>
    `linear-gradient(
    to bottom , rgba(0,0,0,0)
    39%,rgba(0,0,0,0)
    41%,rgba(0,0,0,0.8)
    100%
    ),
    url(${props.image}),#1c1c1c`};
    background-size:100%,cover;
    background-position:center,center;
    width:100%;
    height:600px;
    position:relative;
    animation:animateHeroimage 1s;
    
    .heroimage-content{
    max-width:1280px;
    padding:20px;
    margin: 0 auto ; 
    }
    .heroimage-text{
    z-index:100;
    max-width:700px;
    position:absolute;
    margin-right:20px;
    margin-top:300px;
    min-height:100px;
    color:#FFF;
    
    h1{
    font-family:'Abel',sans-serif;
    font-size:48px;
    color:#FFF;
    
    @media screen and (max-width:720px){
    font-size:38px;
    color:#FFF;
    }
    }
    p{
    font-family:'Abel',sans-serif;
    font-size:22px;
    line-height:26px;
    color:#FFF;
    @media screen and (max-width:720px){
    font-size:16px;
    line-height:20px;
    color:#FFF;
    }
    }
    @media screen and (max-width: 720px){
    max-width:100%;
    }
    }
    
    @keyframes animateHeroimage {
    from{
    opacity:0;
    }
    to{
    opacity:1;
    }
    }
`;

const HeroImage = ({image,title,text}) => (
    <StyledHeroImage image={image}>
        <div className={"heroimage-content"}>
            <div className={"heroimage-text"}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </StyledHeroImage>)
export default HeroImage