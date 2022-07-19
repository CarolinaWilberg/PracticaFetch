import './Cursor.css'
import { useState } from 'react'

export const Cursor = () => {

    const [coord, setCoord] = useState({
        X: 0,
        Y: 0
    })

    const mouseMove = (e) => {
        //console.log(e.clientX, e.clientY)
        setCoord({
            X: e.clientX,
            Y: e.clientY
        })
    }

    return(
        <div className='CoordenadasCursor' onMouseMove={(e) => mouseMove(e)}>
            <h3>
                Eje X: {coord.X}
            </h3>
            <h3>
                Eje Y: {coord.Y}
            </h3>
        </div>
    )
}