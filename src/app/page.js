/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from 'react'
import { getPokemons } from './utils/pokemonsData';
import Loading from './components/Loading';
import Image from 'next/image'
import styles from '../app/styles/Home.module.css'
import Card from './components/Card';

export default function page() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const response = async () => {
      const data = await getPokemons()
      setPokemons(data)
    }
    response()
  }, [])
  return (
    <> 
        <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='pokeNext'/>
        </div>
    <div className={styles.pokemon_container}>
    {pokemons ? pokemons.map((pokemon) => (
    <Card key={pokemon.id} id={pokemon.id} pokemon={pokemon}/>
)) : <Loading />}
    </div>
    </>
  )
}