import { Injectable } from "@angular/core";
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from "rxjs";
import { finalize, tap } from 'rxjs/operators';

@Injectable()

export class CustomHttpInterceptor implements HttpInterceptor {
  
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        console.log("Interceptor", req);
        const newReq = req.clone({ url: "http://localhost:3000/" + req.url,
                                   headers:req.headers.set('AuthToken','320')
                                 })
        return next.handle(newReq).pipe(
            tap( 
                (success)=>{
                    console.log("success",success);
                    
                },
                (failure)=>{
                    console.log("failure",failure);
                }
            )
        );
    }
}


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          // Operation failed; error is an HttpErrorResponse
          error: (error) => (ok = 'failed')
        }),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
          console.log("final message",msg)
        })
      );
  }
}