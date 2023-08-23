import React from "react";
import { Component, ReactNode } from "react";
import "./index.css"

export interface IconClickProps {
    icon:string
    onClick?:(e:any)=>void
    img?:boolean
}

export default class IconClick extends Component<IconClickProps> {
    render(): ReactNode {
        const { icon,onClick } = this.props
        return <div className="wk-iconclick" onClick={(e)=>{
            if(onClick && !this.props.img) {
                onClick(e)
            }
        }}> 
        {this.props.img ? <input onInput={onClick} className="uploadFile" type="file"/>: <></>}
        <img src={icon}></img>
        </div>
    }
}