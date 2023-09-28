"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ModalSelectBoard from '@/components/ModalSelectBoard';

export default function Home() {

    return (
        <>
            <h1 className='text-2xl font-bold'>Sites</h1>
            <br/>
            <ModalSelectBoard/>

            <div className="grid gap-3 lg:grid-cols-3">
                
            </div>
        </>
    );
}