import React from "react";

interface Props
{
    name: string;
    message: string;
}
const Greeting:React.FC<Props> = ({ name, message}) => 
{
    return <h1>Hello, {name}! {message}</h1>;
}

export default Greeting;
