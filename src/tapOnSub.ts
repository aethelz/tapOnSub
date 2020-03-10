import { Observable, EMPTY, concat } from 'rxjs';
import { tap, concatWith } from 'rxjs/operators';


export function tapOnSub(start = () => {}, ...args: Parameters<typeof tap>) {
  return function tapOnSubImplementation<T>(source: Observable<T>): Observable<T> {
    return EMPTY.pipe(
      tap({ complete: start }),
      concatWith(source.pipe(tap<T>(...args)))
    );
  };
}

export function tapOnSubOld(start = () => {}, ...args: Parameters<typeof tap>) {
  return function tapOnSubImplementation<T>(source: Observable<T>): Observable<T> {
    return concat(
      EMPTY.pipe(
        tap({ complete: start }),
      ),
      source.pipe(tap<T>(...args)),
    );
  };
}
