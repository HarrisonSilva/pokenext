/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from 'react'
import { getPokemon } from '@/app/utils/pokemonData';
import Loading from '@/app/components/Loading';
import Image from 'next/image'
import styles from '../../styles/details.module.css'
import { imagesCollection } from '@/app/utils/images';

export default function page({ params }) {
    const [pokemons, setPokemons] = useState()
    useEffect(() => {
        const response = async () => {
            const { id } = params
            const data = await getPokemon(id)
            setPokemons(data)
        }
        response()
    },[params])
  return (
    <div>
        {pokemons ?
        <div>
         <div className={styles.container}>
           <span>
             Detalhes do Pokemon 
             <h2 className={styles.title}>
              {pokemons.name}
              </h2>
               <p>Número: {pokemons.id}</p>
               <p>Tipo: {pokemons.types.map((type, index) => (
                <span className={styles.type} key={index}>{type.type.name}</span>
               ))}</p>
               <div>
                <div>
                  <p>Altura: {pokemons.height * 10} cm</p>
                </div>
                <div>
                  <p>Peso: {pokemons.weight  / 10} kg</p>
                </div>
               </div>
                </span>
            
            <Image priority src={imagesCollection[pokemons.id - 1]} width='300' height='300' alt={pokemons.name}/>
        </div>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Inventore expedita eligendi quo <br />
                dolor quae saepe illo quasi, in minus eligendi quo <br />
                modi. Hic iure a eligendi quo repellendus eligendi quo<br />
                debitis voluptatem similique suscipit nobi eligendi quo <br />
                adipisicing elit. Inventore expedita  eligendi quo<br />
                dolor quae saepe illo quasi, in minus eligendi quo <br />
                modi. Hic iure a eligendi quo repellendus eligendi quo <br />
                debitis voluptatem similique suscipit eligendi quo eligendi quo
                </p>
        </div>
         : <Loading />}
    </div>
  )
}
