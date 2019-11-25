import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SafeGuard implements CanActivate {
  result;
  constructor(private works: DataService,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = next.paramMap.get('id');
    if (!!this.checkParams(+id)) {
      return true;
    } else {
      this.router.navigate(['/work']);
      return false;
    }
  }

  checkParams(id: number) {
    this.result = this.works.works;
    return this.result.find(data => data.id === id);
  }
}
