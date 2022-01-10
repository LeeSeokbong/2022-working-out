import React from 'react'

function UserGreeting(props) {
    return <h1>{props.name && `${props.name},`} Welcome {Boolean(props.count) && `Is's ${props.count} time`}</h1>
}

function GuestGreeting(props) {
    return <h1>Plz sign up.</h1>
}

function Greeting(props) {
    //     if(props.isLoggedIn) {
    //         <UserGreeting name="Leo" count={0} />
    //     }
    // return <GuestGreeting />
    return props.isLoggedIn ? <UserGreeting name="Leo" count={0} /> : <GuestGreeting />;
}

export default function Condition() {
    const isLoggedIn = true;
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}
