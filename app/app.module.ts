import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'splash', pathMatch: 'full' },
      { path: 'splash', component: SplashComponent },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
      { path: '**', component: NotFoundComponent }
    ], { enableTracing: true })],
  declarations: [AppComponent, SplashComponent, NotFoundComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
