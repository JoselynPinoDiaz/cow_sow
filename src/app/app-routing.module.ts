import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/** Importamos Librerias a utilizar */
import { AuthGuard } from './guards/auth.guard';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';


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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./pages/owner/owner.module').then( m => m.OwnerPageModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  },

  {
    path: 'property',
    children: [
      {
        path:"",
    loadChildren: () => import('./pages/property/property.module').then( m => m.PropertyPageModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: ':propertyId',
    loadChildren: () => import('./pages/property/detalle-proprerty/detalle-proprerty-routing.module').then( m => m.DetalleProprertyPageRoutingModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  }
    ]
  },
  {
    path: 'employee',
    children: [
      {
      path:"",
      loadChildren: () => import('./pages/employee/employee.module').then( m => m.EmployeePageModule),
      canActivate: [NoIngresadoGuard],
      data: {
        role: 'ADMIN'
      }
      },
      {
        path: ":employeeId",
        loadChildren: () => import('./pages/employee/detlle-employee/detlle-employee-routing.module').then(m => m.DetlleEmployeePageRoutingModule),
        canActivate: [NoIngresadoGuard],
        data: {
          role: 'ADMIN'
        }
      }
    ]
  
  },
  {
    path: 'won',
    children: [
    {
      path:"",
    loadChildren: () => import('./pages/won/won.module').then( m => m.WonPageModule),
    canActivate: [NoIngresadoGuard],
     
    },
    {
      path: ":numero_serie", 
      loadChildren: () => import('./pages/won/detalle-won/detalle-won-routing.module').then(m => m.DetalleWonPageRoutingModule),
      canActivate: [NoIngresadoGuard]
    }
    ]
  },
  {
    path: 'sowing',
    children:[
    {
      path: "",
    loadChildren: () => import('./pages/sowing/sowing.module').then( m => m.SowingPageModule),
    canActivate: [NoIngresadoGuard]  
  },
  {
    path: ":sowingId",
    loadChildren: () => import('./pages/sowing/detalle-sowing/detalle-sowing-routing.module').then(m => m.DetalleSowingPageRoutingModule),
    canActivate: [NoIngresadoGuard]
  }
    ]
  },

  {
    path: 'contact',
    children: [
      {
        path:"",
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule),
        canActivate: [NoIngresadoGuard]
      },
      {
        path: ":contactId",
        loadChildren: () => import('./pages/contact/detalle-contacto/detalle-contacto.module').then(m => m.DetalleContactoPageModule),
        canActivate: [NoIngresadoGuard]
      }
    ]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'agregar-contactos',
    loadChildren: () => import('./pages/contact/agregar-contactos/agregar-contactos.module').then( m => m.AgregarContactosPageModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'agregar-empleados',
    loadChildren: () => import('./pages/employee/agregar-employee/agregar-employee-routing.module').then( m => m.AgregarEmployeePageRoutingModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'agregar-ganado',
    loadChildren: () => import('./pages/won/agregar-won/agregar-won-routing.module').then( m => m.AgregarWonPageRoutingModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'agregar-granja',
    loadChildren: () => import('./pages/property/agregar-property/agregar-property-routing.module').then( m => m.AgregarPropertyPageRoutingModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'agregar-siembra',
    loadChildren: () => import('./pages/sowing/agregar-sowing/agregar-sowing-routing.module').then( m => m.AgregarSowingPageRoutingModule),
    canActivate: [NoIngresadoGuard],
    data: {
      role: 'ADMIN'
    }
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


