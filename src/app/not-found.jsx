import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/pikachu.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
        <h1>essa pagina nao existe</h1>
        <Image priority className={styles.pikachu} src='/images/triste.png' width='500' height='500' alt='not Found image'/>
    </div>
  )
}
