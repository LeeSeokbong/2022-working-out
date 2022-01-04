import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

export default function Part1_2_04() {
    return (
        <div>
            <Welcome name="Leo"/>
            <Welcome name="Leo1"/>
            <Welcome name="Leo2"/>
        </div>
    )
}
