"use client"
import { useEffect, useContext, useState } from 'react';
import { ContextStore } from "@/components/Context";
import { postCard } from '@/appLogic/cardFetches';

export function NewCardButton({params}) {
    const contextObj = useContext(ContextStore)

    function createNewCard() {
        postCard("", "255,255,255", "30,30", "400x400", params.uuid)
        .then(card => 
            contextObj.setActiveBoard({ 
                ...contextObj.activeBoard, 
                Cards: [ ...contextObj.activeBoard.Cards, card ]
            })
        )
    }


    return(
        <button className="btn btn-outline btn-xs rounded-full absolute top-3 -right-1" 
            onClick={()=>createNewCard()}> New Card
        </button>
    )
}