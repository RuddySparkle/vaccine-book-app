'use client'
import { useState, useReducer } from 'react'
import Card from './Card'
import React from 'react'
import Link from 'next/link'

export default function CardPanel() {

    const compareReducer = ( compareMap : Map<string, number>, action:{type: string, hospitalName: string, hospitalRating: number}) => {
        switch (action.type) {
            case 'add':
                return new Map(compareMap.set(action.hospitalName, action.hospitalRating))
            case 'remove':
                action.hospitalRating = 0
                compareMap.delete(action.hospitalName)
                return new Map(compareMap)
            default:
                return compareMap
        }
    }

    const ratingDescription = ['Unrated', 'Terrible', 'Poor', 'Fair', 'Good', 'Excellent']

    const startMap = new Map<string, number>().set('Chulalongkorn Hospital', 4).set('Rajavithi Hospital', 4).set('Thammasat University Hospital', 4)
    const [compareMap, dispatch] = useReducer(compareReducer, startMap)

    const mockHopitalRepo = [
        {hid: '001', name: 'Chulalongkorn Hospital', rating: 4, imgSrc: '/image/chula.jpg'},
        {hid: '002', name: 'Rajavithi Hospital', rating: 4, imgSrc: '/image/rajavithi.jpg'},
        {hid: '003', name: 'Thammasat University Hospital', rating: 4, imgSrc: '/image/thammasat.jpg'}
    ]

    function OnHover(event: React.SyntheticEvent) {
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('bg-blue-100');
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.remove('bg-blue-100');
            event.currentTarget.classList.add('bg-white');
        }
    }

    return(
        <div>
            <div className='m-[30px] flex flex-row content-around justify-around flex-wrap'>
                {
                    mockHopitalRepo.map((hospital) => (
                        <Link href={`/hospital/${hospital.hid}`} className='w-1/4'>
                        <Card hospitalName={hospital.name} ratingMap={compareMap} imgSrc={hospital.imgSrc} 
                        onCompare={(hospital: string, rating: number) => 
                        dispatch({type: 'add', hospitalName: hospital, hospitalRating: rating})}/>
                        </Link>
                    ))
                }
            </div>

            <div className='w-full text-xl font-medium mx-[7%] flex'>
                Compare List: {compareMap.size}
            </div>

            {Array.from(compareMap).map(([key,value]) => 
                (<div className='w-[30%] h-[20px]] border-[1px] rounded-lg shadow-lg bg-white p-[12px] my-[15px] mx-[6%]'
                onMouseOver = { (event) => OnHover(event) }
                onMouseOut = { (event) => OnHover(event) }
                onClick = {(e) => 
                    {dispatch({type: 'remove', hospitalName: key, hospitalRating: 0}); 
                }}
                >
                    {key}: Rating {value} [{ratingDescription[value as number]}]
                </div>
            ))}
            
        </div>
    )
}