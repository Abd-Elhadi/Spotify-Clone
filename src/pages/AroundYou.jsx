/* eslint-disable react/jsx-indent-props */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);
    const countries = ['DZ', 'BY', 'CI', 'SN', 'TN', 'AU', 'AT', 'AZ', 'AR', 'BE', 'BG', 'BR', 'GB', 'HU', 'VE', 'VN', 'GH', 'DE', 'GR', 'DK', 'EG', 'ZM', 'IL', 'IN', 'ID', 'IE', 'ES', 'IT', 'KZ', 'CM', 'CA', 'KE', 'CN', 'CO', 'CR', 'MY', 'MA', 'MX', 'MZ', 'NG', 'NL', 'NZ', 'NO', 'AE', 'PE', 'PL', 'PT', 'RU', 'RO', 'SA', 'SG', 'US', 'TH', 'TZ', 'TR', 'UG', 'UZ', 'UA', 'UY', 'PH', 'FI', 'FR', 'HR', 'CZ', 'CL', 'CH', 'SE', 'ZA', 'KR', 'JP'];
    
    console.log(data)
    console.log(country);
    
    useEffect(() => {
        // at_40D8ERKpxhmgko7KAB0jC3UBobG9t
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_40D8ERKpxhmgko7KAB0jC3UBobG9t`)
            // .then((res) => setCountry(res?.data?.location?.country))
            // .then((res) => setCountry(res?.data?.location?.country === -1 ? countries[Math.random() * countries.length] : res?.data?.location?.country))
            .then((res) => setCountry('EG'))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [country]);

    if (isFetching && loading) {
        <Loader title="Loading songs around you..." />
    }

    if (error && country) {
        return <Error />;
    }

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around You <span className="font-black">{ country }</span></h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        song={song} 
                        key={song.key}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default AroundYou;
