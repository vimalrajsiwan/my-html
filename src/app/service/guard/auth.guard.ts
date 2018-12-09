import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../common/common.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthGuard implements CanActivate {
  
  
  constructor(public commonService: CommonService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.commonService.isLoggedIn){
    return true;
      }
      else{
        return false;
      }
  }
}
