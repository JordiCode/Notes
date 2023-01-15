//import {createElement} from 'react';
import '../../styles/atoms/PageItem.css'


function PageItem({indexNote ,changeIndexNote}) {
    return (
        <>
        <li className={`PageItem ${indexNote===0 && 'active'}`} onClick={()=> changeIndexNote(0)}>
            1
        </li>
        <li className={`PageItem ${indexNote===1 && 'active'}`} onClick={()=> changeIndexNote(1)}>
            2
        </li>
        <li className={`PageItem ${indexNote===2 && 'active'}`} onClick={()=> changeIndexNote(2)}>
            3
        </li>
        </>
    )
}

export {PageItem};