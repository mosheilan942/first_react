import React from 'react'
interface Props {
    title: string
}


export default function title(props: Props) {
    return <div>
        <h1>{props.title}</h1>
        </div>
}

