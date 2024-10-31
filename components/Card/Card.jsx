import React from 'react'
import style from './Card.module.css'
import Image from 'next/image'

export default function Card({image, alt}) {
    return (
        <div className={style.card}>
            <div className={style.contentContainer}>
                <Image className={style.image} src={image} alt={alt} width={126} height={126}></Image>
            </div>
        </div>
    )
}
