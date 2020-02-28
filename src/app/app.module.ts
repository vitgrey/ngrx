import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserReducer } from './store/reducers/user.reducer';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserApiComponent } from './components/user-api/user-api.component';
import { TestEffects } from './store/effects/user.effect';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserListComponent,
    UserApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ users: UserReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TestEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
