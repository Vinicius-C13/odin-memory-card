import React, { useEffect } from 'react';
import Card from './Card';

const Game = (props) => {

    let gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, auto)',
        width: 'fit-content',
        rowGap: '25px',
        columnGap: '25px',
        marginInline: 'auto'
    }

    return (
        <div style={gridContainer}>
            {
            props.info.map((card) => {
                return <Card key = {card.name} image={card.image} name={card.name} handleClick={props.handleClick} clicked={card.clicked}/>
            })
            }
        </div>
    )
}

export default Game