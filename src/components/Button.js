import React from 'react';

const Button = () => {

    return(
        <>
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.imdb.com/calendar/?region=gb';
            }}
>       Click here to view upcoming releases!</button>
        </>
    )
}

export default Button;