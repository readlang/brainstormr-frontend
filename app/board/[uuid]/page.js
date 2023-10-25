"use client"
import { useEffect, useContext, useState } from 'react';
import { ContextStore } from "@/components/Context";
import { getCardsForBoard } from '@/appLogic/boardFetches';
import { NewCardButton } from '@/app/board/[uuid]/_components/NewCardButton';
import ModalEditCard from '@/app/board/[uuid]/_components/ModalEditCard';
import Card from '@/app/board/[uuid]/_components/Card';
import Draggable from '@/app/board/[uuid]/_components/Draggable';

export default function Page({params}) {
    const contextObj = useContext(ContextStore)
    const [editCard, setEditCard] = useState("d") // to control EditCardModal

    useEffect(() => { 
        getCardsForBoard(params.uuid) 
        .then(data => {
            if (data.error) {
                console.error(data)
            } else {
                contextObj.setActiveBoard(data)    ///////////////////////// this is new
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="relative">
            <NewCardButton params={params}/>
            {editCard ? <ModalEditCard/> : null}
            
            { contextObj.activeBoard && contextObj.activeBoard.Cards ?
                contextObj.activeBoard.Cards.map(card => <Card key={card.id} data={card}/>) : null
            }

            <Draggable/>
        </div>
    )
}