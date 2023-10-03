"use client"

export default function Page({params}) {

    console.log(params.uuid)

    return (
    <div>
        hello world
        <br/>
        UUID: {params.uuid}
    </div>
    )
}