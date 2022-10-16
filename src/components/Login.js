import React from 'react';

function Login()
{
    const doLogin  = async event =>
    {
        event.preventDeafult();

        alert("doIt()");
    }
}