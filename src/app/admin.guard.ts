import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../app/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  authenticationToken =true;
  authToken: any;

  constructor(private service : ApiService ){
     this.service.getApi().subscribe(data=>{
      //  console.log("authToken",data)
      //     this.authToken = data.getHeaders[''];
      //     console.log('AuthToken is ',this.authToken);
     })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.authenticationToken){
      console.log("Admin  Guard Works")
      return true;
    }else{
      return false;
    }
  
  }
  
}
