import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/** Importamos Librerias a utilizar */
import { AuthGuard } from './guards/auth.guard';
import { LogueadoGuard } from './logueado.guard';
import { NotLogueadoGuard } from './not-logueado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'create-employee',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./pages/owner/owner.module').then( m => m.OwnerPageModule)

  },
  {
    path: 'create-property',
    loadChildren: () => import('./pages/create-property/create-property.module').then( m => m.CreatePropertyPageModule)
  },
  {
    path: 'property',
    loadChildren: () => import('./pages/property/property.module').then( m => m.PropertyPageModule)
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./pages/create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'create-won',
    loadChildren: () => import('./pages/create-won/create-won.module').then( m => m.CreateWonPageModule)
  },
  {
    path: 'won',
    loadChildren: () => import('./pages/won/won.module').then( m => m.WonPageModule)
  },
  {
    path: 'sowing',
    loadChildren: () => import('./pages/sowing/sowing.module').then( m => m.SowingPageModule)
  },
  {
    path: 'create-sowing',
    loadChildren: () => import('./pages/create-sowing/create-sowing.module').then( m => m.CreateSowingPageModule)
  },
  {
    path: 'create-contact',
    loadChildren: () => import('./pages/create-contact/create-contact.module').then( m => m.CreateContactPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


