import { HttpRequest, HttpEvent, HttpHandlerFn} from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';


export function GeneralInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const loading$ = inject(LoadingService);
    loading$.setLoading(true, request.url);

    let modifiedRequest = request;

    if (request.method === 'GET') {
        const updatedParams = request.params.set('access_token', environment.bikeIndexToken);

        modifiedRequest = request.clone({
            params: updatedParams
        });
    }

    return next(modifiedRequest).pipe(
        finalize(() => loading$.setLoading(false, modifiedRequest.url))
    )
}
