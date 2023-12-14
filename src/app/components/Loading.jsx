import React from 'react'
import Image from 'next/image'
import styles from '../styles/loading.module.css'

export default function Loading() {
  return (
    <div className={styles.container}>
      <h1>Carregando...</h1>
        <Image src='/images/pensativo.png' width='50' height='50' alt='imagem pokemon carregando'/>
    </div>
  )
}
