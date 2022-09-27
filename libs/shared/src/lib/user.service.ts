import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models';
import UserJson from '../../assets/data.json';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user = new BehaviorSubject(UserJson.user as User);

  getCurrentUser() {
    return this.user.asObservable();
  }
}
