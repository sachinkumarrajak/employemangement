import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { rootRouterConfig } from './app.routes';
// import { AngularFireModule } from 'angularfire2';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// import { FormsModule} from '@angular/forms';
// import { AppComponent } from './app.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeComponent } from './employees/employee/employee.component';
// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
// import { environment } from '../environments/environment';
import { EmployeesComponent } from './employees/employees.component';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    // BrowserAnimationsModule,
    // BrowserModule,
   // NoopAnimationsModule,
  ],
  imports: [
   // BrowserAnimationsModule,
     BrowserModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    FormsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ToastrModule.forRoot()
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
