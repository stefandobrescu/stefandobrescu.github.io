import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home-page.module';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DevlogPageComponent } from './devlog/feature/devlog-page/devlog-page.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SharedModule } from './shared/shared.module';
import { DevlogPageModule } from './devlog/devlog-page.module';
import { ContactPageModule } from './contact/contact-page.module';
import { AboutPageModule } from './about/about-page.module';
import { PortfolioPageModule } from './portfolio/portfolio-page.module';

export const firebaseConfig = {
  apiKey: "AIzaSyBqHfe0fzK-nkNr_aAoBuGJDkExVZquCh4",
  authDomain: "personal-website-e8af2.firebaseapp.com",
  databaseURL: "https://personal-website-e8af2-default-rtdb.firebaseio.com",
  projectId: "personal-website-e8af2",
  storageBucket: "personal-website-e8af2.appspot.com",
  messagingSenderId: "211554310243",
  appId: "1:211554310243:web:493675057f31c3c0da0056"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    AboutPageModule,
    PortfolioPageModule,
    SharedModule,
    ContactPageModule,
    DevlogPageModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
