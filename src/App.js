import './App.css';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreatePlayer from './pages/CreatePlayer'
import ListPlayers from './pages/ListPlayers'
import Main from './pages/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import EMNavbar from './components/EMNavbar';
import { playerData, eventData, charData, skillData } from './__mocks__/mockdata'
import ListEvents from './pages/ListEvents';
import EditCharacter from './pages/EditCharacter';
import ListCharacters from './pages/ListCharacters';
import ListSkills from './pages/ListSkills';
import EditSkill from './pages/EditSkill';


export default function App() {
  const [playerList, setPlayerList] = useState(playerData.players);
  const [eventList, setEventList] = useState(eventData.events);
  const [charList, setCharList] = useState(charData.characters)
  const [skillList, setSkillList] = useState(skillData.skills)
  const [selectedPlayerID, setSelectedPlayerID] = useState(0)
  const [selectedEvent, setSelectedEvent] = useState(0)
  const [selectedChar, setSelectedChar] = useState({});


  const setPlayerID = (id) => {
    setSelectedPlayerID(id)
  }

  const charFunctions = {
    selectChar: (char) => {
      console.log(char)
      const found = charList.find(obj => {
        return obj.charID == char;
      });
      setSelectedChar(found)
    },
    addChar: (charObj) => {
      setCharList([...charList, charObj])
    }
  }

  return (
    <Router>
      <EMNavbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/new' element={<CreatePlayer playerID ={ selectedPlayerID }/>}/>
        <Route path='/players' element={<ListPlayers playerList={ playerList } setPlayerID={ setPlayerID }/>} />
        <Route path='/events' element={<ListEvents eventList={ eventList }/>} />
        <Route path='/edit-character' element={<EditCharacter selectedChar = { selectedChar } charFunctions = {charFunctions} />}/>
        <Route path='/edit-skill' element={<EditSkill />}/>
        <Route path='/list-characters' element={<ListCharacters charList = { charList } charFunctions = { charFunctions }/>}/>
        <Route path='/list-skills' element={<ListSkills skillList = { skillList }/>}/>
      </Routes>
    </Router>
  );
}