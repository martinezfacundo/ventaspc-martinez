import React from 'react';

const styles = {color:'black',fontSize:'30px'}

function ItemListContainer({greeting}) {
    return(
        <div>
        <h1 styles={styles}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer