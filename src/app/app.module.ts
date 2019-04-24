import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherService } from './service/teacher.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    TeacherFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
