import { useState } from "react"

import XIcon from '@mui/icons-material/X';

export default function Scoreboard(){
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'60vw'       
      };


    const [player1,setPlayer1] = useState(0);
    const [player2,setPlayer2] = useState(0);

    return <div style={containerStyle}>
        <p onClick={()=>setPlayer1(player1+1)}>{player1}</p>
        <XIcon />
        <p onClick={()=>setPlayer2(player2+1)}>{player2}</p>
    </div>
}