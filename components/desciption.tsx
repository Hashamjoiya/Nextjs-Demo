
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Description(props: { jobDescription: string }) {

    // following local state handling is done to fix the hydration error
    const [desciption, setDescription] = useState<string>('');

    useEffect(() => {
        setDescription(props.jobDescription);
    }, [])

    return (
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: desciption }}></p>
    );
}