import styles from '@/styles/ImageUploader.module.css'

export const ImageUploader = () => {
    return (
        <div className={styles.imageUpload__container}>
            <button className={styles.uploadImage__button}>Upload Image</button>
        </div>
    )
}