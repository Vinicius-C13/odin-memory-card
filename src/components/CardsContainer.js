import React, { useEffect } from 'react';
import Card from './Card';

const Game = (props) => {

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, auto)',
        width: 'fit-content',
        rowGap: '25px',
        columnGap: '25px',
        marginInline: 'auto'
    }

    const cardComponents = props.info.map((card) => {
        return <Card key = {card.name} image={card.image} name={card.name} handleClick={props.handleClick} clicked={card.clicked}/>
    })

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array
    }

    return (
        <div style={gridContainer}>
            {
                shuffleArray(cardComponents)
            }
        </div>
    )
}

export default Game