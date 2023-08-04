import React from "react";
import { LoadBtn } from "./Button.stled";


const Button = ({ loadMore }) => {
    return (
         <LoadBtn onClick={loadMore}>Load more</LoadBtn>
    );
}

export default Button;
