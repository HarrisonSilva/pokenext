import React from 'react'
import Image from 'next/image'
import styles from '../../app/styles/about.module.css'

export default function About() {
  return (
    <div className={styles.about}>
        <h1>
            Sobre o Projeto
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia <br/>
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum <br/>
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium <br/>
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis <br/></p>
            <Image src='/images/pikachu.png' width='300' height='300' alt='pikachu' priority={true}/>
    </div>
  )
}
