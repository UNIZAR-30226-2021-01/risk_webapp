import React from "react"
import "./../index.css"

import MenuSalas from './salas/MenuSalas'
import ListaAmigos from './panelAmigos/ListaAmigos'
import { MDBContainer, MDBCol, MDBRow} from "mdbreact"

export const MenuPrincipal = () => {

  let amigos = [{nombre: 'Óscar'},{nombre: 'Pepe'}]

  return (
    <MDBContainer>
      <MDBRow>
      {/*<ActualizacionConfiguracion />*/}
      <MDBCol>
        <MenuSalas />
      </MDBCol>
      <MDBCol>
        <ListaAmigos usuarios={amigos} />
      </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default MenuPrincipal;