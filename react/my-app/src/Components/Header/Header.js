import styles from './Header.module.css'

import {Box, LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";

const Header = () => {
    const {isLoading}=useSelector(state => state.progress)
    const {revenueEpisode}=useSelector(state => state.episodes)
    return (
        <div >
            <div className={styles.label}>{revenueEpisode?revenueEpisode:'Rick&Morty'}</div>
            {
                isLoading &&(
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                )
            }
            <div>
            </div>
        </div>
    );
};

export{
    Header
};