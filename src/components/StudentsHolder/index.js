import { useState, useEffect } from "react"

import StudentsCard from "../StudentsCard";

import RefreshIcon from '@mui/icons-material/Refresh';

export default function StudentsHolder(){
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'90vw'       
      };

    const [refresh,setRefresh] = useState(false);
    const [char1,setChar1] = useState();
    const [char2,setChar2] = useState();
    const [spell1,setSpell1] = useState();
    const [spell2,setSpell2] = useState();

    function getRandomItem(itens) {
        const randomIndex = Math.floor(Math.random() * itens.length);
        return itens[randomIndex];
    }

    useEffect(()=>{        
        fetch("https://hp-api.onrender.com/api/characters")
        .then((response)=>{
            return response.json()
        }).then((data)=>{                        
            setChar1(getRandomItem(data))
            setChar2(getRandomItem(data))
        }).catch((err)=>console.log(err))

        fetch("https://hp-api.onrender.com/api/spells")
        .then((response)=>{
            return response.json()
        }).then((data)=>{                        
            setSpell1(getRandomItem(data))
            setSpell2(getRandomItem(data))
        }).catch((err)=>console.log(err))
    },[refresh])


    return <div>
        <div style={containerStyle}>
            <StudentsCard char={char1} spell={spell1}/>
            <StudentsCard char={char2} spell={spell2}/>
        </div>       
        <RefreshIcon onClick={()=>setRefresh(!refresh)}/>
    </div>
}