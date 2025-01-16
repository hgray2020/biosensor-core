import styles from '../styles/ContentBox.module.css';

function ContentBox({content}) {
    const {text, header, img} = content;
    return <div className={styles.content_box_wrapper}>
        <div className={styles.content_box_container}>
            <div className={styles.content_box_image_container}>
                <img src={`images/${img}`}/>
            </div>
            <div className={styles.content_box_header}>
                <h5>{header}</h5>
            </div>
            <div className={styles.content_box_text}>
                <p>{text}</p>
            </div>
           
        </div>
    </div>
}

export default ContentBox;