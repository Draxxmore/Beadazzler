import styles from '@/styles/Layout.module.css'
import { ImageUploader } from './ImageUploader'

export const Layout = () => {
    return (
        <div className={styles.layout__container}>
            <div className={styles.layout__imageUploader}>
                <ImageUploader />
            </div>
            <div className={styles.layout__settings}></div>
        </div>
    )
}