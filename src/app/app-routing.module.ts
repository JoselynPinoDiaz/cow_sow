import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/** Importamos Librerias a utilizar */
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'property',
    children: [
      {
        path:"",
    loadChildren: () => import('./pages/property/property.module').then( m => m.PropertyPageModule)
  },
  {
    path: ':propertyId',
    loadChildren: () => import('./pages/property/detalle-proprerty/detalle-proprerty-routing.module').then( m => m.DetalleProprertyPageRoutingModule)
  }
    ]
  },
  {
    path: 'employee',
    children: [
      {
      path:"",
      loadChildren: () => import('./pages/employee/employee.module').then( m => m.EmployeePageModule)
      },
      {
        path: ":employeeId",
        loadChildren: () => import('./pages/employee/detlle-employee/detlle-employee-routing.module').then(m => m.DetlleEmployeePageRoutingModule)
      }
    ]
  
  },
  {
    path: 'won',
    children: [
    {
      path:"",
    loadChildren: () => import('./pages/won/won.module').then( m => m.WonPageModule)    
    },
    {
      path: ":wonId", 
      loadChildren: () => import('./pages/won/detalle-won/detalle-won-routing.module').then(m => m.DetalleWonPageRoutingModule)
    }
    ]
  },
  {
    path: 'sowing',
    children:[
    {
      path: "",
    loadChildren: () => import('./pages/sowing/sowing.module').then( m => m.SowingPageModule)  
  },
  {
    path: ":sowingId",
    loadChildren: () => import('./pages/sowing/detalle-sowing/detalle-sowing-routing.module').then(m => m.DetalleSowingPageRoutingModule)
  }
    ]
  },

  {
    path: 'contact',
    children: [
      {
        path:"",
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: ":contactId",
        loadChildren: () => import('./pages/contact/detalle-contacto/detalle-contacto.module').then(m => m.DetalleContactoPageModule)
      }
    ]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'agregar-contactos',
    loadChildren: () => import('./pages/contact/agregar-contactos/agregar-contactos.module').then( m => m.AgregarContactosPageModule)
  },
  {
    path: 'agregar-empleados',
    loadChildren: () => import('./pages/employee/agregar-employee/agregar-employee-routing.module').then( m => m.AgregarEmployeePageRoutingModule)
  },
  {
    path: 'agregar-ganado',
    loadChildren: () => import('./pages/won/agregar-won/agregar-won-routing.module').then( m => m.AgregarWonPageRoutingModule)
  },
  {
    path: 'agregar-granja',
    loadChildren: () => import('./pages/property/agregar-property/agregar-property-routing.module').then( m => m.AgregarPropertyPageRoutingModule)
  },
  {
    path: 'agregar-siembra',
    loadChildren: () => import('./pages/sowing/agregar-sowing/agregar-sowing-routing.module').then( m => m.AgregarSowingPageRoutingModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


