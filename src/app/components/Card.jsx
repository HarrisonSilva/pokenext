import React from 'react'
import Image from 'next/image'
import { imagesCollection } from '../utils/images'
import styles from '../styles/card.module.css'
import Link from 'next/link'

export default function Card({ pokemon, id }) {
  return (
    <div className={styles.card}>  
            <p className={styles.idCard}>{pokemon.id}</p>
        <Link href={`/pokemon/${pokemon.id}`}>
         <Image 
            priority
            src={imagesCollection[id - 1]}
            width='120'
            height='120'
            alt={pokemon.name}/>
            </Link>
            <h3 className={styles.cardName}>{pokemon.name}</h3> 
    </div>
  )
}
