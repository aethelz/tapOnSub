# Better RxJS tap operator

## Why?

Built-in tap operator supports side effects for next, error and complete events.  
Cases arise when we need to add side effects on subscribe event as well,  
but cannot put them in subscribe method directyle (for example, useObservable React hook provides no such option).  
tapOnSub splices original observable with EMPTY via concat to allow for such behavior - EMPTY completes immediately and executes provided subscription side-effect.
