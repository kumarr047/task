import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChildGuard } from './admin-child.guard';
import { AdminGuard } from './admin.guard';
import { AppComponent } from './app.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    children: [

      {
        path: '',
        canActivateChild: [AdminChildGuard],
        children: [
          {
            path: 'list',
            component: UserlistComponent,

          }, {
            path: 'register',
            component: RegisterlistComponent,

          }, {
            path: 'edit',
            component: UpdatelistComponent,

          },
        ]
      }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
