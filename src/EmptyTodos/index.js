
import React from 'react';
import './EmptyTodos.css';
import { EmptyIcon } from '../TodoIcon/EmptyIcon';

function EmptyTodos() {
 
  return (
    <div className='containerEmpty'>
      
          <p>No hay Actividades</p>
          <EmptyIcon/>
    </div>

  );
}


export { EmptyTodos };