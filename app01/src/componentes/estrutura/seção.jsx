import React from "react";
import Seção01 from "./seção01";

const cs=()=>{
    return ' React'
}

export default function seção(){
    return(
        <>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam nisi nemo minus, voluptas, totam porro dolores temporibus eligendi natus ducimus blanditiis. Debitis id dignissimos, harum eligendi rem nostrum labore?
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique voluptas dicta architecto aut laboriosam odit sint error aliquam delectus obcaecati consectetur quia tenetur, recusandae cupiditate repellendus quam ex? In.
        </p>
        <Seção01
            youtube=' youtube.com'
            curso={cs}
        />
        </>
    )
}