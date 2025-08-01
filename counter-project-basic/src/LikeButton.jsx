import { useState } from "react";

function LikeButton(initialLiked = false) {
    const[liked,setLiked] =useState(initialLiked);
    function handleClick(){
        setLiked(!liked);
    }
    return (
        <button onClick={handleClick}>
            {liked ? "Liked ❤️" : "Like 🤍"}
        </button>

    );

}
export default LikeButton;