import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

export interface owner{

  name: string;
  role: number;

}

@Injectable({
  providedIn: 'root'
})
export class LoginRolesService {
  currentOwner: owner;
  constructor() {
    
   }

login(name: string, pw: string): Promise<boolean>{
  return new Promise((resolve, reject) =>{
      if (name === 'admin' && pw === 'admin'){
        this.currentOwner = {
          name: name,
          role: 0

        }
        resolve(true);
      }else if (name === 'user' && pw === 'user'){
        this.currentOwner = {
          name: name,
          role: 1

        };
        resolve(true);
      }else{
        reject(false);
      }
    });

  }

  isLogeedIn(){
    return this.currentOwner != null;
  }

  logout(){
    this.currentOwner = null;
  }

  isAdmin(){
    return this.currentOwner.role ===0;
  }
}
