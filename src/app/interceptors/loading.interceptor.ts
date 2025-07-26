import { HttpInterceptorFn } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
 
  const spinner = inject(NgxSpinnerService)
 spinner.show();
  return next(req).pipe(finalize(()=>{
  spinner.hide();
  }))
};



