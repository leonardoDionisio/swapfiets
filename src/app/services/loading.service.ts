import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loadingState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    loadingMap: Map<string, boolean> = new Map<string, boolean>();

    setLoading(loading: boolean, url: string): void {
        if (!url) {
            throw new Error('The requested URL must be provided to the LoadingService');
        }

        if (loading) {
            this.loadingMap.set(url, loading);
            this.loadingState.next(true);
        } else if (!loading && this.loadingMap.has(url)) {
            this.loadingMap.delete(url);
        }

        if (this.loadingMap.size === 0) {
            this.loadingState.next(false);
        }
    }
}
