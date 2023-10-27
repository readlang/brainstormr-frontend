"use client"
import { useEffect, useContext } from 'react';
import { ContextStore } from "@/components/Context";
import { getCardsForBoard } from '@/appLogic/boardFetches';
import { NewCardButton } from '@/app/board/[uuid]/_components/NewCardButton';
import Card from '@/app/board/[uuid]/_components/Card';
import Draggable from '@/app/board/[uuid]/_components/Draggable';

export default function Page({params}) {
    const contextObj = useContext(ContextStore)

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
            <NewCardButton params={params}/>
            
            { contextObj.activeBoard && contextObj.activeBoard.Cards ?
                contextObj.activeBoard.Cards.map(card => <Card key={card.id} data={card}/>) : null
            }

            <Draggable/>
        </div>
    )
}