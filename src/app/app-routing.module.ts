import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cms',
    loadChildren: ()=>import('./cms/cms.module').then(module=>module.CmsModule)
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then(module=>module.AuthModule)
  },
  {
    path: 'shared',
    loadChildren: ()=>import('./shared/shared.module').then(module=>module.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
