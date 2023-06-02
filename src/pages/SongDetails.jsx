/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs} from '../components';
import { setActiveSong, playPause} from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery} from '../redux/services/shazamCore';

// eslint-disable-next-line arrow-body-style
const SongDetails = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { songid } = useParams();
    const { data: songData, isFetchcing: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    const { data, isFetchcing: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });
    
    const handlePauseClick = () => {
        dispatch(playPause(false));
    };
    
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    };
    
    if (isFetchingSongDetails || isFetchingRelatedSongs) {
        return <Loader title="Searching song details..." />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ? songData.sections[1].text.map((line, index) => (
                        <p key={`lyrics-${line}-${index}`} className="text-gray-400 text-base my-1">{ line }</p>
                    )) : <p className="text-gray-400 text-base my-1">Sorry no lyrics found!</p>}
                </div>
            </div>
            <RelatedSongs 
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>
    );
};

export default SongDetails;
