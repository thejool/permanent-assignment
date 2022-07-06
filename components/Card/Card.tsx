import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Card.module.scss'
import useOnScreen from 'utils/useOnScreen'

interface Card {
  image?: {
    src: string
    alt: string
  }
  title: string
}

const Card = ({ image, title }: Card) => {
  const ref = useRef<HTMLElement | null>(null)
  const isIntersecting = useOnScreen(ref)

  return (
    <article className={styles.card} ref={ref}>
      {image ? (
        <Image 
          className={styles.image}
          src={image.src} 
          alt={image.alt} 
          width={330}
          height={248}
          placeholder="empty" 
          priority={isIntersecting} 
        />
      ) : (
        <div className={styles.placeholder} data-testid="image-placeholder" />
      )}
      <h1 className={styles.title}>{title}</h1>
    </article>
  )
}

export default Card