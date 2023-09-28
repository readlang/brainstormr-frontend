"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Home() {
    const [allSites, setAllSites] = useState([])

    

    console.log(allSites)

    return (
        <>
            <h1 className='text-2xl font-bold'>Sites</h1>
            <br/>
            <div className="grid gap-3 lg:grid-cols-3">
                {allSites.map(site => 
                    <Link key={site.id} href={ `/sites/${site.id}` } 
                        className='rounded-md border border-gray-300 bg-white shadow-md p-10'>
                        <h6>{site.name}</h6>
                        <hr/>
                        <p>{site.id}</p>
                        <p>{site.description}</p>
                        <p>{site.url}</p>
                    </Link>
                )}
            </div>
        </>
    );
}