import styles from './Flight.module.css'
export const Flight=({flight})=>{
    const {mission_name,launch_year,links:{mission_patch_small}}=flight;
            return(
                <div className={styles.place}>
                    <div>mission name: {mission_name}</div>
                    <div>launch year: {launch_year}</div>
                    <div className={styles.image}>
                        <img src={mission_patch_small} alt="Зображення" />
                    </div>
                </div>
            )
}