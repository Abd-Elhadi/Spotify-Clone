/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
/* eslint-disable dot-location */
/* eslint-disable indent */
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song,
  handlePause, handlePlay}) => (isPlaying && activeSong?.
  title === song.title ?
  (<FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePause} 
  />) :
  (<FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay} 
  />));

export default PlayPause;
