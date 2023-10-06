"use client"
import { useEffect, useContext } from 'react';
import { ContextStore } from "@/components/Context";
import { getBoard, getCardsForBoard } from '@/appLogic/boardFetches';
import { NewCardButton } from '@/components/NewCardButton';
import Card from '@/components/Card';
import Draggable from '@/components/Draggable';

export default function Page({params}) {
    const contextObj = useContext(ContextStore)

    const cardArray = [
        {
            "id": 1,
            "content": "this is the content",
            "color": "0,0,0",
            "position": "30,30",
            "size": "400x400",
            "uuid": "05ca8151-d212-4624-ba8b-be4010d638f0",
            "createdAt": "2023-10-02T20:18:40.207Z",
            "updatedAt": "2023-10-02T20:18:40.207Z",
            "BoardId": 1
        },
        {
            "id": 2,
            "content": "this is the 2nd card",
            "color": "0,0,0",
            "position": "300,200",
            "size": "400x400",
            "uuid": "05ca8151-d212-4624-ba8b-be4010d638f0",
            "createdAt": "2023-10-02T20:18:40.207Z",
            "updatedAt": "2023-10-02T20:18:40.207Z",
            "BoardId": 1
        }
    ]

    useEffect(() => { 
        getCardsForBoard(params.uuid) 
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
        <div className="relative">
            <NewCardButton/>
            {cardArray.map(card => <Card key={card.id} data={card}/> )}

            <Card data={cardArray[0]} />
            <Card data={cardArray[1]} />
            <Draggable/>
        </div>
    )
}