import React, { useState } from 'react';
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router';
import PhonesContainer from '../components/PhonesContainer';

const Home = () => {
    const data = useLoaderData();
    const [phones, setPhones] = useState(data);

    const handleSearch = (e, text) => {
        e.preventDefault();
        const searchedPhones = phones.filter(
            phone =>
                phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
                phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
        )
        setPhones(searchedPhones);
    }


    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;