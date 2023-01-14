import React, { useEffect } from 'react'
import './App.css';
import Scoreboard from './components/Scoreboard';
import CardsContainer from './components/CardsContainer';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = React.useState([])
  const [points, setPoints] = React.useState(0)
  const [record, setRecord] = React.useState(0)

  const getPokemons = async () => {

    let endpoints = []

    for(let i = 1; i < 13; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    const res = await axios.all(endpoints.map((endpoint) => {return axios.get(endpoint)}))

    const items = preparePokemons(res)
    
    setPokemons(items)
  }

  const preparePokemons = (arr) => {
    let newPokemons = arr.map((pokemon) => {
      return {
        name: pokemon.data.name,
        image: pokemon.data.sprites.front_default,
        clicked: false
      }
    })
    return newPokemons
  }

  const toggleClicked = (e, clickStatus) => {
    const name = e.currentTarget.id
    if(clickStatus) {
      showLostAlert()
    } else {
      setPoints((prevPoints) => {return prevPoints + 1})
      setPokemons((prevState) => {
        return prevState.map((item) => {
          if(item.name === name) {
            return {
              ...item,
              clicked: !item.clicked
            }
          } else {
            return item
          }
        })
      })
    }
  }

  const checkPoints = () => {
    checkRecord()
    checkWin()
  }

  const checkRecord = () => {
    if(points > record) {
      setRecord(points)
    } else {
      return
    }
  }

  const checkWin = () => {
    if(points !== 0 && points === [...pokemons].length) {
      showWinAlert()
    }
  }

  const restartGame = () => {
    setPoints(0)
    setPokemons((prevState) => {
      return prevState.map((item) => {
        return {...item, clicked: false}
      })
    })
  }

  const showLostAlert = () => {
    alert("You Lost! Click in OK to play again")
    restartGame()
  }

  const showWinAlert = () => {
    alert("You Won! Click in OK to play again")
    restartGame()
  }

  useEffect(() => {getPokemons()}, [])
  useEffect(() => {
    checkPoints()
  }, [points])


  return (
    <div className="App">
      <header style={{backgroundColor: 'red',padding: '20px'}}>
        <h1>Pokemon Game</h1>
      </header>
      <main>
        <Scoreboard score={points} record={record}/>
        {pokemons ? <CardsContainer info={pokemons} handleClick={toggleClicked}/> : <></>}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
