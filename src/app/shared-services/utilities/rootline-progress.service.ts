import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootlineProgressService {
  private isLoading: boolean;
  public loaderListener: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get loading(): boolean {
    return this.isLoading;
  }

  set loading(value: boolean) {
    this.isLoading = value;
    this.loaderListener.next(this.isLoading);
  }

  startAppLoader() {
    this.loading = true;
  }

  stopAppLoader() {
    this.loading = false;
  }
}
