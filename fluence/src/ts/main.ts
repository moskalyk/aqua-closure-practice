/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.12.0
 * @fluencelabs/aqua-to-js version: 0.1.0
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, CallParams as CallParams$$ } from '@fluencelabs/js-client';

import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client';

// Services
export interface GreeterDef {
    capitals: (name: string, callParams: CallParams$$<'name'>) => string | Promise<string>;
    say_hello: (name: string, callParams: CallParams$$<'name'>) => string | Promise<string>;
    semi: (name: string, callParams: CallParams$$<'name'>) => string | Promise<string>;
}
export function registerGreeter(service: GreeterDef): void;
export function registerGreeter(serviceId: string, service: GreeterDef): void;
export function registerGreeter(peer: IFluenceClient$$, service: GreeterDef): void;
export function registerGreeter(peer: IFluenceClient$$, serviceId: string, service: GreeterDef): void;
export function registerGreeter(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "greeter",
    "functions": {
        "fields": {
            "capitals": {
                "domain": {
                    "fields": {
                        "name": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "string",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "say_hello": {
                "domain": {
                    "fields": {
                        "name": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "string",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "semi": {
                "domain": {
                    "fields": {
                        "name": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "string",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}


// Functions
export const helloWorld_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
   )
   (new $status
    (new $res
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (xor
             (seq
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (fail :error:)
            )
            (new $compute
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (xor
                    (seq
                     (seq
                      (seq
                       (new $-ephemeral-stream-
                        (new #-ephemeral-canon-
                         (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                        )
                       )
                       (call -peer-arg- ("greeter" "capitals") [-name-arg-] ret)
                      )
                      (ap ret $compute)
                     )
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                    )
                    (seq
                     (seq
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                     )
                     (fail :error:)
                    )
                   )
                   (new $compute_test
                    (seq
                     (seq
                      (fold $compute compute_fold_var
                       (seq
                        (seq
                         (ap compute_fold_var $compute_test)
                         (canon %init_peer_id% $compute_test  #compute_iter_canon)
                        )
                        (xor
                         (match #compute_iter_canon.length 1
                          (null)
                         )
                         (next compute_fold_var)
                        )
                       )
                       (never)
                      )
                      (canon %init_peer_id% $compute_test  #compute_result_canon)
                     )
                     (ap #compute_result_canon compute_gate)
                    )
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (call -peer-arg- ("greeter" "say_hello") [compute_gate.$.[0]] ret-0)
                )
                (ap ret-0 $res)
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (new $compute_test-0
               (seq
                (seq
                 (fold $compute compute_fold_var-0
                  (seq
                   (seq
                    (ap compute_fold_var-0 $compute_test-0)
                    (canon %init_peer_id% $compute_test-0  #compute_iter_canon-0)
                   )
                   (xor
                    (match #compute_iter_canon-0.length 1
                     (null)
                    )
                    (next compute_fold_var-0)
                   )
                  )
                  (never)
                 )
                 (canon %init_peer_id% $compute_test-0  #compute_result_canon-0)
                )
                (ap #compute_result_canon-0 compute_gate-0)
               )
              )
             )
            )
           )
           (xor
            (seq
             (seq
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
              (call -peer-arg- ("greeter" "semi") [compute_gate-0.$.[0]] ret-1)
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (seq
             (seq
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (fail :error:)
            )
           )
          )
          (ap ret-1 $status)
         )
         (par
          (seq
           (call %init_peer_id% ("peer" "timeout") [2000 "timeout"] ret-2)
           (ap ret-2 $status)
          )
          (null)
         )
        )
        (new $status_test
         (seq
          (seq
           (fold $status status_fold_var
            (seq
             (seq
              (ap status_fold_var $status_test)
              (canon %init_peer_id% $status_test  #status_iter_canon)
             )
             (xor
              (match #status_iter_canon.length 1
               (null)
              )
              (next status_fold_var)
             )
            )
            (never)
           )
           (canon %init_peer_id% $status_test  #status_result_canon)
          )
          (ap #status_result_canon status_gate)
         )
        )
       )
       (new -if-error-
        (xor
         (match status_gate.$.[0] "timeout"
          (ap "err" $res)
         )
         (seq
          (ap :error: -if-error-)
          (xor
           (match :error:.$.error_code 10001
            (null)
           )
           (fail -if-error-)
          )
         )
        )
       )
      )
      (new $res_test
       (seq
        (seq
         (fold $res res_fold_var
          (seq
           (seq
            (ap res_fold_var $res_test)
            (canon %init_peer_id% $res_test  #res_iter_canon)
           )
           (xor
            (match #res_iter_canon.length 1
             (null)
            )
            (next res_fold_var)
           )
          )
          (never)
         )
         (canon %init_peer_id% $res_test  #res_result_canon)
        )
        (ap #res_result_canon res_gate)
       )
      )
     )
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [res_gate.$.[0]])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function helloWorld(
    name: string,
    peer: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(
    peer: IFluenceClient$$,
    name: string,
    peer: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorld",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                },
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorld_script
    );
}
