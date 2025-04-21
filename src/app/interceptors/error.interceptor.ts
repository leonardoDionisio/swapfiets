import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const snackbar = inject(MatSnackBar);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'An unknown error occurred';

            if (error.error instanceof ErrorEvent) {
                errorMessage = `Client Error: ${error.error.message}`;
            } else {
                errorMessage = `Something went wrong: Error ${error.status}`;
            }

            snackbar.open(errorMessage, '', {
                duration: 9000,
                verticalPosition: 'top',
                horizontalPosition: 'right',
            });
            return throwError(() => new Error(errorMessage));
        })
    );
};
