import { Component } from '@angular/core';

import { AbrirChamadoPage } from '../abrir-chamado/abrir-chamado';
import { FecharChamadoPage } from '../fechar-chamado/fechar-chamado';
import { ConsultarChamadoPage } from '../consultar-chamado/consultar-chamado';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AbrirChamadoPage;
  tab2Root = FecharChamadoPage;
  tab3Root = ConsultarChamadoPage;

  constructor() {

  }
}
