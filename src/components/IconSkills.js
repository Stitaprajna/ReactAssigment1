import React from "react";
import Beginner from "../icons/begineer";
import Advanced from "../icons/advanced";
import Expert from "../icons/expert";
import Master from "../icons/master";
import Star from "../icons/star";
import NoLevel from "../icons/nolevel";

export default function IconSkills({level}){

    if(level=="Beginner"){
        return(<Beginner/>);
    }
    if(level=="Advanced"){
        return(<Advanced/>)
    }
    if(level=="Expert"){
        return(<Expert/>)
    }
    if(level=="Master"){
        return(<Master/>)
    }
    if(level=="Star"){
        return(<Star/>)
    }
    if (level=="Nolevel"){
        return(<NoLevel/>)
    }
}

{/* {level=="Beginner"?<Beginner/>:(level=="Advanced"?<Advanced/>:(level=="Expert"?<Expert/>:(level=="Master"?<Master/>:(level=="Star"?<Star/>:<NoLevel/>))))} */}
