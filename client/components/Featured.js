import React, {useState} from 'react';
import styles from "../styles/Featured.module.css";
import Image from 'next/image';

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/richmond.jpg",
        "/img/fire-stone.jpg",
        "/img/il-molino.jpg"
    ]
    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !==0 ? index - 1 : images.length - 1)
        }
        else if(direction === "r"){
            setIndex(index !== images.length-1 ? index + 1 : 0)
        }

    }
    console.log(index)
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow('l')}>
                <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>

                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img}  alt="" width="100%" layout="fill" objectFit="cover"/>
                    </div>
                ))}

            </div>
            <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow('r')}>
                <Image src="/img/arrowr.png" alt="" layout="fill"  objectFit="contain"/>
            </div>

        </div>
    );
};

export default Featured;