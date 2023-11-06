import React, { useState } from "react"
import Pen from "../icons/pen"
import Done from "../icons/done";
import Checkbox from "./CheckBox";
import IconSkills from "./IconSkills";


export default function SkillTextSection({status,skillname,assesment,level,selfassesmentlevel,selfassesmentpercent,yrsofexp}){

    return(
        <div className="flex-row">
            <div className={status=="Done"? "done-row-1":"checkbox-column-1"}>
                <div>
                    <h2>{skillname}</h2>
                </div>
                <div className={status=="Done"? "done":"checkbox"}>
                    {status=="Done"?<Done/>:<Checkbox/>}
                </div>                            
            </div>    

            <div className={status=="Done"? "done-row-2":"checkbox-column-2"}>
                <div className="icon-skills">
                    <IconSkills
                    level={level}
                    />
                </div>

                <div>
                    {assesment}
                </div>
            </div>

            <div className="self-assessment-portion">
                <p><span className="self-assessment">Self Assessment</span>
                    <span className="Svg">
                        <Pen/>
                    </span>
                    <br/>
                    <label className="label"><span className="bold">{yrsofexp}</span> years, <span className="bold">{selfassesmentlevel}</span> Level with <span className="bold">{selfassesmentpercent}%</span> proficiency</label>
                </p>
            </div>
                        
        </div>
    )
}

