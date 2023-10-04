"use client"
import { useEffect, useContext } from 'react';
import { ContextStore } from "@/components/Context";
import { getBoard } from '@/appLogic/boardFetches';

export default function Page({params}) {
    const contextObj = useContext(ContextStore)

    useEffect(() => { 
        getBoard(params.uuid) 
        .then(data => {
            if (data.error) {
                console.error(data)
            } else {
                contextObj.setActiveBoard(data) 
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    <div>
        hello world
        <br/>
        UUID: {params.uuid}
    </div>
    )
}