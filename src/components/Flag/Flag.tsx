import { useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import styles from './Flag.module.css'

interface IFlagProps {
    image: string;
    name: string;
    showName: boolean;
}

export const Flag = ({ image, name, showName }: IFlagProps) => {

    const headlineRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {

        const headline = headlineRef.current

        if (!headline) return;

        if (showName) {
            gsap.fromTo(headline, {
                // opacity: 0,
                y: '-100%',
            }, {
                // opacity: 1,
                y: -10,
                duration: .5,
                ease: 'power2.out'
            })
        } else {
            gsap.to(headline, {
                y: '-100%',
                duration: .2,
            })
        }




    }, [showName])

    return (
        <section className={styles.flagWrapper}>
            <img className={styles.flagImage} src={image} alt={name} />
            <h1 ref={headlineRef} className={`${styles.flagName} ${showName ? styles.showName : ''}`}>{name}</h1>
        </section>
    )
}