import React from "react"
import Gif from "./Gif"
import NoGif from "./NoGif"
import Loading from "./Loading"

function GifList(props) {

    let gifs = props.data
    
    if(gifs.length > 0){
        gifs = gifs.map(
            gif => <Gif 
                url={gif.images.fixed_height.url} 
                key={gif.id}
                />
        )

    }
    else if(props.loading){
        gifs = <Loading/>
    }
    else{
        gifs = <NoGif/>
    }


    return (
        <div className="gif_list">
            {gifs}
        </div>
    );
}

export default GifList;
