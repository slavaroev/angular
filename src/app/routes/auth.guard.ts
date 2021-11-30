import { Injectable } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  // @ts-ignore
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | undefined> | Observable<boolean | undefined> | boolean | null {
    return this.authService.isAuthenticated().then((isAuth) => {
      // @ts-ignore
      return this.authService.isAuthenticated().then(auth => {
        if(auth) {
          return true
        } else {
          this.router.navigate(['/'], {
            queryParams: {auth: false}
          })
        }
      });
    })
  }

  // @ts-ignore
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | undefined> | Observable<boolean | undefined> | undefined | null {
    // @ts-ignore
    return this.canActivate(route, state);
  }
}
