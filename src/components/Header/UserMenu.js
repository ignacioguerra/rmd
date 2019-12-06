import React from 'react';

const UserMenu = (props) => {
  
  return (
    <ul className="user">
        <li><a href="#">Mi perfil</a></li>
        <li><a href="#">Actividad</a></li>
        <li><a href="#">Preferencias</a></li>
        <li><a href="#">Salir</a></li>
    </ul>
  );
}

export default UserMenu;