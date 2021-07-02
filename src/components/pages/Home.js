import ItemListContainer from '../itemListContainer/ItemListContainer';
import React from 'react'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';

function Home() {

    return (
    <div>
        <ItemListContainer greeting="Hola soy Item List Container"/>
        <ItemDetailContainer />
    </div>
    );
}

export default Home;