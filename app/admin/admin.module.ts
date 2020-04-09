import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { AdminComponent } from './admin.component';
import { AddSongComponent } from './addsong/addsong.component';
import { AdminHomeComponent } from './adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    CommonModule,
   
    RouterModule.forChild([
      {
        path: '', component: AdminComponent,
        children: [
          
          { path: '', component: AdminHomeComponent }
          ,
          { path: 'add-song', component:  AddSongComponent}
           ,
          { path: 'add-login', component:  LoginComponent}
          
          ]
      }
  ])
  ],
  declarations: [
    AddSongComponent,
    AdminComponent,
    AdminHomeComponent,
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class AdminModule { }
