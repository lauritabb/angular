import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { SeversComponent } from './severs/severs.component'; //tell typescript where to find the new component
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SeversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
