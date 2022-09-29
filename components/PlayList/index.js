import Image from 'next/image'
import styles from './PlayList.module.css'

const playIcon = <div className={styles.playIcon}>
    <svg focusable="false" viewBox="0 0 24 24" color="#fff" aria-hidden="true">
        <path d="M8 5v14l11-7z"></path>
    </svg>
</div>

const PlayList = ({ list }) => {
    return list?.length > 0 && (
        <>
            {list.map(video => (
                <div key={video?.id} className={styles.video}>
                    {playIcon}
                    <Image
                        src={video?.thumbnail}
                        width={300}
                        height={160}
                        layout="responsive"
                        alt={video?.name}
                        className={styles.thumbnail}
                    />
                    <p className={styles.videoName}>{video?.name}</p>
                </div>)
            )}
        </>
    )
}

export default PlayList;