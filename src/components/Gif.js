import React from "react"

function Gif(props) {
  return (
    <div>
        <img alt="gif" src={props.url}/>
    </div>
  );
}

export default Gif;
