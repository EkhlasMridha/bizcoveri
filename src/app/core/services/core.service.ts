import { Injectable, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { NavTracerService } from 'src/app/shared-services/utilities/nav-tracer.service';
import { RootlineProgressService } from 'src/app/shared-services/utilities/rootline-progress.service';
import { TokenService } from 'src/app/shared-services/utilities/token.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {

  private _iconService: IconService;
  private _formService: FormService;
  private _tokenService: TokenService;
  private _navTracerService: NavTracerService;
  private _rootlineProgress: RootlineProgressService;

  public get iconService(): IconService {
    if (!this._iconService) {
      this._iconService = this.injector.get(IconService);
    }
    return this._iconService;
  }

  public get formService() {
    if (!this._formService) {
      this._formService = this.injector.get(FormService);
    }
    return this._formService;
  }

  public get navTracerService() {
    if (!this._navTracerService) {
      this._navTracerService = this.injector.get(NavTracerService);
    }
    return this._navTracerService;
  }

  public get tokenService() {
    if (!this._tokenService) {
      this._tokenService = this.injector.get(TokenService);
    }
    return this._tokenService;
  }

  public get rootlineProgress() {
    if (!this._rootlineProgress) {
      this._rootlineProgress = this.injector.get(RootlineProgressService);
    }
    return this._rootlineProgress;
  }

  constructor (private injector: Injector) { }

  public rootlineProgressListener() {
    return this.rootlineProgress.loaderListener;
  }

  public startLoader() {
    this.rootlineProgress.startAppLoader();
  }

  public stopLoader() {
    this.rootlineProgress.stopAppLoader();
  }
}
