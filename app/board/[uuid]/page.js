"use client"
import { useEffect, useContext, useState } from 'react';
import { ContextStore } from "@/components/Context";
import { getCardsForBoard } from '@/appLogic/boardFetches';
import { NewCardButton } from '@/components/NewCardButton';
import ModalEditCard from '@/components/ModalEditCard';
import Card from '@/components/Card';
import Draggable from '@/components/Draggable';

export default function Page({params}) {
    const contextObj = useContext(ContextStore)
    const [editCard, setEditCard] = useState("") // to control EditCardModal

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

    // console.log(contextObj.activeBoard.Cards)

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