//import {createElement} from 'react';
import '../../styles/molecules/Pagination.css'


function Pagination(props) {
    return (
        <ul className='Pagination'>
            {props.children}
        </ul>
    )
}

export {Pagination};