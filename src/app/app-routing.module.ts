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
    loadChildren: () => import('./pages/property/detalle-proprerty/detalle-proprerty.module').then( m => m.DetalleProprertyPageModule)
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
        loadChildren: () => import('./pages/employee/detlle-employee/detlle-employee.module').then(m => m.DetlleEmployeePageModule)
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
      path: "won/:id", 
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
    loadChildren: () => import('./pages/sowing/detalle-sowing/detalle-sowing.module').then(m => m.DetalleSowingPageModule)
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
        path: "contacto/:id",
        loadChildren: () => import('./pages/contact/detalle-contacto/detalle-contacto.module').then(m => m.DetalleContactoPageModule)
      }
    ]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
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
    loadChildren: () => import('./pages/property/agregar-property/agregar-property.module').then( m => m.AgregarPropertyPageModule)
  },
  {
    path: 'agregar-siembra',
    loadChildren: () => import('./pages/sowing/agregar-sowing/agregar-sowing.module').then( m => m.AgregarSowingPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./pages/reporte/reporte.module').then( m => m.ReportePageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./pages/evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'prueba/:id',
    loadChildren: () => import('./pages/prueba/prueba.module').then( m => m.PruebaPageModule)
  },






  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


