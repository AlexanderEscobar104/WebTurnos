import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnsComponent } from './pages/turns/turns.component';

const routes: Routes = [
  {path: 'listar', component: TurnsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
