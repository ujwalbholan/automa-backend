
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model APIKey
 * 
 */
export type APIKey = $Result.DefaultSelection<Prisma.$APIKeyPayload>
/**
 * Model Credit
 * 
 */
export type Credit = $Result.DefaultSelection<Prisma.$CreditPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model ExecutionLog
 * 
 */
export type ExecutionLog = $Result.DefaultSelection<Prisma.$ExecutionLogPayload>
/**
 * Model LogEntry
 * 
 */
export type LogEntry = $Result.DefaultSelection<Prisma.$LogEntryPayload>
/**
 * Model IntegrationToken
 * 
 */
export type IntegrationToken = $Result.DefaultSelection<Prisma.$IntegrationTokenPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aPIKey`: Exposes CRUD operations for the **APIKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more APIKeys
    * const aPIKeys = await prisma.aPIKey.findMany()
    * ```
    */
  get aPIKey(): Prisma.APIKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credit`: Exposes CRUD operations for the **Credit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credits
    * const credits = await prisma.credit.findMany()
    * ```
    */
  get credit(): Prisma.CreditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionLog`: Exposes CRUD operations for the **ExecutionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionLogs
    * const executionLogs = await prisma.executionLog.findMany()
    * ```
    */
  get executionLog(): Prisma.ExecutionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logEntry`: Exposes CRUD operations for the **LogEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogEntries
    * const logEntries = await prisma.logEntry.findMany()
    * ```
    */
  get logEntry(): Prisma.LogEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrationToken`: Exposes CRUD operations for the **IntegrationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegrationTokens
    * const integrationTokens = await prisma.integrationToken.findMany()
    * ```
    */
  get integrationToken(): Prisma.IntegrationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    APIKey: 'APIKey',
    Credit: 'Credit',
    Transaction: 'Transaction',
    Workflow: 'Workflow',
    Trigger: 'Trigger',
    Action: 'Action',
    ExecutionLog: 'ExecutionLog',
    LogEntry: 'LogEntry',
    IntegrationToken: 'IntegrationToken',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "aPIKey" | "credit" | "transaction" | "workflow" | "trigger" | "action" | "executionLog" | "logEntry" | "integrationToken" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      APIKey: {
        payload: Prisma.$APIKeyPayload<ExtArgs>
        fields: Prisma.APIKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.APIKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.APIKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          findFirst: {
            args: Prisma.APIKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.APIKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          findMany: {
            args: Prisma.APIKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          create: {
            args: Prisma.APIKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          createMany: {
            args: Prisma.APIKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.APIKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          delete: {
            args: Prisma.APIKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          update: {
            args: Prisma.APIKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          deleteMany: {
            args: Prisma.APIKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.APIKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.APIKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>[]
          }
          upsert: {
            args: Prisma.APIKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKeyPayload>
          }
          aggregate: {
            args: Prisma.APIKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAPIKey>
          }
          groupBy: {
            args: Prisma.APIKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<APIKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.APIKeyCountArgs<ExtArgs>
            result: $Utils.Optional<APIKeyCountAggregateOutputType> | number
          }
        }
      }
      Credit: {
        payload: Prisma.$CreditPayload<ExtArgs>
        fields: Prisma.CreditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findFirst: {
            args: Prisma.CreditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findMany: {
            args: Prisma.CreditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          create: {
            args: Prisma.CreditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          createMany: {
            args: Prisma.CreditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          delete: {
            args: Prisma.CreditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          update: {
            args: Prisma.CreditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          deleteMany: {
            args: Prisma.CreditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          upsert: {
            args: Prisma.CreditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          aggregate: {
            args: Prisma.CreditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredit>
          }
          groupBy: {
            args: Prisma.CreditGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      ExecutionLog: {
        payload: Prisma.$ExecutionLogPayload<ExtArgs>
        fields: Prisma.ExecutionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findFirst: {
            args: Prisma.ExecutionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findMany: {
            args: Prisma.ExecutionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          create: {
            args: Prisma.ExecutionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          createMany: {
            args: Prisma.ExecutionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          delete: {
            args: Prisma.ExecutionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          update: {
            args: Prisma.ExecutionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          aggregate: {
            args: Prisma.ExecutionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionLog>
          }
          groupBy: {
            args: Prisma.ExecutionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogCountAggregateOutputType> | number
          }
        }
      }
      LogEntry: {
        payload: Prisma.$LogEntryPayload<ExtArgs>
        fields: Prisma.LogEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          findFirst: {
            args: Prisma.LogEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          findMany: {
            args: Prisma.LogEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>[]
          }
          create: {
            args: Prisma.LogEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          createMany: {
            args: Prisma.LogEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>[]
          }
          delete: {
            args: Prisma.LogEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          update: {
            args: Prisma.LogEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          deleteMany: {
            args: Prisma.LogEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>[]
          }
          upsert: {
            args: Prisma.LogEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          aggregate: {
            args: Prisma.LogEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogEntry>
          }
          groupBy: {
            args: Prisma.LogEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LogEntryCountAggregateOutputType> | number
          }
        }
      }
      IntegrationToken: {
        payload: Prisma.$IntegrationTokenPayload<ExtArgs>
        fields: Prisma.IntegrationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>
          }
          findFirst: {
            args: Prisma.IntegrationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>
          }
          findMany: {
            args: Prisma.IntegrationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>[]
          }
          create: {
            args: Prisma.IntegrationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>
          }
          createMany: {
            args: Prisma.IntegrationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>[]
          }
          delete: {
            args: Prisma.IntegrationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>
          }
          update: {
            args: Prisma.IntegrationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationTokenPayload>
          }
          aggregate: {
            args: Prisma.IntegrationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrationToken>
          }
          groupBy: {
            args: Prisma.IntegrationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationTokenCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    aPIKey?: APIKeyOmit
    credit?: CreditOmit
    transaction?: TransactionOmit
    workflow?: WorkflowOmit
    trigger?: TriggerOmit
    action?: ActionOmit
    executionLog?: ExecutionLogOmit
    logEntry?: LogEntryOmit
    integrationToken?: IntegrationTokenOmit
    activityLog?: ActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Workflows: number
    Transactions: number
    APIKeys: number
    ActivityLogs: number
    IntegrationTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
    Transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    APIKeys?: boolean | UserCountOutputTypeCountAPIKeysArgs
    ActivityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    IntegrationTokens?: boolean | UserCountOutputTypeCountIntegrationTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAPIKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APIKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationTokenWhereInput
  }


  /**
   * Count Type APIKeyCountOutputType
   */

  export type APIKeyCountOutputType = {
    triggers: number
  }

  export type APIKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | APIKeyCountOutputTypeCountTriggersArgs
  }

  // Custom InputTypes
  /**
   * APIKeyCountOutputType without action
   */
  export type APIKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKeyCountOutputType
     */
    select?: APIKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * APIKeyCountOutputType without action
   */
  export type APIKeyCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    Triggers: number
    Actions: number
    ExecutionLogs: number
    apiKeys: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Triggers?: boolean | WorkflowCountOutputTypeCountTriggersArgs
    Actions?: boolean | WorkflowCountOutputTypeCountActionsArgs
    ExecutionLogs?: boolean | WorkflowCountOutputTypeCountExecutionLogsArgs
    apiKeys?: boolean | WorkflowCountOutputTypeCountApiKeysArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountExecutionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APIKeyWhereInput
  }


  /**
   * Count Type ExecutionLogCountOutputType
   */

  export type ExecutionLogCountOutputType = {
    LogEntries: number
  }

  export type ExecutionLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LogEntries?: boolean | ExecutionLogCountOutputTypeCountLogEntriesArgs
  }

  // Custom InputTypes
  /**
   * ExecutionLogCountOutputType without action
   */
  export type ExecutionLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLogCountOutputType
     */
    select?: ExecutionLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExecutionLogCountOutputType without action
   */
  export type ExecutionLogCountOutputTypeCountLogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    Workflows?: boolean | User$WorkflowsArgs<ExtArgs>
    Credit?: boolean | User$CreditArgs<ExtArgs>
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    APIKeys?: boolean | User$APIKeysArgs<ExtArgs>
    ActivityLogs?: boolean | User$ActivityLogsArgs<ExtArgs>
    IntegrationTokens?: boolean | User$IntegrationTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Workflows?: boolean | User$WorkflowsArgs<ExtArgs>
    Credit?: boolean | User$CreditArgs<ExtArgs>
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    APIKeys?: boolean | User$APIKeysArgs<ExtArgs>
    ActivityLogs?: boolean | User$ActivityLogsArgs<ExtArgs>
    IntegrationTokens?: boolean | User$IntegrationTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Workflows: Prisma.$WorkflowPayload<ExtArgs>[]
      Credit: Prisma.$CreditPayload<ExtArgs> | null
      Transactions: Prisma.$TransactionPayload<ExtArgs>[]
      APIKeys: Prisma.$APIKeyPayload<ExtArgs>[]
      ActivityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      IntegrationTokens: Prisma.$IntegrationTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Workflows<T extends User$WorkflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$WorkflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Credit<T extends User$CreditArgs<ExtArgs> = {}>(args?: Subset<T, User$CreditArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Transactions<T extends User$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    APIKeys<T extends User$APIKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$APIKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ActivityLogs<T extends User$ActivityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$ActivityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    IntegrationTokens<T extends User$IntegrationTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$IntegrationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Workflows
   */
  export type User$WorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * User.Credit
   */
  export type User$CreditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    where?: CreditWhereInput
  }

  /**
   * User.Transactions
   */
  export type User$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.APIKeys
   */
  export type User$APIKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    where?: APIKeyWhereInput
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    cursor?: APIKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * User.ActivityLogs
   */
  export type User$ActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.IntegrationTokens
   */
  export type User$IntegrationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    where?: IntegrationTokenWhereInput
    orderBy?: IntegrationTokenOrderByWithRelationInput | IntegrationTokenOrderByWithRelationInput[]
    cursor?: IntegrationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationTokenScalarFieldEnum | IntegrationTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model APIKey
   */

  export type AggregateAPIKey = {
    _count: APIKeyCountAggregateOutputType | null
    _min: APIKeyMinAggregateOutputType | null
    _max: APIKeyMaxAggregateOutputType | null
  }

  export type APIKeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    createdAt: Date | null
    isActive: boolean | null
    workflowId: string | null
  }

  export type APIKeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    createdAt: Date | null
    isActive: boolean | null
    workflowId: string | null
  }

  export type APIKeyCountAggregateOutputType = {
    id: number
    userId: number
    key: number
    createdAt: number
    isActive: number
    workflowId: number
    _all: number
  }


  export type APIKeyMinAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    createdAt?: true
    isActive?: true
    workflowId?: true
  }

  export type APIKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    createdAt?: true
    isActive?: true
    workflowId?: true
  }

  export type APIKeyCountAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    createdAt?: true
    isActive?: true
    workflowId?: true
    _all?: true
  }

  export type APIKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKey to aggregate.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned APIKeys
    **/
    _count?: true | APIKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: APIKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: APIKeyMaxAggregateInputType
  }

  export type GetAPIKeyAggregateType<T extends APIKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateAPIKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAPIKey[P]>
      : GetScalarType<T[P], AggregateAPIKey[P]>
  }




  export type APIKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APIKeyWhereInput
    orderBy?: APIKeyOrderByWithAggregationInput | APIKeyOrderByWithAggregationInput[]
    by: APIKeyScalarFieldEnum[] | APIKeyScalarFieldEnum
    having?: APIKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: APIKeyCountAggregateInputType | true
    _min?: APIKeyMinAggregateInputType
    _max?: APIKeyMaxAggregateInputType
  }

  export type APIKeyGroupByOutputType = {
    id: string
    userId: string
    key: string
    createdAt: Date
    isActive: boolean
    workflowId: string | null
    _count: APIKeyCountAggregateOutputType | null
    _min: APIKeyMinAggregateOutputType | null
    _max: APIKeyMaxAggregateOutputType | null
  }

  type GetAPIKeyGroupByPayload<T extends APIKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<APIKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof APIKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], APIKeyGroupByOutputType[P]>
            : GetScalarType<T[P], APIKeyGroupByOutputType[P]>
        }
      >
    >


  export type APIKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    createdAt?: boolean
    isActive?: boolean
    workflowId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | APIKey$workflowArgs<ExtArgs>
    triggers?: boolean | APIKey$triggersArgs<ExtArgs>
    _count?: boolean | APIKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    createdAt?: boolean
    isActive?: boolean
    workflowId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | APIKey$workflowArgs<ExtArgs>
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    createdAt?: boolean
    isActive?: boolean
    workflowId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | APIKey$workflowArgs<ExtArgs>
  }, ExtArgs["result"]["aPIKey"]>

  export type APIKeySelectScalar = {
    id?: boolean
    userId?: boolean
    key?: boolean
    createdAt?: boolean
    isActive?: boolean
    workflowId?: boolean
  }

  export type APIKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "key" | "createdAt" | "isActive" | "workflowId", ExtArgs["result"]["aPIKey"]>
  export type APIKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | APIKey$workflowArgs<ExtArgs>
    triggers?: boolean | APIKey$triggersArgs<ExtArgs>
    _count?: boolean | APIKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type APIKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | APIKey$workflowArgs<ExtArgs>
  }
  export type APIKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflow?: boolean | APIKey$workflowArgs<ExtArgs>
  }

  export type $APIKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "APIKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workflow: Prisma.$WorkflowPayload<ExtArgs> | null
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      key: string
      createdAt: Date
      isActive: boolean
      workflowId: string | null
    }, ExtArgs["result"]["aPIKey"]>
    composites: {}
  }

  type APIKeyGetPayload<S extends boolean | null | undefined | APIKeyDefaultArgs> = $Result.GetResult<Prisma.$APIKeyPayload, S>

  type APIKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<APIKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: APIKeyCountAggregateInputType | true
    }

  export interface APIKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['APIKey'], meta: { name: 'APIKey' } }
    /**
     * Find zero or one APIKey that matches the filter.
     * @param {APIKeyFindUniqueArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends APIKeyFindUniqueArgs>(args: SelectSubset<T, APIKeyFindUniqueArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one APIKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {APIKeyFindUniqueOrThrowArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends APIKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, APIKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindFirstArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends APIKeyFindFirstArgs>(args?: SelectSubset<T, APIKeyFindFirstArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindFirstOrThrowArgs} args - Arguments to find a APIKey
     * @example
     * // Get one APIKey
     * const aPIKey = await prisma.aPIKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends APIKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, APIKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more APIKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all APIKeys
     * const aPIKeys = await prisma.aPIKey.findMany()
     * 
     * // Get first 10 APIKeys
     * const aPIKeys = await prisma.aPIKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends APIKeyFindManyArgs>(args?: SelectSubset<T, APIKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a APIKey.
     * @param {APIKeyCreateArgs} args - Arguments to create a APIKey.
     * @example
     * // Create one APIKey
     * const APIKey = await prisma.aPIKey.create({
     *   data: {
     *     // ... data to create a APIKey
     *   }
     * })
     * 
     */
    create<T extends APIKeyCreateArgs>(args: SelectSubset<T, APIKeyCreateArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many APIKeys.
     * @param {APIKeyCreateManyArgs} args - Arguments to create many APIKeys.
     * @example
     * // Create many APIKeys
     * const aPIKey = await prisma.aPIKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends APIKeyCreateManyArgs>(args?: SelectSubset<T, APIKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many APIKeys and returns the data saved in the database.
     * @param {APIKeyCreateManyAndReturnArgs} args - Arguments to create many APIKeys.
     * @example
     * // Create many APIKeys
     * const aPIKey = await prisma.aPIKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many APIKeys and only return the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends APIKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, APIKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a APIKey.
     * @param {APIKeyDeleteArgs} args - Arguments to delete one APIKey.
     * @example
     * // Delete one APIKey
     * const APIKey = await prisma.aPIKey.delete({
     *   where: {
     *     // ... filter to delete one APIKey
     *   }
     * })
     * 
     */
    delete<T extends APIKeyDeleteArgs>(args: SelectSubset<T, APIKeyDeleteArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one APIKey.
     * @param {APIKeyUpdateArgs} args - Arguments to update one APIKey.
     * @example
     * // Update one APIKey
     * const aPIKey = await prisma.aPIKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends APIKeyUpdateArgs>(args: SelectSubset<T, APIKeyUpdateArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more APIKeys.
     * @param {APIKeyDeleteManyArgs} args - Arguments to filter APIKeys to delete.
     * @example
     * // Delete a few APIKeys
     * const { count } = await prisma.aPIKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends APIKeyDeleteManyArgs>(args?: SelectSubset<T, APIKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many APIKeys
     * const aPIKey = await prisma.aPIKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends APIKeyUpdateManyArgs>(args: SelectSubset<T, APIKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKeys and returns the data updated in the database.
     * @param {APIKeyUpdateManyAndReturnArgs} args - Arguments to update many APIKeys.
     * @example
     * // Update many APIKeys
     * const aPIKey = await prisma.aPIKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more APIKeys and only return the `id`
     * const aPIKeyWithIdOnly = await prisma.aPIKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends APIKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, APIKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one APIKey.
     * @param {APIKeyUpsertArgs} args - Arguments to update or create a APIKey.
     * @example
     * // Update or create a APIKey
     * const aPIKey = await prisma.aPIKey.upsert({
     *   create: {
     *     // ... data to create a APIKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the APIKey we want to update
     *   }
     * })
     */
    upsert<T extends APIKeyUpsertArgs>(args: SelectSubset<T, APIKeyUpsertArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of APIKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyCountArgs} args - Arguments to filter APIKeys to count.
     * @example
     * // Count the number of APIKeys
     * const count = await prisma.aPIKey.count({
     *   where: {
     *     // ... the filter for the APIKeys we want to count
     *   }
     * })
    **/
    count<T extends APIKeyCountArgs>(
      args?: Subset<T, APIKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], APIKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a APIKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends APIKeyAggregateArgs>(args: Subset<T, APIKeyAggregateArgs>): Prisma.PrismaPromise<GetAPIKeyAggregateType<T>>

    /**
     * Group by APIKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends APIKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: APIKeyGroupByArgs['orderBy'] }
        : { orderBy?: APIKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, APIKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAPIKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the APIKey model
   */
  readonly fields: APIKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for APIKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__APIKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflow<T extends APIKey$workflowArgs<ExtArgs> = {}>(args?: Subset<T, APIKey$workflowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    triggers<T extends APIKey$triggersArgs<ExtArgs> = {}>(args?: Subset<T, APIKey$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the APIKey model
   */
  interface APIKeyFieldRefs {
    readonly id: FieldRef<"APIKey", 'String'>
    readonly userId: FieldRef<"APIKey", 'String'>
    readonly key: FieldRef<"APIKey", 'String'>
    readonly createdAt: FieldRef<"APIKey", 'DateTime'>
    readonly isActive: FieldRef<"APIKey", 'Boolean'>
    readonly workflowId: FieldRef<"APIKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * APIKey findUnique
   */
  export type APIKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey findUniqueOrThrow
   */
  export type APIKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey findFirst
   */
  export type APIKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKeys.
     */
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey findFirstOrThrow
   */
  export type APIKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKey to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKeys.
     */
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey findMany
   */
  export type APIKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter, which APIKeys to fetch.
     */
    where?: APIKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKeys to fetch.
     */
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing APIKeys.
     */
    cursor?: APIKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKeys.
     */
    skip?: number
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * APIKey create
   */
  export type APIKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a APIKey.
     */
    data: XOR<APIKeyCreateInput, APIKeyUncheckedCreateInput>
  }

  /**
   * APIKey createMany
   */
  export type APIKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many APIKeys.
     */
    data: APIKeyCreateManyInput | APIKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * APIKey createManyAndReturn
   */
  export type APIKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data used to create many APIKeys.
     */
    data: APIKeyCreateManyInput | APIKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * APIKey update
   */
  export type APIKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a APIKey.
     */
    data: XOR<APIKeyUpdateInput, APIKeyUncheckedUpdateInput>
    /**
     * Choose, which APIKey to update.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey updateMany
   */
  export type APIKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update APIKeys.
     */
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyInput>
    /**
     * Filter which APIKeys to update
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to update.
     */
    limit?: number
  }

  /**
   * APIKey updateManyAndReturn
   */
  export type APIKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * The data used to update APIKeys.
     */
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyInput>
    /**
     * Filter which APIKeys to update
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * APIKey upsert
   */
  export type APIKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the APIKey to update in case it exists.
     */
    where: APIKeyWhereUniqueInput
    /**
     * In case the APIKey found by the `where` argument doesn't exist, create a new APIKey with this data.
     */
    create: XOR<APIKeyCreateInput, APIKeyUncheckedCreateInput>
    /**
     * In case the APIKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<APIKeyUpdateInput, APIKeyUncheckedUpdateInput>
  }

  /**
   * APIKey delete
   */
  export type APIKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    /**
     * Filter which APIKey to delete.
     */
    where: APIKeyWhereUniqueInput
  }

  /**
   * APIKey deleteMany
   */
  export type APIKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKeys to delete
     */
    where?: APIKeyWhereInput
    /**
     * Limit how many APIKeys to delete.
     */
    limit?: number
  }

  /**
   * APIKey.workflow
   */
  export type APIKey$workflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
  }

  /**
   * APIKey.triggers
   */
  export type APIKey$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * APIKey without action
   */
  export type APIKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
  }


  /**
   * Model Credit
   */

  export type AggregateCredit = {
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  export type CreditAvgAggregateOutputType = {
    balance: number | null
  }

  export type CreditSumAggregateOutputType = {
    balance: number | null
  }

  export type CreditMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
  }

  export type CreditMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
  }

  export type CreditCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    _all: number
  }


  export type CreditAvgAggregateInputType = {
    balance?: true
  }

  export type CreditSumAggregateInputType = {
    balance?: true
  }

  export type CreditMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type CreditMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type CreditCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    _all?: true
  }

  export type CreditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credit to aggregate.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credits
    **/
    _count?: true | CreditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditMaxAggregateInputType
  }

  export type GetCreditAggregateType<T extends CreditAggregateArgs> = {
        [P in keyof T & keyof AggregateCredit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredit[P]>
      : GetScalarType<T[P], AggregateCredit[P]>
  }




  export type CreditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditWhereInput
    orderBy?: CreditOrderByWithAggregationInput | CreditOrderByWithAggregationInput[]
    by: CreditScalarFieldEnum[] | CreditScalarFieldEnum
    having?: CreditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCountAggregateInputType | true
    _avg?: CreditAvgAggregateInputType
    _sum?: CreditSumAggregateInputType
    _min?: CreditMinAggregateInputType
    _max?: CreditMaxAggregateInputType
  }

  export type CreditGroupByOutputType = {
    id: string
    userId: string
    balance: number
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  type GetCreditGroupByPayload<T extends CreditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditGroupByOutputType[P]>
            : GetScalarType<T[P], CreditGroupByOutputType[P]>
        }
      >
    >


  export type CreditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
  }

  export type CreditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance", ExtArgs["result"]["credit"]>
  export type CreditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balance: number
    }, ExtArgs["result"]["credit"]>
    composites: {}
  }

  type CreditGetPayload<S extends boolean | null | undefined | CreditDefaultArgs> = $Result.GetResult<Prisma.$CreditPayload, S>

  type CreditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCountAggregateInputType | true
    }

  export interface CreditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credit'], meta: { name: 'Credit' } }
    /**
     * Find zero or one Credit that matches the filter.
     * @param {CreditFindUniqueArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditFindUniqueArgs>(args: SelectSubset<T, CreditFindUniqueArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditFindUniqueOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditFindFirstArgs>(args?: SelectSubset<T, CreditFindFirstArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credits
     * const credits = await prisma.credit.findMany()
     * 
     * // Get first 10 Credits
     * const credits = await prisma.credit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditWithIdOnly = await prisma.credit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditFindManyArgs>(args?: SelectSubset<T, CreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credit.
     * @param {CreditCreateArgs} args - Arguments to create a Credit.
     * @example
     * // Create one Credit
     * const Credit = await prisma.credit.create({
     *   data: {
     *     // ... data to create a Credit
     *   }
     * })
     * 
     */
    create<T extends CreditCreateArgs>(args: SelectSubset<T, CreditCreateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credits.
     * @param {CreditCreateManyArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCreateManyArgs>(args?: SelectSubset<T, CreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credits and returns the data saved in the database.
     * @param {CreditCreateManyAndReturnArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credit.
     * @param {CreditDeleteArgs} args - Arguments to delete one Credit.
     * @example
     * // Delete one Credit
     * const Credit = await prisma.credit.delete({
     *   where: {
     *     // ... filter to delete one Credit
     *   }
     * })
     * 
     */
    delete<T extends CreditDeleteArgs>(args: SelectSubset<T, CreditDeleteArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credit.
     * @param {CreditUpdateArgs} args - Arguments to update one Credit.
     * @example
     * // Update one Credit
     * const credit = await prisma.credit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditUpdateArgs>(args: SelectSubset<T, CreditUpdateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credits.
     * @param {CreditDeleteManyArgs} args - Arguments to filter Credits to delete.
     * @example
     * // Delete a few Credits
     * const { count } = await prisma.credit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditDeleteManyArgs>(args?: SelectSubset<T, CreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditUpdateManyArgs>(args: SelectSubset<T, CreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credits and returns the data updated in the database.
     * @param {CreditUpdateManyAndReturnArgs} args - Arguments to update many Credits.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credit.
     * @param {CreditUpsertArgs} args - Arguments to update or create a Credit.
     * @example
     * // Update or create a Credit
     * const credit = await prisma.credit.upsert({
     *   create: {
     *     // ... data to create a Credit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credit we want to update
     *   }
     * })
     */
    upsert<T extends CreditUpsertArgs>(args: SelectSubset<T, CreditUpsertArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCountArgs} args - Arguments to filter Credits to count.
     * @example
     * // Count the number of Credits
     * const count = await prisma.credit.count({
     *   where: {
     *     // ... the filter for the Credits we want to count
     *   }
     * })
    **/
    count<T extends CreditCountArgs>(
      args?: Subset<T, CreditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditAggregateArgs>(args: Subset<T, CreditAggregateArgs>): Prisma.PrismaPromise<GetCreditAggregateType<T>>

    /**
     * Group by Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditGroupByArgs['orderBy'] }
        : { orderBy?: CreditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credit model
   */
  readonly fields: CreditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Credit model
   */
  interface CreditFieldRefs {
    readonly id: FieldRef<"Credit", 'String'>
    readonly userId: FieldRef<"Credit", 'String'>
    readonly balance: FieldRef<"Credit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Credit findUnique
   */
  export type CreditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findUniqueOrThrow
   */
  export type CreditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findFirst
   */
  export type CreditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findFirstOrThrow
   */
  export type CreditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findMany
   */
  export type CreditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credits to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit create
   */
  export type CreditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to create a Credit.
     */
    data: XOR<CreditCreateInput, CreditUncheckedCreateInput>
  }

  /**
   * Credit createMany
   */
  export type CreditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credits.
     */
    data: CreditCreateManyInput | CreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credit createManyAndReturn
   */
  export type CreditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * The data used to create many Credits.
     */
    data: CreditCreateManyInput | CreditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credit update
   */
  export type CreditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to update a Credit.
     */
    data: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
    /**
     * Choose, which Credit to update.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit updateMany
   */
  export type CreditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credits.
     */
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyInput>
    /**
     * Filter which Credits to update
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to update.
     */
    limit?: number
  }

  /**
   * Credit updateManyAndReturn
   */
  export type CreditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * The data used to update Credits.
     */
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyInput>
    /**
     * Filter which Credits to update
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credit upsert
   */
  export type CreditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The filter to search for the Credit to update in case it exists.
     */
    where: CreditWhereUniqueInput
    /**
     * In case the Credit found by the `where` argument doesn't exist, create a new Credit with this data.
     */
    create: XOR<CreditCreateInput, CreditUncheckedCreateInput>
    /**
     * In case the Credit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
  }

  /**
   * Credit delete
   */
  export type CreditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter which Credit to delete.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit deleteMany
   */
  export type CreditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credits to delete
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to delete.
     */
    limit?: number
  }

  /**
   * Credit without action
   */
  export type CreditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    amount: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    type: string
    amount: number
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    creditsRequired: number | null
    version: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    creditsRequired: number | null
    version: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    creditsRequired: number | null
    version: number | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    creditsRequired: number | null
    version: number | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    creditsRequired: number
    version: number
    isActive: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    creditsRequired?: true
    version?: true
  }

  export type WorkflowSumAggregateInputType = {
    creditsRequired?: true
    version?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    creditsRequired?: true
    version?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    creditsRequired?: true
    version?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    creditsRequired?: true
    version?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    userId: string
    name: string
    creditsRequired: number
    version: number
    isActive: boolean
    isDeleted: boolean
    createdAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    creditsRequired?: boolean
    version?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Triggers?: boolean | Workflow$TriggersArgs<ExtArgs>
    Actions?: boolean | Workflow$ActionsArgs<ExtArgs>
    ExecutionLogs?: boolean | Workflow$ExecutionLogsArgs<ExtArgs>
    apiKeys?: boolean | Workflow$apiKeysArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    creditsRequired?: boolean
    version?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    creditsRequired?: boolean
    version?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    creditsRequired?: boolean
    version?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "creditsRequired" | "version" | "isActive" | "isDeleted" | "createdAt", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Triggers?: boolean | Workflow$TriggersArgs<ExtArgs>
    Actions?: boolean | Workflow$ActionsArgs<ExtArgs>
    ExecutionLogs?: boolean | Workflow$ExecutionLogsArgs<ExtArgs>
    apiKeys?: boolean | Workflow$apiKeysArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Triggers: Prisma.$TriggerPayload<ExtArgs>[]
      Actions: Prisma.$ActionPayload<ExtArgs>[]
      ExecutionLogs: Prisma.$ExecutionLogPayload<ExtArgs>[]
      apiKeys: Prisma.$APIKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      creditsRequired: number
      version: number
      isActive: boolean
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Triggers<T extends Workflow$TriggersArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$TriggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Actions<T extends Workflow$ActionsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$ActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ExecutionLogs<T extends Workflow$ExecutionLogsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$ExecutionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Workflow$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly userId: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly creditsRequired: FieldRef<"Workflow", 'Int'>
    readonly version: FieldRef<"Workflow", 'Int'>
    readonly isActive: FieldRef<"Workflow", 'Boolean'>
    readonly isDeleted: FieldRef<"Workflow", 'Boolean'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.Triggers
   */
  export type Workflow$TriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Workflow.Actions
   */
  export type Workflow$ActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Workflow.ExecutionLogs
   */
  export type Workflow$ExecutionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    cursor?: ExecutionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * Workflow.apiKeys
   */
  export type Workflow$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    where?: APIKeyWhereInput
    orderBy?: APIKeyOrderByWithRelationInput | APIKeyOrderByWithRelationInput[]
    cursor?: APIKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: APIKeyScalarFieldEnum | APIKeyScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    eventType: string | null
    cronSchedule: string | null
    webhookURL: string | null
    apiKeyId: string | null
    isDeleted: boolean | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    eventType: string | null
    cronSchedule: string | null
    webhookURL: string | null
    apiKeyId: string | null
    isDeleted: boolean | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    workflowId: number
    eventType: number
    cronSchedule: number
    webhookURL: number
    apiKeyId: number
    isDeleted: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    workflowId?: true
    eventType?: true
    cronSchedule?: true
    webhookURL?: true
    apiKeyId?: true
    isDeleted?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    workflowId?: true
    eventType?: true
    cronSchedule?: true
    webhookURL?: true
    apiKeyId?: true
    isDeleted?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    workflowId?: true
    eventType?: true
    cronSchedule?: true
    webhookURL?: true
    apiKeyId?: true
    isDeleted?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    workflowId: string
    eventType: string
    cronSchedule: string | null
    webhookURL: string | null
    apiKeyId: string | null
    isDeleted: boolean
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    eventType?: boolean
    cronSchedule?: boolean
    webhookURL?: boolean
    apiKeyId?: boolean
    isDeleted?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    apiKey?: boolean | Trigger$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    eventType?: boolean
    cronSchedule?: boolean
    webhookURL?: boolean
    apiKeyId?: boolean
    isDeleted?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    apiKey?: boolean | Trigger$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    eventType?: boolean
    cronSchedule?: boolean
    webhookURL?: boolean
    apiKeyId?: boolean
    isDeleted?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    apiKey?: boolean | Trigger$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    workflowId?: boolean
    eventType?: boolean
    cronSchedule?: boolean
    webhookURL?: boolean
    apiKeyId?: boolean
    isDeleted?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "eventType" | "cronSchedule" | "webhookURL" | "apiKeyId" | "isDeleted", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    apiKey?: boolean | Trigger$apiKeyArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    apiKey?: boolean | Trigger$apiKeyArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    apiKey?: boolean | Trigger$apiKeyArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      apiKey: Prisma.$APIKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      eventType: string
      cronSchedule: string | null
      webhookURL: string | null
      apiKeyId: string | null
      isDeleted: boolean
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiKey<T extends Trigger$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, Trigger$apiKeyArgs<ExtArgs>>): Prisma__APIKeyClient<$Result.GetResult<Prisma.$APIKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly workflowId: FieldRef<"Trigger", 'String'>
    readonly eventType: FieldRef<"Trigger", 'String'>
    readonly cronSchedule: FieldRef<"Trigger", 'String'>
    readonly webhookURL: FieldRef<"Trigger", 'String'>
    readonly apiKeyId: FieldRef<"Trigger", 'String'>
    readonly isDeleted: FieldRef<"Trigger", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger.apiKey
   */
  export type Trigger$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKey
     */
    select?: APIKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKey
     */
    omit?: APIKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: APIKeyInclude<ExtArgs> | null
    where?: APIKeyWhereInput
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    actionType: string | null
    isDeleted: boolean | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    actionType: string | null
    isDeleted: boolean | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    workflowId: number
    actionType: number
    config: number
    isDeleted: number
    _all: number
  }


  export type ActionMinAggregateInputType = {
    id?: true
    workflowId?: true
    actionType?: true
    isDeleted?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    actionType?: true
    isDeleted?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    workflowId?: true
    actionType?: true
    config?: true
    isDeleted?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    workflowId: string
    actionType: string
    config: JsonValue
    isDeleted: boolean
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    actionType?: boolean
    config?: boolean
    isDeleted?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    actionType?: boolean
    config?: boolean
    isDeleted?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    actionType?: boolean
    config?: boolean
    isDeleted?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    actionType?: boolean
    config?: boolean
    isDeleted?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "actionType" | "config" | "isDeleted", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      actionType: string
      config: Prisma.JsonValue
      isDeleted: boolean
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly workflowId: FieldRef<"Action", 'String'>
    readonly actionType: FieldRef<"Action", 'String'>
    readonly config: FieldRef<"Action", 'Json'>
    readonly isDeleted: FieldRef<"Action", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionLog
   */

  export type AggregateExecutionLog = {
    _count: ExecutionLogCountAggregateOutputType | null
    _avg: ExecutionLogAvgAggregateOutputType | null
    _sum: ExecutionLogSumAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  export type ExecutionLogAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type ExecutionLogSumAggregateOutputType = {
    retryCount: number | null
  }

  export type ExecutionLogMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    status: string | null
    executedAt: Date | null
    error: string | null
    retryCount: number | null
  }

  export type ExecutionLogMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    status: string | null
    executedAt: Date | null
    error: string | null
    retryCount: number | null
  }

  export type ExecutionLogCountAggregateOutputType = {
    id: number
    workflowId: number
    status: number
    executedAt: number
    error: number
    retryCount: number
    _all: number
  }


  export type ExecutionLogAvgAggregateInputType = {
    retryCount?: true
  }

  export type ExecutionLogSumAggregateInputType = {
    retryCount?: true
  }

  export type ExecutionLogMinAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
    executedAt?: true
    error?: true
    retryCount?: true
  }

  export type ExecutionLogMaxAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
    executedAt?: true
    error?: true
    retryCount?: true
  }

  export type ExecutionLogCountAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
    executedAt?: true
    error?: true
    retryCount?: true
    _all?: true
  }

  export type ExecutionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLog to aggregate.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionLogs
    **/
    _count?: true | ExecutionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type GetExecutionLogAggregateType<T extends ExecutionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionLog[P]>
      : GetScalarType<T[P], AggregateExecutionLog[P]>
  }




  export type ExecutionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithAggregationInput | ExecutionLogOrderByWithAggregationInput[]
    by: ExecutionLogScalarFieldEnum[] | ExecutionLogScalarFieldEnum
    having?: ExecutionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionLogCountAggregateInputType | true
    _avg?: ExecutionLogAvgAggregateInputType
    _sum?: ExecutionLogSumAggregateInputType
    _min?: ExecutionLogMinAggregateInputType
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type ExecutionLogGroupByOutputType = {
    id: string
    workflowId: string
    status: string
    executedAt: Date
    error: string | null
    retryCount: number
    _count: ExecutionLogCountAggregateOutputType | null
    _avg: ExecutionLogAvgAggregateOutputType | null
    _sum: ExecutionLogSumAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  type GetExecutionLogGroupByPayload<T extends ExecutionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    executedAt?: boolean
    error?: boolean
    retryCount?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    LogEntries?: boolean | ExecutionLog$LogEntriesArgs<ExtArgs>
    _count?: boolean | ExecutionLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    executedAt?: boolean
    error?: boolean
    retryCount?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    executedAt?: boolean
    error?: boolean
    retryCount?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectScalar = {
    id?: boolean
    workflowId?: boolean
    status?: boolean
    executedAt?: boolean
    error?: boolean
    retryCount?: boolean
  }

  export type ExecutionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "status" | "executedAt" | "error" | "retryCount", ExtArgs["result"]["executionLog"]>
  export type ExecutionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    LogEntries?: boolean | ExecutionLog$LogEntriesArgs<ExtArgs>
    _count?: boolean | ExecutionLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExecutionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type ExecutionLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $ExecutionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionLog"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      LogEntries: Prisma.$LogEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      status: string
      executedAt: Date
      error: string | null
      retryCount: number
    }, ExtArgs["result"]["executionLog"]>
    composites: {}
  }

  type ExecutionLogGetPayload<S extends boolean | null | undefined | ExecutionLogDefaultArgs> = $Result.GetResult<Prisma.$ExecutionLogPayload, S>

  type ExecutionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionLogCountAggregateInputType | true
    }

  export interface ExecutionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionLog'], meta: { name: 'ExecutionLog' } }
    /**
     * Find zero or one ExecutionLog that matches the filter.
     * @param {ExecutionLogFindUniqueArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionLogFindUniqueArgs>(args: SelectSubset<T, ExecutionLogFindUniqueArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionLogFindUniqueOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionLogFindFirstArgs>(args?: SelectSubset<T, ExecutionLogFindFirstArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany()
     * 
     * // Get first 10 ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionLogFindManyArgs>(args?: SelectSubset<T, ExecutionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionLog.
     * @param {ExecutionLogCreateArgs} args - Arguments to create a ExecutionLog.
     * @example
     * // Create one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.create({
     *   data: {
     *     // ... data to create a ExecutionLog
     *   }
     * })
     * 
     */
    create<T extends ExecutionLogCreateArgs>(args: SelectSubset<T, ExecutionLogCreateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionLogs.
     * @param {ExecutionLogCreateManyArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionLogCreateManyArgs>(args?: SelectSubset<T, ExecutionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionLogs and returns the data saved in the database.
     * @param {ExecutionLogCreateManyAndReturnArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionLog.
     * @param {ExecutionLogDeleteArgs} args - Arguments to delete one ExecutionLog.
     * @example
     * // Delete one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.delete({
     *   where: {
     *     // ... filter to delete one ExecutionLog
     *   }
     * })
     * 
     */
    delete<T extends ExecutionLogDeleteArgs>(args: SelectSubset<T, ExecutionLogDeleteArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionLog.
     * @param {ExecutionLogUpdateArgs} args - Arguments to update one ExecutionLog.
     * @example
     * // Update one ExecutionLog
     * const executionLog = await prisma.executionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionLogUpdateArgs>(args: SelectSubset<T, ExecutionLogUpdateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionLogs.
     * @param {ExecutionLogDeleteManyArgs} args - Arguments to filter ExecutionLogs to delete.
     * @example
     * // Delete a few ExecutionLogs
     * const { count } = await prisma.executionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionLogDeleteManyArgs>(args?: SelectSubset<T, ExecutionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionLogUpdateManyArgs>(args: SelectSubset<T, ExecutionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs and returns the data updated in the database.
     * @param {ExecutionLogUpdateManyAndReturnArgs} args - Arguments to update many ExecutionLogs.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecutionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionLog.
     * @param {ExecutionLogUpsertArgs} args - Arguments to update or create a ExecutionLog.
     * @example
     * // Update or create a ExecutionLog
     * const executionLog = await prisma.executionLog.upsert({
     *   create: {
     *     // ... data to create a ExecutionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionLog we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionLogUpsertArgs>(args: SelectSubset<T, ExecutionLogUpsertArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogCountArgs} args - Arguments to filter ExecutionLogs to count.
     * @example
     * // Count the number of ExecutionLogs
     * const count = await prisma.executionLog.count({
     *   where: {
     *     // ... the filter for the ExecutionLogs we want to count
     *   }
     * })
    **/
    count<T extends ExecutionLogCountArgs>(
      args?: Subset<T, ExecutionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionLogAggregateArgs>(args: Subset<T, ExecutionLogAggregateArgs>): Prisma.PrismaPromise<GetExecutionLogAggregateType<T>>

    /**
     * Group by ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionLogGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionLog model
   */
  readonly fields: ExecutionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    LogEntries<T extends ExecutionLog$LogEntriesArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionLog$LogEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExecutionLog model
   */
  interface ExecutionLogFieldRefs {
    readonly id: FieldRef<"ExecutionLog", 'String'>
    readonly workflowId: FieldRef<"ExecutionLog", 'String'>
    readonly status: FieldRef<"ExecutionLog", 'String'>
    readonly executedAt: FieldRef<"ExecutionLog", 'DateTime'>
    readonly error: FieldRef<"ExecutionLog", 'String'>
    readonly retryCount: FieldRef<"ExecutionLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionLog findUnique
   */
  export type ExecutionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findUniqueOrThrow
   */
  export type ExecutionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findFirst
   */
  export type ExecutionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findFirstOrThrow
   */
  export type ExecutionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findMany
   */
  export type ExecutionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLogs to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog create
   */
  export type ExecutionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionLog.
     */
    data: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
  }

  /**
   * ExecutionLog createMany
   */
  export type ExecutionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionLog createManyAndReturn
   */
  export type ExecutionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog update
   */
  export type ExecutionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionLog.
     */
    data: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
    /**
     * Choose, which ExecutionLog to update.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog updateMany
   */
  export type ExecutionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to update.
     */
    limit?: number
  }

  /**
   * ExecutionLog updateManyAndReturn
   */
  export type ExecutionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog upsert
   */
  export type ExecutionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionLog to update in case it exists.
     */
    where: ExecutionLogWhereUniqueInput
    /**
     * In case the ExecutionLog found by the `where` argument doesn't exist, create a new ExecutionLog with this data.
     */
    create: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
    /**
     * In case the ExecutionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
  }

  /**
   * ExecutionLog delete
   */
  export type ExecutionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter which ExecutionLog to delete.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog deleteMany
   */
  export type ExecutionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLogs to delete
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to delete.
     */
    limit?: number
  }

  /**
   * ExecutionLog.LogEntries
   */
  export type ExecutionLog$LogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    where?: LogEntryWhereInput
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    cursor?: LogEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogEntryScalarFieldEnum | LogEntryScalarFieldEnum[]
  }

  /**
   * ExecutionLog without action
   */
  export type ExecutionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
  }


  /**
   * Model LogEntry
   */

  export type AggregateLogEntry = {
    _count: LogEntryCountAggregateOutputType | null
    _min: LogEntryMinAggregateOutputType | null
    _max: LogEntryMaxAggregateOutputType | null
  }

  export type LogEntryMinAggregateOutputType = {
    id: string | null
    executionLogId: string | null
    message: string | null
    level: string | null
    timestamp: Date | null
  }

  export type LogEntryMaxAggregateOutputType = {
    id: string | null
    executionLogId: string | null
    message: string | null
    level: string | null
    timestamp: Date | null
  }

  export type LogEntryCountAggregateOutputType = {
    id: number
    executionLogId: number
    message: number
    level: number
    timestamp: number
    _all: number
  }


  export type LogEntryMinAggregateInputType = {
    id?: true
    executionLogId?: true
    message?: true
    level?: true
    timestamp?: true
  }

  export type LogEntryMaxAggregateInputType = {
    id?: true
    executionLogId?: true
    message?: true
    level?: true
    timestamp?: true
  }

  export type LogEntryCountAggregateInputType = {
    id?: true
    executionLogId?: true
    message?: true
    level?: true
    timestamp?: true
    _all?: true
  }

  export type LogEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogEntry to aggregate.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogEntries
    **/
    _count?: true | LogEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogEntryMaxAggregateInputType
  }

  export type GetLogEntryAggregateType<T extends LogEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLogEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogEntry[P]>
      : GetScalarType<T[P], AggregateLogEntry[P]>
  }




  export type LogEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogEntryWhereInput
    orderBy?: LogEntryOrderByWithAggregationInput | LogEntryOrderByWithAggregationInput[]
    by: LogEntryScalarFieldEnum[] | LogEntryScalarFieldEnum
    having?: LogEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogEntryCountAggregateInputType | true
    _min?: LogEntryMinAggregateInputType
    _max?: LogEntryMaxAggregateInputType
  }

  export type LogEntryGroupByOutputType = {
    id: string
    executionLogId: string
    message: string
    level: string
    timestamp: Date
    _count: LogEntryCountAggregateOutputType | null
    _min: LogEntryMinAggregateOutputType | null
    _max: LogEntryMaxAggregateOutputType | null
  }

  type GetLogEntryGroupByPayload<T extends LogEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LogEntryGroupByOutputType[P]>
        }
      >
    >


  export type LogEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionLogId?: boolean
    message?: boolean
    level?: boolean
    timestamp?: boolean
    executionLog?: boolean | ExecutionLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logEntry"]>

  export type LogEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionLogId?: boolean
    message?: boolean
    level?: boolean
    timestamp?: boolean
    executionLog?: boolean | ExecutionLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logEntry"]>

  export type LogEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executionLogId?: boolean
    message?: boolean
    level?: boolean
    timestamp?: boolean
    executionLog?: boolean | ExecutionLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logEntry"]>

  export type LogEntrySelectScalar = {
    id?: boolean
    executionLogId?: boolean
    message?: boolean
    level?: boolean
    timestamp?: boolean
  }

  export type LogEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "executionLogId" | "message" | "level" | "timestamp", ExtArgs["result"]["logEntry"]>
  export type LogEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionLog?: boolean | ExecutionLogDefaultArgs<ExtArgs>
  }
  export type LogEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionLog?: boolean | ExecutionLogDefaultArgs<ExtArgs>
  }
  export type LogEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionLog?: boolean | ExecutionLogDefaultArgs<ExtArgs>
  }

  export type $LogEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogEntry"
    objects: {
      executionLog: Prisma.$ExecutionLogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      executionLogId: string
      message: string
      level: string
      timestamp: Date
    }, ExtArgs["result"]["logEntry"]>
    composites: {}
  }

  type LogEntryGetPayload<S extends boolean | null | undefined | LogEntryDefaultArgs> = $Result.GetResult<Prisma.$LogEntryPayload, S>

  type LogEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogEntryCountAggregateInputType | true
    }

  export interface LogEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogEntry'], meta: { name: 'LogEntry' } }
    /**
     * Find zero or one LogEntry that matches the filter.
     * @param {LogEntryFindUniqueArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogEntryFindUniqueArgs>(args: SelectSubset<T, LogEntryFindUniqueArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogEntryFindUniqueOrThrowArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LogEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryFindFirstArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogEntryFindFirstArgs>(args?: SelectSubset<T, LogEntryFindFirstArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryFindFirstOrThrowArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LogEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogEntries
     * const logEntries = await prisma.logEntry.findMany()
     * 
     * // Get first 10 LogEntries
     * const logEntries = await prisma.logEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logEntryWithIdOnly = await prisma.logEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogEntryFindManyArgs>(args?: SelectSubset<T, LogEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogEntry.
     * @param {LogEntryCreateArgs} args - Arguments to create a LogEntry.
     * @example
     * // Create one LogEntry
     * const LogEntry = await prisma.logEntry.create({
     *   data: {
     *     // ... data to create a LogEntry
     *   }
     * })
     * 
     */
    create<T extends LogEntryCreateArgs>(args: SelectSubset<T, LogEntryCreateArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogEntries.
     * @param {LogEntryCreateManyArgs} args - Arguments to create many LogEntries.
     * @example
     * // Create many LogEntries
     * const logEntry = await prisma.logEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogEntryCreateManyArgs>(args?: SelectSubset<T, LogEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogEntries and returns the data saved in the database.
     * @param {LogEntryCreateManyAndReturnArgs} args - Arguments to create many LogEntries.
     * @example
     * // Create many LogEntries
     * const logEntry = await prisma.logEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogEntries and only return the `id`
     * const logEntryWithIdOnly = await prisma.logEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LogEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogEntry.
     * @param {LogEntryDeleteArgs} args - Arguments to delete one LogEntry.
     * @example
     * // Delete one LogEntry
     * const LogEntry = await prisma.logEntry.delete({
     *   where: {
     *     // ... filter to delete one LogEntry
     *   }
     * })
     * 
     */
    delete<T extends LogEntryDeleteArgs>(args: SelectSubset<T, LogEntryDeleteArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogEntry.
     * @param {LogEntryUpdateArgs} args - Arguments to update one LogEntry.
     * @example
     * // Update one LogEntry
     * const logEntry = await prisma.logEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogEntryUpdateArgs>(args: SelectSubset<T, LogEntryUpdateArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogEntries.
     * @param {LogEntryDeleteManyArgs} args - Arguments to filter LogEntries to delete.
     * @example
     * // Delete a few LogEntries
     * const { count } = await prisma.logEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogEntryDeleteManyArgs>(args?: SelectSubset<T, LogEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogEntries
     * const logEntry = await prisma.logEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogEntryUpdateManyArgs>(args: SelectSubset<T, LogEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogEntries and returns the data updated in the database.
     * @param {LogEntryUpdateManyAndReturnArgs} args - Arguments to update many LogEntries.
     * @example
     * // Update many LogEntries
     * const logEntry = await prisma.logEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogEntries and only return the `id`
     * const logEntryWithIdOnly = await prisma.logEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LogEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogEntry.
     * @param {LogEntryUpsertArgs} args - Arguments to update or create a LogEntry.
     * @example
     * // Update or create a LogEntry
     * const logEntry = await prisma.logEntry.upsert({
     *   create: {
     *     // ... data to create a LogEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogEntry we want to update
     *   }
     * })
     */
    upsert<T extends LogEntryUpsertArgs>(args: SelectSubset<T, LogEntryUpsertArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryCountArgs} args - Arguments to filter LogEntries to count.
     * @example
     * // Count the number of LogEntries
     * const count = await prisma.logEntry.count({
     *   where: {
     *     // ... the filter for the LogEntries we want to count
     *   }
     * })
    **/
    count<T extends LogEntryCountArgs>(
      args?: Subset<T, LogEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogEntryAggregateArgs>(args: Subset<T, LogEntryAggregateArgs>): Prisma.PrismaPromise<GetLogEntryAggregateType<T>>

    /**
     * Group by LogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogEntryGroupByArgs['orderBy'] }
        : { orderBy?: LogEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogEntry model
   */
  readonly fields: LogEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executionLog<T extends ExecutionLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionLogDefaultArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogEntry model
   */
  interface LogEntryFieldRefs {
    readonly id: FieldRef<"LogEntry", 'String'>
    readonly executionLogId: FieldRef<"LogEntry", 'String'>
    readonly message: FieldRef<"LogEntry", 'String'>
    readonly level: FieldRef<"LogEntry", 'String'>
    readonly timestamp: FieldRef<"LogEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogEntry findUnique
   */
  export type LogEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry findUniqueOrThrow
   */
  export type LogEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry findFirst
   */
  export type LogEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogEntries.
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogEntries.
     */
    distinct?: LogEntryScalarFieldEnum | LogEntryScalarFieldEnum[]
  }

  /**
   * LogEntry findFirstOrThrow
   */
  export type LogEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogEntries.
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogEntries.
     */
    distinct?: LogEntryScalarFieldEnum | LogEntryScalarFieldEnum[]
  }

  /**
   * LogEntry findMany
   */
  export type LogEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * Filter, which LogEntries to fetch.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogEntries.
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    distinct?: LogEntryScalarFieldEnum | LogEntryScalarFieldEnum[]
  }

  /**
   * LogEntry create
   */
  export type LogEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LogEntry.
     */
    data: XOR<LogEntryCreateInput, LogEntryUncheckedCreateInput>
  }

  /**
   * LogEntry createMany
   */
  export type LogEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogEntries.
     */
    data: LogEntryCreateManyInput | LogEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogEntry createManyAndReturn
   */
  export type LogEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LogEntries.
     */
    data: LogEntryCreateManyInput | LogEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogEntry update
   */
  export type LogEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LogEntry.
     */
    data: XOR<LogEntryUpdateInput, LogEntryUncheckedUpdateInput>
    /**
     * Choose, which LogEntry to update.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry updateMany
   */
  export type LogEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogEntries.
     */
    data: XOR<LogEntryUpdateManyMutationInput, LogEntryUncheckedUpdateManyInput>
    /**
     * Filter which LogEntries to update
     */
    where?: LogEntryWhereInput
    /**
     * Limit how many LogEntries to update.
     */
    limit?: number
  }

  /**
   * LogEntry updateManyAndReturn
   */
  export type LogEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * The data used to update LogEntries.
     */
    data: XOR<LogEntryUpdateManyMutationInput, LogEntryUncheckedUpdateManyInput>
    /**
     * Filter which LogEntries to update
     */
    where?: LogEntryWhereInput
    /**
     * Limit how many LogEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogEntry upsert
   */
  export type LogEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LogEntry to update in case it exists.
     */
    where: LogEntryWhereUniqueInput
    /**
     * In case the LogEntry found by the `where` argument doesn't exist, create a new LogEntry with this data.
     */
    create: XOR<LogEntryCreateInput, LogEntryUncheckedCreateInput>
    /**
     * In case the LogEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogEntryUpdateInput, LogEntryUncheckedUpdateInput>
  }

  /**
   * LogEntry delete
   */
  export type LogEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
    /**
     * Filter which LogEntry to delete.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry deleteMany
   */
  export type LogEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogEntries to delete
     */
    where?: LogEntryWhereInput
    /**
     * Limit how many LogEntries to delete.
     */
    limit?: number
  }

  /**
   * LogEntry without action
   */
  export type LogEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogEntryInclude<ExtArgs> | null
  }


  /**
   * Model IntegrationToken
   */

  export type AggregateIntegrationToken = {
    _count: IntegrationTokenCountAggregateOutputType | null
    _min: IntegrationTokenMinAggregateOutputType | null
    _max: IntegrationTokenMaxAggregateOutputType | null
  }

  export type IntegrationTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceName: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
  }

  export type IntegrationTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceName: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
  }

  export type IntegrationTokenCountAggregateOutputType = {
    id: number
    userId: number
    serviceName: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    _all: number
  }


  export type IntegrationTokenMinAggregateInputType = {
    id?: true
    userId?: true
    serviceName?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
  }

  export type IntegrationTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    serviceName?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
  }

  export type IntegrationTokenCountAggregateInputType = {
    id?: true
    userId?: true
    serviceName?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    _all?: true
  }

  export type IntegrationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationToken to aggregate.
     */
    where?: IntegrationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationTokens to fetch.
     */
    orderBy?: IntegrationTokenOrderByWithRelationInput | IntegrationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegrationTokens
    **/
    _count?: true | IntegrationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationTokenMaxAggregateInputType
  }

  export type GetIntegrationTokenAggregateType<T extends IntegrationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrationToken[P]>
      : GetScalarType<T[P], AggregateIntegrationToken[P]>
  }




  export type IntegrationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationTokenWhereInput
    orderBy?: IntegrationTokenOrderByWithAggregationInput | IntegrationTokenOrderByWithAggregationInput[]
    by: IntegrationTokenScalarFieldEnum[] | IntegrationTokenScalarFieldEnum
    having?: IntegrationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationTokenCountAggregateInputType | true
    _min?: IntegrationTokenMinAggregateInputType
    _max?: IntegrationTokenMaxAggregateInputType
  }

  export type IntegrationTokenGroupByOutputType = {
    id: string
    userId: string
    serviceName: string
    accessToken: string
    refreshToken: string | null
    expiresAt: Date | null
    _count: IntegrationTokenCountAggregateOutputType | null
    _min: IntegrationTokenMinAggregateOutputType | null
    _max: IntegrationTokenMaxAggregateOutputType | null
  }

  type GetIntegrationTokenGroupByPayload<T extends IntegrationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationTokenGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrationToken"]>

  export type IntegrationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrationToken"]>

  export type IntegrationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrationToken"]>

  export type IntegrationTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    serviceName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
  }

  export type IntegrationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serviceName" | "accessToken" | "refreshToken" | "expiresAt", ExtArgs["result"]["integrationToken"]>
  export type IntegrationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IntegrationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IntegrationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IntegrationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegrationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      serviceName: string
      accessToken: string
      refreshToken: string | null
      expiresAt: Date | null
    }, ExtArgs["result"]["integrationToken"]>
    composites: {}
  }

  type IntegrationTokenGetPayload<S extends boolean | null | undefined | IntegrationTokenDefaultArgs> = $Result.GetResult<Prisma.$IntegrationTokenPayload, S>

  type IntegrationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationTokenCountAggregateInputType | true
    }

  export interface IntegrationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegrationToken'], meta: { name: 'IntegrationToken' } }
    /**
     * Find zero or one IntegrationToken that matches the filter.
     * @param {IntegrationTokenFindUniqueArgs} args - Arguments to find a IntegrationToken
     * @example
     * // Get one IntegrationToken
     * const integrationToken = await prisma.integrationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationTokenFindUniqueArgs>(args: SelectSubset<T, IntegrationTokenFindUniqueArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntegrationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationTokenFindUniqueOrThrowArgs} args - Arguments to find a IntegrationToken
     * @example
     * // Get one IntegrationToken
     * const integrationToken = await prisma.integrationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationTokenFindFirstArgs} args - Arguments to find a IntegrationToken
     * @example
     * // Get one IntegrationToken
     * const integrationToken = await prisma.integrationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationTokenFindFirstArgs>(args?: SelectSubset<T, IntegrationTokenFindFirstArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationTokenFindFirstOrThrowArgs} args - Arguments to find a IntegrationToken
     * @example
     * // Get one IntegrationToken
     * const integrationToken = await prisma.integrationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntegrationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegrationTokens
     * const integrationTokens = await prisma.integrationToken.findMany()
     * 
     * // Get first 10 IntegrationTokens
     * const integrationTokens = await prisma.integrationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationTokenWithIdOnly = await prisma.integrationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationTokenFindManyArgs>(args?: SelectSubset<T, IntegrationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntegrationToken.
     * @param {IntegrationTokenCreateArgs} args - Arguments to create a IntegrationToken.
     * @example
     * // Create one IntegrationToken
     * const IntegrationToken = await prisma.integrationToken.create({
     *   data: {
     *     // ... data to create a IntegrationToken
     *   }
     * })
     * 
     */
    create<T extends IntegrationTokenCreateArgs>(args: SelectSubset<T, IntegrationTokenCreateArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntegrationTokens.
     * @param {IntegrationTokenCreateManyArgs} args - Arguments to create many IntegrationTokens.
     * @example
     * // Create many IntegrationTokens
     * const integrationToken = await prisma.integrationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationTokenCreateManyArgs>(args?: SelectSubset<T, IntegrationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegrationTokens and returns the data saved in the database.
     * @param {IntegrationTokenCreateManyAndReturnArgs} args - Arguments to create many IntegrationTokens.
     * @example
     * // Create many IntegrationTokens
     * const integrationToken = await prisma.integrationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegrationTokens and only return the `id`
     * const integrationTokenWithIdOnly = await prisma.integrationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntegrationToken.
     * @param {IntegrationTokenDeleteArgs} args - Arguments to delete one IntegrationToken.
     * @example
     * // Delete one IntegrationToken
     * const IntegrationToken = await prisma.integrationToken.delete({
     *   where: {
     *     // ... filter to delete one IntegrationToken
     *   }
     * })
     * 
     */
    delete<T extends IntegrationTokenDeleteArgs>(args: SelectSubset<T, IntegrationTokenDeleteArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntegrationToken.
     * @param {IntegrationTokenUpdateArgs} args - Arguments to update one IntegrationToken.
     * @example
     * // Update one IntegrationToken
     * const integrationToken = await prisma.integrationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationTokenUpdateArgs>(args: SelectSubset<T, IntegrationTokenUpdateArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntegrationTokens.
     * @param {IntegrationTokenDeleteManyArgs} args - Arguments to filter IntegrationTokens to delete.
     * @example
     * // Delete a few IntegrationTokens
     * const { count } = await prisma.integrationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationTokenDeleteManyArgs>(args?: SelectSubset<T, IntegrationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegrationTokens
     * const integrationToken = await prisma.integrationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationTokenUpdateManyArgs>(args: SelectSubset<T, IntegrationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationTokens and returns the data updated in the database.
     * @param {IntegrationTokenUpdateManyAndReturnArgs} args - Arguments to update many IntegrationTokens.
     * @example
     * // Update many IntegrationTokens
     * const integrationToken = await prisma.integrationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntegrationTokens and only return the `id`
     * const integrationTokenWithIdOnly = await prisma.integrationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegrationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntegrationToken.
     * @param {IntegrationTokenUpsertArgs} args - Arguments to update or create a IntegrationToken.
     * @example
     * // Update or create a IntegrationToken
     * const integrationToken = await prisma.integrationToken.upsert({
     *   create: {
     *     // ... data to create a IntegrationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegrationToken we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationTokenUpsertArgs>(args: SelectSubset<T, IntegrationTokenUpsertArgs<ExtArgs>>): Prisma__IntegrationTokenClient<$Result.GetResult<Prisma.$IntegrationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntegrationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationTokenCountArgs} args - Arguments to filter IntegrationTokens to count.
     * @example
     * // Count the number of IntegrationTokens
     * const count = await prisma.integrationToken.count({
     *   where: {
     *     // ... the filter for the IntegrationTokens we want to count
     *   }
     * })
    **/
    count<T extends IntegrationTokenCountArgs>(
      args?: Subset<T, IntegrationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegrationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegrationTokenAggregateArgs>(args: Subset<T, IntegrationTokenAggregateArgs>): Prisma.PrismaPromise<GetIntegrationTokenAggregateType<T>>

    /**
     * Group by IntegrationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegrationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationTokenGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegrationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegrationToken model
   */
  readonly fields: IntegrationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegrationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntegrationToken model
   */
  interface IntegrationTokenFieldRefs {
    readonly id: FieldRef<"IntegrationToken", 'String'>
    readonly userId: FieldRef<"IntegrationToken", 'String'>
    readonly serviceName: FieldRef<"IntegrationToken", 'String'>
    readonly accessToken: FieldRef<"IntegrationToken", 'String'>
    readonly refreshToken: FieldRef<"IntegrationToken", 'String'>
    readonly expiresAt: FieldRef<"IntegrationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntegrationToken findUnique
   */
  export type IntegrationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationToken to fetch.
     */
    where: IntegrationTokenWhereUniqueInput
  }

  /**
   * IntegrationToken findUniqueOrThrow
   */
  export type IntegrationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationToken to fetch.
     */
    where: IntegrationTokenWhereUniqueInput
  }

  /**
   * IntegrationToken findFirst
   */
  export type IntegrationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationToken to fetch.
     */
    where?: IntegrationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationTokens to fetch.
     */
    orderBy?: IntegrationTokenOrderByWithRelationInput | IntegrationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationTokens.
     */
    cursor?: IntegrationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationTokens.
     */
    distinct?: IntegrationTokenScalarFieldEnum | IntegrationTokenScalarFieldEnum[]
  }

  /**
   * IntegrationToken findFirstOrThrow
   */
  export type IntegrationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationToken to fetch.
     */
    where?: IntegrationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationTokens to fetch.
     */
    orderBy?: IntegrationTokenOrderByWithRelationInput | IntegrationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationTokens.
     */
    cursor?: IntegrationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationTokens.
     */
    distinct?: IntegrationTokenScalarFieldEnum | IntegrationTokenScalarFieldEnum[]
  }

  /**
   * IntegrationToken findMany
   */
  export type IntegrationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationTokens to fetch.
     */
    where?: IntegrationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationTokens to fetch.
     */
    orderBy?: IntegrationTokenOrderByWithRelationInput | IntegrationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegrationTokens.
     */
    cursor?: IntegrationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationTokens.
     */
    skip?: number
    distinct?: IntegrationTokenScalarFieldEnum | IntegrationTokenScalarFieldEnum[]
  }

  /**
   * IntegrationToken create
   */
  export type IntegrationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a IntegrationToken.
     */
    data: XOR<IntegrationTokenCreateInput, IntegrationTokenUncheckedCreateInput>
  }

  /**
   * IntegrationToken createMany
   */
  export type IntegrationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegrationTokens.
     */
    data: IntegrationTokenCreateManyInput | IntegrationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationToken createManyAndReturn
   */
  export type IntegrationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many IntegrationTokens.
     */
    data: IntegrationTokenCreateManyInput | IntegrationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegrationToken update
   */
  export type IntegrationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a IntegrationToken.
     */
    data: XOR<IntegrationTokenUpdateInput, IntegrationTokenUncheckedUpdateInput>
    /**
     * Choose, which IntegrationToken to update.
     */
    where: IntegrationTokenWhereUniqueInput
  }

  /**
   * IntegrationToken updateMany
   */
  export type IntegrationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegrationTokens.
     */
    data: XOR<IntegrationTokenUpdateManyMutationInput, IntegrationTokenUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationTokens to update
     */
    where?: IntegrationTokenWhereInput
    /**
     * Limit how many IntegrationTokens to update.
     */
    limit?: number
  }

  /**
   * IntegrationToken updateManyAndReturn
   */
  export type IntegrationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * The data used to update IntegrationTokens.
     */
    data: XOR<IntegrationTokenUpdateManyMutationInput, IntegrationTokenUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationTokens to update
     */
    where?: IntegrationTokenWhereInput
    /**
     * Limit how many IntegrationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegrationToken upsert
   */
  export type IntegrationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the IntegrationToken to update in case it exists.
     */
    where: IntegrationTokenWhereUniqueInput
    /**
     * In case the IntegrationToken found by the `where` argument doesn't exist, create a new IntegrationToken with this data.
     */
    create: XOR<IntegrationTokenCreateInput, IntegrationTokenUncheckedCreateInput>
    /**
     * In case the IntegrationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationTokenUpdateInput, IntegrationTokenUncheckedUpdateInput>
  }

  /**
   * IntegrationToken delete
   */
  export type IntegrationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
    /**
     * Filter which IntegrationToken to delete.
     */
    where: IntegrationTokenWhereUniqueInput
  }

  /**
   * IntegrationToken deleteMany
   */
  export type IntegrationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationTokens to delete
     */
    where?: IntegrationTokenWhereInput
    /**
     * Limit how many IntegrationTokens to delete.
     */
    limit?: number
  }

  /**
   * IntegrationToken without action
   */
  export type IntegrationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationToken
     */
    select?: IntegrationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationToken
     */
    omit?: IntegrationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationTokenInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    details: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "details" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const APIKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    key: 'key',
    createdAt: 'createdAt',
    isActive: 'isActive',
    workflowId: 'workflowId'
  };

  export type APIKeyScalarFieldEnum = (typeof APIKeyScalarFieldEnum)[keyof typeof APIKeyScalarFieldEnum]


  export const CreditScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance'
  };

  export type CreditScalarFieldEnum = (typeof CreditScalarFieldEnum)[keyof typeof CreditScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    creditsRequired: 'creditsRequired',
    version: 'version',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    eventType: 'eventType',
    cronSchedule: 'cronSchedule',
    webhookURL: 'webhookURL',
    apiKeyId: 'apiKeyId',
    isDeleted: 'isDeleted'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    actionType: 'actionType',
    config: 'config',
    isDeleted: 'isDeleted'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const ExecutionLogScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    status: 'status',
    executedAt: 'executedAt',
    error: 'error',
    retryCount: 'retryCount'
  };

  export type ExecutionLogScalarFieldEnum = (typeof ExecutionLogScalarFieldEnum)[keyof typeof ExecutionLogScalarFieldEnum]


  export const LogEntryScalarFieldEnum: {
    id: 'id',
    executionLogId: 'executionLogId',
    message: 'message',
    level: 'level',
    timestamp: 'timestamp'
  };

  export type LogEntryScalarFieldEnum = (typeof LogEntryScalarFieldEnum)[keyof typeof LogEntryScalarFieldEnum]


  export const IntegrationTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceName: 'serviceName',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt'
  };

  export type IntegrationTokenScalarFieldEnum = (typeof IntegrationTokenScalarFieldEnum)[keyof typeof IntegrationTokenScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Workflows?: WorkflowListRelationFilter
    Credit?: XOR<CreditNullableScalarRelationFilter, CreditWhereInput> | null
    Transactions?: TransactionListRelationFilter
    APIKeys?: APIKeyListRelationFilter
    ActivityLogs?: ActivityLogListRelationFilter
    IntegrationTokens?: IntegrationTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    Workflows?: WorkflowOrderByRelationAggregateInput
    Credit?: CreditOrderByWithRelationInput
    Transactions?: TransactionOrderByRelationAggregateInput
    APIKeys?: APIKeyOrderByRelationAggregateInput
    ActivityLogs?: ActivityLogOrderByRelationAggregateInput
    IntegrationTokens?: IntegrationTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    Workflows?: WorkflowListRelationFilter
    Credit?: XOR<CreditNullableScalarRelationFilter, CreditWhereInput> | null
    Transactions?: TransactionListRelationFilter
    APIKeys?: APIKeyListRelationFilter
    ActivityLogs?: ActivityLogListRelationFilter
    IntegrationTokens?: IntegrationTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type APIKeyWhereInput = {
    AND?: APIKeyWhereInput | APIKeyWhereInput[]
    OR?: APIKeyWhereInput[]
    NOT?: APIKeyWhereInput | APIKeyWhereInput[]
    id?: StringFilter<"APIKey"> | string
    userId?: StringFilter<"APIKey"> | string
    key?: StringFilter<"APIKey"> | string
    createdAt?: DateTimeFilter<"APIKey"> | Date | string
    isActive?: BoolFilter<"APIKey"> | boolean
    workflowId?: StringNullableFilter<"APIKey"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workflow?: XOR<WorkflowNullableScalarRelationFilter, WorkflowWhereInput> | null
    triggers?: TriggerListRelationFilter
  }

  export type APIKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    workflowId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    workflow?: WorkflowOrderByWithRelationInput
    triggers?: TriggerOrderByRelationAggregateInput
  }

  export type APIKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: APIKeyWhereInput | APIKeyWhereInput[]
    OR?: APIKeyWhereInput[]
    NOT?: APIKeyWhereInput | APIKeyWhereInput[]
    userId?: StringFilter<"APIKey"> | string
    createdAt?: DateTimeFilter<"APIKey"> | Date | string
    isActive?: BoolFilter<"APIKey"> | boolean
    workflowId?: StringNullableFilter<"APIKey"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workflow?: XOR<WorkflowNullableScalarRelationFilter, WorkflowWhereInput> | null
    triggers?: TriggerListRelationFilter
  }, "id" | "key">

  export type APIKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    workflowId?: SortOrderInput | SortOrder
    _count?: APIKeyCountOrderByAggregateInput
    _max?: APIKeyMaxOrderByAggregateInput
    _min?: APIKeyMinOrderByAggregateInput
  }

  export type APIKeyScalarWhereWithAggregatesInput = {
    AND?: APIKeyScalarWhereWithAggregatesInput | APIKeyScalarWhereWithAggregatesInput[]
    OR?: APIKeyScalarWhereWithAggregatesInput[]
    NOT?: APIKeyScalarWhereWithAggregatesInput | APIKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"APIKey"> | string
    userId?: StringWithAggregatesFilter<"APIKey"> | string
    key?: StringWithAggregatesFilter<"APIKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"APIKey"> | Date | string
    isActive?: BoolWithAggregatesFilter<"APIKey"> | boolean
    workflowId?: StringNullableWithAggregatesFilter<"APIKey"> | string | null
  }

  export type CreditWhereInput = {
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    id?: StringFilter<"Credit"> | string
    userId?: StringFilter<"Credit"> | string
    balance?: IntFilter<"Credit"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CreditOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    balance?: IntFilter<"Credit"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CreditOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    _count?: CreditCountOrderByAggregateInput
    _avg?: CreditAvgOrderByAggregateInput
    _max?: CreditMaxOrderByAggregateInput
    _min?: CreditMinOrderByAggregateInput
    _sum?: CreditSumOrderByAggregateInput
  }

  export type CreditScalarWhereWithAggregatesInput = {
    AND?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    OR?: CreditScalarWhereWithAggregatesInput[]
    NOT?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credit"> | string
    userId?: StringWithAggregatesFilter<"Credit"> | string
    balance?: IntWithAggregatesFilter<"Credit"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    type?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: IntWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    creditsRequired?: IntFilter<"Workflow"> | number
    version?: IntFilter<"Workflow"> | number
    isActive?: BoolFilter<"Workflow"> | boolean
    isDeleted?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Triggers?: TriggerListRelationFilter
    Actions?: ActionListRelationFilter
    ExecutionLogs?: ExecutionLogListRelationFilter
    apiKeys?: APIKeyListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    creditsRequired?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Triggers?: TriggerOrderByRelationAggregateInput
    Actions?: ActionOrderByRelationAggregateInput
    ExecutionLogs?: ExecutionLogOrderByRelationAggregateInput
    apiKeys?: APIKeyOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    creditsRequired?: IntFilter<"Workflow"> | number
    version?: IntFilter<"Workflow"> | number
    isActive?: BoolFilter<"Workflow"> | boolean
    isDeleted?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Triggers?: TriggerListRelationFilter
    Actions?: ActionListRelationFilter
    ExecutionLogs?: ExecutionLogListRelationFilter
    apiKeys?: APIKeyListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    creditsRequired?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _avg?: WorkflowAvgOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
    _sum?: WorkflowSumOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    userId?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    creditsRequired?: IntWithAggregatesFilter<"Workflow"> | number
    version?: IntWithAggregatesFilter<"Workflow"> | number
    isActive?: BoolWithAggregatesFilter<"Workflow"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Workflow"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    workflowId?: StringFilter<"Trigger"> | string
    eventType?: StringFilter<"Trigger"> | string
    cronSchedule?: StringNullableFilter<"Trigger"> | string | null
    webhookURL?: StringNullableFilter<"Trigger"> | string | null
    apiKeyId?: StringNullableFilter<"Trigger"> | string | null
    isDeleted?: BoolFilter<"Trigger"> | boolean
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    apiKey?: XOR<APIKeyNullableScalarRelationFilter, APIKeyWhereInput> | null
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    eventType?: SortOrder
    cronSchedule?: SortOrderInput | SortOrder
    webhookURL?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    apiKey?: APIKeyOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    workflowId?: StringFilter<"Trigger"> | string
    eventType?: StringFilter<"Trigger"> | string
    cronSchedule?: StringNullableFilter<"Trigger"> | string | null
    webhookURL?: StringNullableFilter<"Trigger"> | string | null
    apiKeyId?: StringNullableFilter<"Trigger"> | string | null
    isDeleted?: BoolFilter<"Trigger"> | boolean
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    apiKey?: XOR<APIKeyNullableScalarRelationFilter, APIKeyWhereInput> | null
  }, "id">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    eventType?: SortOrder
    cronSchedule?: SortOrderInput | SortOrder
    webhookURL?: SortOrderInput | SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    workflowId?: StringWithAggregatesFilter<"Trigger"> | string
    eventType?: StringWithAggregatesFilter<"Trigger"> | string
    cronSchedule?: StringNullableWithAggregatesFilter<"Trigger"> | string | null
    webhookURL?: StringNullableWithAggregatesFilter<"Trigger"> | string | null
    apiKeyId?: StringNullableWithAggregatesFilter<"Trigger"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Trigger"> | boolean
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    workflowId?: StringFilter<"Action"> | string
    actionType?: StringFilter<"Action"> | string
    config?: JsonFilter<"Action">
    isDeleted?: BoolFilter<"Action"> | boolean
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    config?: SortOrder
    isDeleted?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    workflowId?: StringFilter<"Action"> | string
    actionType?: StringFilter<"Action"> | string
    config?: JsonFilter<"Action">
    isDeleted?: BoolFilter<"Action"> | boolean
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    config?: SortOrder
    isDeleted?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    workflowId?: StringWithAggregatesFilter<"Action"> | string
    actionType?: StringWithAggregatesFilter<"Action"> | string
    config?: JsonWithAggregatesFilter<"Action">
    isDeleted?: BoolWithAggregatesFilter<"Action"> | boolean
  }

  export type ExecutionLogWhereInput = {
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    workflowId?: StringFilter<"ExecutionLog"> | string
    status?: StringFilter<"ExecutionLog"> | string
    executedAt?: DateTimeFilter<"ExecutionLog"> | Date | string
    error?: StringNullableFilter<"ExecutionLog"> | string | null
    retryCount?: IntFilter<"ExecutionLog"> | number
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    LogEntries?: LogEntryListRelationFilter
  }

  export type ExecutionLogOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    error?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    LogEntries?: LogEntryOrderByRelationAggregateInput
  }

  export type ExecutionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    workflowId?: StringFilter<"ExecutionLog"> | string
    status?: StringFilter<"ExecutionLog"> | string
    executedAt?: DateTimeFilter<"ExecutionLog"> | Date | string
    error?: StringNullableFilter<"ExecutionLog"> | string | null
    retryCount?: IntFilter<"ExecutionLog"> | number
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    LogEntries?: LogEntryListRelationFilter
  }, "id">

  export type ExecutionLogOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    error?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    _count?: ExecutionLogCountOrderByAggregateInput
    _avg?: ExecutionLogAvgOrderByAggregateInput
    _max?: ExecutionLogMaxOrderByAggregateInput
    _min?: ExecutionLogMinOrderByAggregateInput
    _sum?: ExecutionLogSumOrderByAggregateInput
  }

  export type ExecutionLogScalarWhereWithAggregatesInput = {
    AND?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    OR?: ExecutionLogScalarWhereWithAggregatesInput[]
    NOT?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionLog"> | string
    workflowId?: StringWithAggregatesFilter<"ExecutionLog"> | string
    status?: StringWithAggregatesFilter<"ExecutionLog"> | string
    executedAt?: DateTimeWithAggregatesFilter<"ExecutionLog"> | Date | string
    error?: StringNullableWithAggregatesFilter<"ExecutionLog"> | string | null
    retryCount?: IntWithAggregatesFilter<"ExecutionLog"> | number
  }

  export type LogEntryWhereInput = {
    AND?: LogEntryWhereInput | LogEntryWhereInput[]
    OR?: LogEntryWhereInput[]
    NOT?: LogEntryWhereInput | LogEntryWhereInput[]
    id?: StringFilter<"LogEntry"> | string
    executionLogId?: StringFilter<"LogEntry"> | string
    message?: StringFilter<"LogEntry"> | string
    level?: StringFilter<"LogEntry"> | string
    timestamp?: DateTimeFilter<"LogEntry"> | Date | string
    executionLog?: XOR<ExecutionLogScalarRelationFilter, ExecutionLogWhereInput>
  }

  export type LogEntryOrderByWithRelationInput = {
    id?: SortOrder
    executionLogId?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
    executionLog?: ExecutionLogOrderByWithRelationInput
  }

  export type LogEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogEntryWhereInput | LogEntryWhereInput[]
    OR?: LogEntryWhereInput[]
    NOT?: LogEntryWhereInput | LogEntryWhereInput[]
    executionLogId?: StringFilter<"LogEntry"> | string
    message?: StringFilter<"LogEntry"> | string
    level?: StringFilter<"LogEntry"> | string
    timestamp?: DateTimeFilter<"LogEntry"> | Date | string
    executionLog?: XOR<ExecutionLogScalarRelationFilter, ExecutionLogWhereInput>
  }, "id">

  export type LogEntryOrderByWithAggregationInput = {
    id?: SortOrder
    executionLogId?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
    _count?: LogEntryCountOrderByAggregateInput
    _max?: LogEntryMaxOrderByAggregateInput
    _min?: LogEntryMinOrderByAggregateInput
  }

  export type LogEntryScalarWhereWithAggregatesInput = {
    AND?: LogEntryScalarWhereWithAggregatesInput | LogEntryScalarWhereWithAggregatesInput[]
    OR?: LogEntryScalarWhereWithAggregatesInput[]
    NOT?: LogEntryScalarWhereWithAggregatesInput | LogEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogEntry"> | string
    executionLogId?: StringWithAggregatesFilter<"LogEntry"> | string
    message?: StringWithAggregatesFilter<"LogEntry"> | string
    level?: StringWithAggregatesFilter<"LogEntry"> | string
    timestamp?: DateTimeWithAggregatesFilter<"LogEntry"> | Date | string
  }

  export type IntegrationTokenWhereInput = {
    AND?: IntegrationTokenWhereInput | IntegrationTokenWhereInput[]
    OR?: IntegrationTokenWhereInput[]
    NOT?: IntegrationTokenWhereInput | IntegrationTokenWhereInput[]
    id?: StringFilter<"IntegrationToken"> | string
    userId?: StringFilter<"IntegrationToken"> | string
    serviceName?: StringFilter<"IntegrationToken"> | string
    accessToken?: StringFilter<"IntegrationToken"> | string
    refreshToken?: StringNullableFilter<"IntegrationToken"> | string | null
    expiresAt?: DateTimeNullableFilter<"IntegrationToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IntegrationTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IntegrationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntegrationTokenWhereInput | IntegrationTokenWhereInput[]
    OR?: IntegrationTokenWhereInput[]
    NOT?: IntegrationTokenWhereInput | IntegrationTokenWhereInput[]
    userId?: StringFilter<"IntegrationToken"> | string
    serviceName?: StringFilter<"IntegrationToken"> | string
    accessToken?: StringFilter<"IntegrationToken"> | string
    refreshToken?: StringNullableFilter<"IntegrationToken"> | string | null
    expiresAt?: DateTimeNullableFilter<"IntegrationToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IntegrationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: IntegrationTokenCountOrderByAggregateInput
    _max?: IntegrationTokenMaxOrderByAggregateInput
    _min?: IntegrationTokenMinOrderByAggregateInput
  }

  export type IntegrationTokenScalarWhereWithAggregatesInput = {
    AND?: IntegrationTokenScalarWhereWithAggregatesInput | IntegrationTokenScalarWhereWithAggregatesInput[]
    OR?: IntegrationTokenScalarWhereWithAggregatesInput[]
    NOT?: IntegrationTokenScalarWhereWithAggregatesInput | IntegrationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntegrationToken"> | string
    userId?: StringWithAggregatesFilter<"IntegrationToken"> | string
    serviceName?: StringWithAggregatesFilter<"IntegrationToken"> | string
    accessToken?: StringWithAggregatesFilter<"IntegrationToken"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"IntegrationToken"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"IntegrationToken"> | Date | string | null
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowCreateNestedManyWithoutUserInput
    Credit?: CreditCreateNestedOneWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    Credit?: CreditUncheckedCreateNestedOneWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyUncheckedCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUpdateManyWithoutUserNestedInput
    Credit?: CreditUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    Credit?: CreditUncheckedUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUncheckedUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKeyCreateInput = {
    id?: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutAPIKeysInput
    workflow?: WorkflowCreateNestedOneWithoutApiKeysInput
    triggers?: TriggerCreateNestedManyWithoutApiKeyInput
  }

  export type APIKeyUncheckedCreateInput = {
    id?: string
    userId: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    workflowId?: string | null
    triggers?: TriggerUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type APIKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAPIKeysNestedInput
    workflow?: WorkflowUpdateOneWithoutApiKeysNestedInput
    triggers?: TriggerUpdateManyWithoutApiKeyNestedInput
  }

  export type APIKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    workflowId?: NullableStringFieldUpdateOperationsInput | string | null
    triggers?: TriggerUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type APIKeyCreateManyInput = {
    id?: string
    userId: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    workflowId?: string | null
  }

  export type APIKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type APIKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    workflowId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditCreateInput = {
    id?: string
    balance?: number
    user: UserCreateNestedOneWithoutCreditInput
  }

  export type CreditUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: number
  }

  export type CreditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type CreditCreateManyInput = {
    id?: string
    userId: string
    balance?: number
  }

  export type CreditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type CreditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    id?: string
    type: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    Triggers?: TriggerCreateNestedManyWithoutWorkflowInput
    Actions?: ActionCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    Triggers?: TriggerUncheckedCreateNestedManyWithoutWorkflowInput
    Actions?: ActionUncheckedCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    Triggers?: TriggerUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Triggers?: TriggerUncheckedUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUncheckedUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    userId: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerCreateInput = {
    id?: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    isDeleted?: boolean
    workflow: WorkflowCreateNestedOneWithoutTriggersInput
    apiKey?: APIKeyCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    workflowId: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    apiKeyId?: string | null
    isDeleted?: boolean
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    workflow?: WorkflowUpdateOneRequiredWithoutTriggersNestedInput
    apiKey?: APIKeyUpdateOneWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerCreateManyInput = {
    id?: string
    workflowId: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    apiKeyId?: string | null
    isDeleted?: boolean
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActionCreateInput = {
    id?: string
    actionType: string
    config: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    workflow: WorkflowCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    workflowId: string
    actionType: string
    config: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    workflow?: WorkflowUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActionCreateManyInput = {
    id?: string
    workflowId: string
    actionType: string
    config: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExecutionLogCreateInput = {
    id?: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
    workflow: WorkflowCreateNestedOneWithoutExecutionLogsInput
    LogEntries?: LogEntryCreateNestedManyWithoutExecutionLogInput
  }

  export type ExecutionLogUncheckedCreateInput = {
    id?: string
    workflowId: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
    LogEntries?: LogEntryUncheckedCreateNestedManyWithoutExecutionLogInput
  }

  export type ExecutionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflow?: WorkflowUpdateOneRequiredWithoutExecutionLogsNestedInput
    LogEntries?: LogEntryUpdateManyWithoutExecutionLogNestedInput
  }

  export type ExecutionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    LogEntries?: LogEntryUncheckedUpdateManyWithoutExecutionLogNestedInput
  }

  export type ExecutionLogCreateManyInput = {
    id?: string
    workflowId: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
  }

  export type ExecutionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type ExecutionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type LogEntryCreateInput = {
    id?: string
    message: string
    level: string
    timestamp?: Date | string
    executionLog: ExecutionLogCreateNestedOneWithoutLogEntriesInput
  }

  export type LogEntryUncheckedCreateInput = {
    id?: string
    executionLogId: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionLog?: ExecutionLogUpdateOneRequiredWithoutLogEntriesNestedInput
  }

  export type LogEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionLogId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogEntryCreateManyInput = {
    id?: string
    executionLogId: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    executionLogId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationTokenCreateInput = {
    id?: string
    serviceName: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutIntegrationTokensInput
  }

  export type IntegrationTokenUncheckedCreateInput = {
    id?: string
    userId: string
    serviceName: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type IntegrationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutIntegrationTokensNestedInput
  }

  export type IntegrationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationTokenCreateManyInput = {
    id?: string
    userId: string
    serviceName: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type IntegrationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type CreditNullableScalarRelationFilter = {
    is?: CreditWhereInput | null
    isNot?: CreditWhereInput | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type APIKeyListRelationFilter = {
    every?: APIKeyWhereInput
    some?: APIKeyWhereInput
    none?: APIKeyWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type IntegrationTokenListRelationFilter = {
    every?: IntegrationTokenWhereInput
    some?: IntegrationTokenWhereInput
    none?: IntegrationTokenWhereInput
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type APIKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkflowNullableScalarRelationFilter = {
    is?: WorkflowWhereInput | null
    isNot?: WorkflowWhereInput | null
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type APIKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    workflowId?: SortOrder
  }

  export type APIKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    workflowId?: SortOrder
  }

  export type APIKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    workflowId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CreditCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type CreditAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CreditMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type CreditMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type CreditSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type ExecutionLogListRelationFilter = {
    every?: ExecutionLogWhereInput
    some?: ExecutionLogWhereInput
    none?: ExecutionLogWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    creditsRequired?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowAvgOrderByAggregateInput = {
    creditsRequired?: SortOrder
    version?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    creditsRequired?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    creditsRequired?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowSumOrderByAggregateInput = {
    creditsRequired?: SortOrder
    version?: SortOrder
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type APIKeyNullableScalarRelationFilter = {
    is?: APIKeyWhereInput | null
    isNot?: APIKeyWhereInput | null
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    eventType?: SortOrder
    cronSchedule?: SortOrder
    webhookURL?: SortOrder
    apiKeyId?: SortOrder
    isDeleted?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    eventType?: SortOrder
    cronSchedule?: SortOrder
    webhookURL?: SortOrder
    apiKeyId?: SortOrder
    isDeleted?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    eventType?: SortOrder
    cronSchedule?: SortOrder
    webhookURL?: SortOrder
    apiKeyId?: SortOrder
    isDeleted?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    config?: SortOrder
    isDeleted?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    isDeleted?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    isDeleted?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type LogEntryListRelationFilter = {
    every?: LogEntryWhereInput
    some?: LogEntryWhereInput
    none?: LogEntryWhereInput
  }

  export type LogEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionLogCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    error?: SortOrder
    retryCount?: SortOrder
  }

  export type ExecutionLogAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type ExecutionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    error?: SortOrder
    retryCount?: SortOrder
  }

  export type ExecutionLogMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    executedAt?: SortOrder
    error?: SortOrder
    retryCount?: SortOrder
  }

  export type ExecutionLogSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type ExecutionLogScalarRelationFilter = {
    is?: ExecutionLogWhereInput
    isNot?: ExecutionLogWhereInput
  }

  export type LogEntryCountOrderByAggregateInput = {
    id?: SortOrder
    executionLogId?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
  }

  export type LogEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    executionLogId?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
  }

  export type LogEntryMinOrderByAggregateInput = {
    id?: SortOrder
    executionLogId?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntegrationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type IntegrationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type IntegrationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WorkflowCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type CreditCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    connect?: CreditWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type APIKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<APIKeyCreateWithoutUserInput, APIKeyUncheckedCreateWithoutUserInput> | APIKeyCreateWithoutUserInput[] | APIKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutUserInput | APIKeyCreateOrConnectWithoutUserInput[]
    createMany?: APIKeyCreateManyUserInputEnvelope
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type IntegrationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationTokenCreateWithoutUserInput, IntegrationTokenUncheckedCreateWithoutUserInput> | IntegrationTokenCreateWithoutUserInput[] | IntegrationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationTokenCreateOrConnectWithoutUserInput | IntegrationTokenCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationTokenCreateManyUserInputEnvelope
    connect?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type CreditUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    connect?: CreditWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type APIKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<APIKeyCreateWithoutUserInput, APIKeyUncheckedCreateWithoutUserInput> | APIKeyCreateWithoutUserInput[] | APIKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutUserInput | APIKeyCreateOrConnectWithoutUserInput[]
    createMany?: APIKeyCreateManyUserInputEnvelope
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type IntegrationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationTokenCreateWithoutUserInput, IntegrationTokenUncheckedCreateWithoutUserInput> | IntegrationTokenCreateWithoutUserInput[] | IntegrationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationTokenCreateOrConnectWithoutUserInput | IntegrationTokenCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationTokenCreateManyUserInputEnvelope
    connect?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkflowUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type CreditUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    upsert?: CreditUpsertWithoutUserInput
    disconnect?: CreditWhereInput | boolean
    delete?: CreditWhereInput | boolean
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutUserInput, CreditUpdateWithoutUserInput>, CreditUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type APIKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<APIKeyCreateWithoutUserInput, APIKeyUncheckedCreateWithoutUserInput> | APIKeyCreateWithoutUserInput[] | APIKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutUserInput | APIKeyCreateOrConnectWithoutUserInput[]
    upsert?: APIKeyUpsertWithWhereUniqueWithoutUserInput | APIKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: APIKeyCreateManyUserInputEnvelope
    set?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    disconnect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    delete?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    update?: APIKeyUpdateWithWhereUniqueWithoutUserInput | APIKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: APIKeyUpdateManyWithWhereWithoutUserInput | APIKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type IntegrationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationTokenCreateWithoutUserInput, IntegrationTokenUncheckedCreateWithoutUserInput> | IntegrationTokenCreateWithoutUserInput[] | IntegrationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationTokenCreateOrConnectWithoutUserInput | IntegrationTokenCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationTokenUpsertWithWhereUniqueWithoutUserInput | IntegrationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationTokenCreateManyUserInputEnvelope
    set?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    disconnect?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    delete?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    connect?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    update?: IntegrationTokenUpdateWithWhereUniqueWithoutUserInput | IntegrationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationTokenUpdateManyWithWhereWithoutUserInput | IntegrationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationTokenScalarWhereInput | IntegrationTokenScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type CreditUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    upsert?: CreditUpsertWithoutUserInput
    disconnect?: CreditWhereInput | boolean
    delete?: CreditWhereInput | boolean
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutUserInput, CreditUpdateWithoutUserInput>, CreditUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type APIKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<APIKeyCreateWithoutUserInput, APIKeyUncheckedCreateWithoutUserInput> | APIKeyCreateWithoutUserInput[] | APIKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutUserInput | APIKeyCreateOrConnectWithoutUserInput[]
    upsert?: APIKeyUpsertWithWhereUniqueWithoutUserInput | APIKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: APIKeyCreateManyUserInputEnvelope
    set?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    disconnect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    delete?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    update?: APIKeyUpdateWithWhereUniqueWithoutUserInput | APIKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: APIKeyUpdateManyWithWhereWithoutUserInput | APIKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type IntegrationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationTokenCreateWithoutUserInput, IntegrationTokenUncheckedCreateWithoutUserInput> | IntegrationTokenCreateWithoutUserInput[] | IntegrationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationTokenCreateOrConnectWithoutUserInput | IntegrationTokenCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationTokenUpsertWithWhereUniqueWithoutUserInput | IntegrationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationTokenCreateManyUserInputEnvelope
    set?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    disconnect?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    delete?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    connect?: IntegrationTokenWhereUniqueInput | IntegrationTokenWhereUniqueInput[]
    update?: IntegrationTokenUpdateWithWhereUniqueWithoutUserInput | IntegrationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationTokenUpdateManyWithWhereWithoutUserInput | IntegrationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationTokenScalarWhereInput | IntegrationTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAPIKeysInput = {
    create?: XOR<UserCreateWithoutAPIKeysInput, UserUncheckedCreateWithoutAPIKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutAPIKeysInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<WorkflowCreateWithoutApiKeysInput, WorkflowUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutApiKeysInput
    connect?: WorkflowWhereUniqueInput
  }

  export type TriggerCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<TriggerCreateWithoutApiKeyInput, TriggerUncheckedCreateWithoutApiKeyInput> | TriggerCreateWithoutApiKeyInput[] | TriggerUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutApiKeyInput | TriggerCreateOrConnectWithoutApiKeyInput[]
    createMany?: TriggerCreateManyApiKeyInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<TriggerCreateWithoutApiKeyInput, TriggerUncheckedCreateWithoutApiKeyInput> | TriggerCreateWithoutApiKeyInput[] | TriggerUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutApiKeyInput | TriggerCreateOrConnectWithoutApiKeyInput[]
    createMany?: TriggerCreateManyApiKeyInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAPIKeysNestedInput = {
    create?: XOR<UserCreateWithoutAPIKeysInput, UserUncheckedCreateWithoutAPIKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutAPIKeysInput
    upsert?: UserUpsertWithoutAPIKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAPIKeysInput, UserUpdateWithoutAPIKeysInput>, UserUncheckedUpdateWithoutAPIKeysInput>
  }

  export type WorkflowUpdateOneWithoutApiKeysNestedInput = {
    create?: XOR<WorkflowCreateWithoutApiKeysInput, WorkflowUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutApiKeysInput
    upsert?: WorkflowUpsertWithoutApiKeysInput
    disconnect?: WorkflowWhereInput | boolean
    delete?: WorkflowWhereInput | boolean
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutApiKeysInput, WorkflowUpdateWithoutApiKeysInput>, WorkflowUncheckedUpdateWithoutApiKeysInput>
  }

  export type TriggerUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<TriggerCreateWithoutApiKeyInput, TriggerUncheckedCreateWithoutApiKeyInput> | TriggerCreateWithoutApiKeyInput[] | TriggerUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutApiKeyInput | TriggerCreateOrConnectWithoutApiKeyInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutApiKeyInput | TriggerUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: TriggerCreateManyApiKeyInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutApiKeyInput | TriggerUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutApiKeyInput | TriggerUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TriggerUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<TriggerCreateWithoutApiKeyInput, TriggerUncheckedCreateWithoutApiKeyInput> | TriggerCreateWithoutApiKeyInput[] | TriggerUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutApiKeyInput | TriggerCreateOrConnectWithoutApiKeyInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutApiKeyInput | TriggerUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: TriggerCreateManyApiKeyInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutApiKeyInput | TriggerUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutApiKeyInput | TriggerUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreditInput = {
    create?: XOR<UserCreateWithoutCreditInput, UserUncheckedCreateWithoutCreditInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreditNestedInput = {
    create?: XOR<UserCreateWithoutCreditInput, UserUncheckedCreateWithoutCreditInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditInput
    upsert?: UserUpsertWithoutCreditInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditInput, UserUpdateWithoutCreditInput>, UserUncheckedUpdateWithoutCreditInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type TriggerCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TriggerCreateWithoutWorkflowInput, TriggerUncheckedCreateWithoutWorkflowInput> | TriggerCreateWithoutWorkflowInput[] | TriggerUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutWorkflowInput | TriggerCreateOrConnectWithoutWorkflowInput[]
    createMany?: TriggerCreateManyWorkflowInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ActionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ActionCreateWithoutWorkflowInput, ActionUncheckedCreateWithoutWorkflowInput> | ActionCreateWithoutWorkflowInput[] | ActionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutWorkflowInput | ActionCreateOrConnectWithoutWorkflowInput[]
    createMany?: ActionCreateManyWorkflowInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ExecutionLogCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type APIKeyCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<APIKeyCreateWithoutWorkflowInput, APIKeyUncheckedCreateWithoutWorkflowInput> | APIKeyCreateWithoutWorkflowInput[] | APIKeyUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutWorkflowInput | APIKeyCreateOrConnectWithoutWorkflowInput[]
    createMany?: APIKeyCreateManyWorkflowInputEnvelope
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TriggerCreateWithoutWorkflowInput, TriggerUncheckedCreateWithoutWorkflowInput> | TriggerCreateWithoutWorkflowInput[] | TriggerUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutWorkflowInput | TriggerCreateOrConnectWithoutWorkflowInput[]
    createMany?: TriggerCreateManyWorkflowInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ActionCreateWithoutWorkflowInput, ActionUncheckedCreateWithoutWorkflowInput> | ActionCreateWithoutWorkflowInput[] | ActionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutWorkflowInput | ActionCreateOrConnectWithoutWorkflowInput[]
    createMany?: ActionCreateManyWorkflowInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type APIKeyUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<APIKeyCreateWithoutWorkflowInput, APIKeyUncheckedCreateWithoutWorkflowInput> | APIKeyCreateWithoutWorkflowInput[] | APIKeyUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutWorkflowInput | APIKeyCreateOrConnectWithoutWorkflowInput[]
    createMany?: APIKeyCreateManyWorkflowInputEnvelope
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type TriggerUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TriggerCreateWithoutWorkflowInput, TriggerUncheckedCreateWithoutWorkflowInput> | TriggerCreateWithoutWorkflowInput[] | TriggerUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutWorkflowInput | TriggerCreateOrConnectWithoutWorkflowInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutWorkflowInput | TriggerUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TriggerCreateManyWorkflowInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutWorkflowInput | TriggerUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutWorkflowInput | TriggerUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ActionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ActionCreateWithoutWorkflowInput, ActionUncheckedCreateWithoutWorkflowInput> | ActionCreateWithoutWorkflowInput[] | ActionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutWorkflowInput | ActionCreateOrConnectWithoutWorkflowInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutWorkflowInput | ActionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ActionCreateManyWorkflowInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutWorkflowInput | ActionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutWorkflowInput | ActionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ExecutionLogUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutWorkflowInput | ExecutionLogUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type APIKeyUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<APIKeyCreateWithoutWorkflowInput, APIKeyUncheckedCreateWithoutWorkflowInput> | APIKeyCreateWithoutWorkflowInput[] | APIKeyUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutWorkflowInput | APIKeyCreateOrConnectWithoutWorkflowInput[]
    upsert?: APIKeyUpsertWithWhereUniqueWithoutWorkflowInput | APIKeyUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: APIKeyCreateManyWorkflowInputEnvelope
    set?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    disconnect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    delete?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    update?: APIKeyUpdateWithWhereUniqueWithoutWorkflowInput | APIKeyUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: APIKeyUpdateManyWithWhereWithoutWorkflowInput | APIKeyUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TriggerCreateWithoutWorkflowInput, TriggerUncheckedCreateWithoutWorkflowInput> | TriggerCreateWithoutWorkflowInput[] | TriggerUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutWorkflowInput | TriggerCreateOrConnectWithoutWorkflowInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutWorkflowInput | TriggerUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TriggerCreateManyWorkflowInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutWorkflowInput | TriggerUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutWorkflowInput | TriggerUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ActionCreateWithoutWorkflowInput, ActionUncheckedCreateWithoutWorkflowInput> | ActionCreateWithoutWorkflowInput[] | ActionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutWorkflowInput | ActionCreateOrConnectWithoutWorkflowInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutWorkflowInput | ActionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ActionCreateManyWorkflowInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutWorkflowInput | ActionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutWorkflowInput | ActionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutWorkflowInput | ExecutionLogUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type APIKeyUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<APIKeyCreateWithoutWorkflowInput, APIKeyUncheckedCreateWithoutWorkflowInput> | APIKeyCreateWithoutWorkflowInput[] | APIKeyUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: APIKeyCreateOrConnectWithoutWorkflowInput | APIKeyCreateOrConnectWithoutWorkflowInput[]
    upsert?: APIKeyUpsertWithWhereUniqueWithoutWorkflowInput | APIKeyUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: APIKeyCreateManyWorkflowInputEnvelope
    set?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    disconnect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    delete?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    connect?: APIKeyWhereUniqueInput | APIKeyWhereUniqueInput[]
    update?: APIKeyUpdateWithWhereUniqueWithoutWorkflowInput | APIKeyUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: APIKeyUpdateManyWithWhereWithoutWorkflowInput | APIKeyUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutTriggersInput = {
    create?: XOR<WorkflowCreateWithoutTriggersInput, WorkflowUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTriggersInput
    connect?: WorkflowWhereUniqueInput
  }

  export type APIKeyCreateNestedOneWithoutTriggersInput = {
    create?: XOR<APIKeyCreateWithoutTriggersInput, APIKeyUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: APIKeyCreateOrConnectWithoutTriggersInput
    connect?: APIKeyWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<WorkflowCreateWithoutTriggersInput, WorkflowUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTriggersInput
    upsert?: WorkflowUpsertWithoutTriggersInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutTriggersInput, WorkflowUpdateWithoutTriggersInput>, WorkflowUncheckedUpdateWithoutTriggersInput>
  }

  export type APIKeyUpdateOneWithoutTriggersNestedInput = {
    create?: XOR<APIKeyCreateWithoutTriggersInput, APIKeyUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: APIKeyCreateOrConnectWithoutTriggersInput
    upsert?: APIKeyUpsertWithoutTriggersInput
    disconnect?: APIKeyWhereInput | boolean
    delete?: APIKeyWhereInput | boolean
    connect?: APIKeyWhereUniqueInput
    update?: XOR<XOR<APIKeyUpdateToOneWithWhereWithoutTriggersInput, APIKeyUpdateWithoutTriggersInput>, APIKeyUncheckedUpdateWithoutTriggersInput>
  }

  export type WorkflowCreateNestedOneWithoutActionsInput = {
    create?: XOR<WorkflowCreateWithoutActionsInput, WorkflowUncheckedCreateWithoutActionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutActionsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<WorkflowCreateWithoutActionsInput, WorkflowUncheckedCreateWithoutActionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutActionsInput
    upsert?: WorkflowUpsertWithoutActionsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutActionsInput, WorkflowUpdateWithoutActionsInput>, WorkflowUncheckedUpdateWithoutActionsInput>
  }

  export type WorkflowCreateNestedOneWithoutExecutionLogsInput = {
    create?: XOR<WorkflowCreateWithoutExecutionLogsInput, WorkflowUncheckedCreateWithoutExecutionLogsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExecutionLogsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type LogEntryCreateNestedManyWithoutExecutionLogInput = {
    create?: XOR<LogEntryCreateWithoutExecutionLogInput, LogEntryUncheckedCreateWithoutExecutionLogInput> | LogEntryCreateWithoutExecutionLogInput[] | LogEntryUncheckedCreateWithoutExecutionLogInput[]
    connectOrCreate?: LogEntryCreateOrConnectWithoutExecutionLogInput | LogEntryCreateOrConnectWithoutExecutionLogInput[]
    createMany?: LogEntryCreateManyExecutionLogInputEnvelope
    connect?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
  }

  export type LogEntryUncheckedCreateNestedManyWithoutExecutionLogInput = {
    create?: XOR<LogEntryCreateWithoutExecutionLogInput, LogEntryUncheckedCreateWithoutExecutionLogInput> | LogEntryCreateWithoutExecutionLogInput[] | LogEntryUncheckedCreateWithoutExecutionLogInput[]
    connectOrCreate?: LogEntryCreateOrConnectWithoutExecutionLogInput | LogEntryCreateOrConnectWithoutExecutionLogInput[]
    createMany?: LogEntryCreateManyExecutionLogInputEnvelope
    connect?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
  }

  export type WorkflowUpdateOneRequiredWithoutExecutionLogsNestedInput = {
    create?: XOR<WorkflowCreateWithoutExecutionLogsInput, WorkflowUncheckedCreateWithoutExecutionLogsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExecutionLogsInput
    upsert?: WorkflowUpsertWithoutExecutionLogsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutExecutionLogsInput, WorkflowUpdateWithoutExecutionLogsInput>, WorkflowUncheckedUpdateWithoutExecutionLogsInput>
  }

  export type LogEntryUpdateManyWithoutExecutionLogNestedInput = {
    create?: XOR<LogEntryCreateWithoutExecutionLogInput, LogEntryUncheckedCreateWithoutExecutionLogInput> | LogEntryCreateWithoutExecutionLogInput[] | LogEntryUncheckedCreateWithoutExecutionLogInput[]
    connectOrCreate?: LogEntryCreateOrConnectWithoutExecutionLogInput | LogEntryCreateOrConnectWithoutExecutionLogInput[]
    upsert?: LogEntryUpsertWithWhereUniqueWithoutExecutionLogInput | LogEntryUpsertWithWhereUniqueWithoutExecutionLogInput[]
    createMany?: LogEntryCreateManyExecutionLogInputEnvelope
    set?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    disconnect?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    delete?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    connect?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    update?: LogEntryUpdateWithWhereUniqueWithoutExecutionLogInput | LogEntryUpdateWithWhereUniqueWithoutExecutionLogInput[]
    updateMany?: LogEntryUpdateManyWithWhereWithoutExecutionLogInput | LogEntryUpdateManyWithWhereWithoutExecutionLogInput[]
    deleteMany?: LogEntryScalarWhereInput | LogEntryScalarWhereInput[]
  }

  export type LogEntryUncheckedUpdateManyWithoutExecutionLogNestedInput = {
    create?: XOR<LogEntryCreateWithoutExecutionLogInput, LogEntryUncheckedCreateWithoutExecutionLogInput> | LogEntryCreateWithoutExecutionLogInput[] | LogEntryUncheckedCreateWithoutExecutionLogInput[]
    connectOrCreate?: LogEntryCreateOrConnectWithoutExecutionLogInput | LogEntryCreateOrConnectWithoutExecutionLogInput[]
    upsert?: LogEntryUpsertWithWhereUniqueWithoutExecutionLogInput | LogEntryUpsertWithWhereUniqueWithoutExecutionLogInput[]
    createMany?: LogEntryCreateManyExecutionLogInputEnvelope
    set?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    disconnect?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    delete?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    connect?: LogEntryWhereUniqueInput | LogEntryWhereUniqueInput[]
    update?: LogEntryUpdateWithWhereUniqueWithoutExecutionLogInput | LogEntryUpdateWithWhereUniqueWithoutExecutionLogInput[]
    updateMany?: LogEntryUpdateManyWithWhereWithoutExecutionLogInput | LogEntryUpdateManyWithWhereWithoutExecutionLogInput[]
    deleteMany?: LogEntryScalarWhereInput | LogEntryScalarWhereInput[]
  }

  export type ExecutionLogCreateNestedOneWithoutLogEntriesInput = {
    create?: XOR<ExecutionLogCreateWithoutLogEntriesInput, ExecutionLogUncheckedCreateWithoutLogEntriesInput>
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutLogEntriesInput
    connect?: ExecutionLogWhereUniqueInput
  }

  export type ExecutionLogUpdateOneRequiredWithoutLogEntriesNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutLogEntriesInput, ExecutionLogUncheckedCreateWithoutLogEntriesInput>
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutLogEntriesInput
    upsert?: ExecutionLogUpsertWithoutLogEntriesInput
    connect?: ExecutionLogWhereUniqueInput
    update?: XOR<XOR<ExecutionLogUpdateToOneWithWhereWithoutLogEntriesInput, ExecutionLogUpdateWithoutLogEntriesInput>, ExecutionLogUncheckedUpdateWithoutLogEntriesInput>
  }

  export type UserCreateNestedOneWithoutIntegrationTokensInput = {
    create?: XOR<UserCreateWithoutIntegrationTokensInput, UserUncheckedCreateWithoutIntegrationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutIntegrationTokensNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationTokensInput, UserUncheckedCreateWithoutIntegrationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationTokensInput
    upsert?: UserUpsertWithoutIntegrationTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationTokensInput, UserUpdateWithoutIntegrationTokensInput>, UserUncheckedUpdateWithoutIntegrationTokensInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkflowCreateWithoutUserInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    Triggers?: TriggerCreateNestedManyWithoutWorkflowInput
    Actions?: ActionCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    Triggers?: TriggerUncheckedCreateNestedManyWithoutWorkflowInput
    Actions?: ActionUncheckedCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowCreateManyUserInputEnvelope = {
    data: WorkflowCreateManyUserInput | WorkflowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditCreateWithoutUserInput = {
    id?: string
    balance?: number
  }

  export type CreditUncheckedCreateWithoutUserInput = {
    id?: string
    balance?: number
  }

  export type CreditCreateOrConnectWithoutUserInput = {
    where: CreditWhereUniqueInput
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type APIKeyCreateWithoutUserInput = {
    id?: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    workflow?: WorkflowCreateNestedOneWithoutApiKeysInput
    triggers?: TriggerCreateNestedManyWithoutApiKeyInput
  }

  export type APIKeyUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    workflowId?: string | null
    triggers?: TriggerUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type APIKeyCreateOrConnectWithoutUserInput = {
    where: APIKeyWhereUniqueInput
    create: XOR<APIKeyCreateWithoutUserInput, APIKeyUncheckedCreateWithoutUserInput>
  }

  export type APIKeyCreateManyUserInputEnvelope = {
    data: APIKeyCreateManyUserInput | APIKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationTokenCreateWithoutUserInput = {
    id?: string
    serviceName: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type IntegrationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    serviceName: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type IntegrationTokenCreateOrConnectWithoutUserInput = {
    where: IntegrationTokenWhereUniqueInput
    create: XOR<IntegrationTokenCreateWithoutUserInput, IntegrationTokenUncheckedCreateWithoutUserInput>
  }

  export type IntegrationTokenCreateManyUserInputEnvelope = {
    data: IntegrationTokenCreateManyUserInput | IntegrationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    creditsRequired?: IntFilter<"Workflow"> | number
    version?: IntFilter<"Workflow"> | number
    isActive?: BoolFilter<"Workflow"> | boolean
    isDeleted?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
  }

  export type CreditUpsertWithoutUserInput = {
    update: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    where?: CreditWhereInput
  }

  export type CreditUpdateToOneWithWhereWithoutUserInput = {
    where?: CreditWhereInput
    data: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
  }

  export type CreditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type CreditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type APIKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: APIKeyWhereUniqueInput
    update: XOR<APIKeyUpdateWithoutUserInput, APIKeyUncheckedUpdateWithoutUserInput>
    create: XOR<APIKeyCreateWithoutUserInput, APIKeyUncheckedCreateWithoutUserInput>
  }

  export type APIKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: APIKeyWhereUniqueInput
    data: XOR<APIKeyUpdateWithoutUserInput, APIKeyUncheckedUpdateWithoutUserInput>
  }

  export type APIKeyUpdateManyWithWhereWithoutUserInput = {
    where: APIKeyScalarWhereInput
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type APIKeyScalarWhereInput = {
    AND?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
    OR?: APIKeyScalarWhereInput[]
    NOT?: APIKeyScalarWhereInput | APIKeyScalarWhereInput[]
    id?: StringFilter<"APIKey"> | string
    userId?: StringFilter<"APIKey"> | string
    key?: StringFilter<"APIKey"> | string
    createdAt?: DateTimeFilter<"APIKey"> | Date | string
    isActive?: BoolFilter<"APIKey"> | boolean
    workflowId?: StringNullableFilter<"APIKey"> | string | null
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type IntegrationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationTokenWhereUniqueInput
    update: XOR<IntegrationTokenUpdateWithoutUserInput, IntegrationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationTokenCreateWithoutUserInput, IntegrationTokenUncheckedCreateWithoutUserInput>
  }

  export type IntegrationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationTokenWhereUniqueInput
    data: XOR<IntegrationTokenUpdateWithoutUserInput, IntegrationTokenUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationTokenUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationTokenScalarWhereInput
    data: XOR<IntegrationTokenUpdateManyMutationInput, IntegrationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationTokenScalarWhereInput = {
    AND?: IntegrationTokenScalarWhereInput | IntegrationTokenScalarWhereInput[]
    OR?: IntegrationTokenScalarWhereInput[]
    NOT?: IntegrationTokenScalarWhereInput | IntegrationTokenScalarWhereInput[]
    id?: StringFilter<"IntegrationToken"> | string
    userId?: StringFilter<"IntegrationToken"> | string
    serviceName?: StringFilter<"IntegrationToken"> | string
    accessToken?: StringFilter<"IntegrationToken"> | string
    refreshToken?: StringNullableFilter<"IntegrationToken"> | string | null
    expiresAt?: DateTimeNullableFilter<"IntegrationToken"> | Date | string | null
  }

  export type UserCreateWithoutAPIKeysInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowCreateNestedManyWithoutUserInput
    Credit?: CreditCreateNestedOneWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAPIKeysInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    Credit?: CreditUncheckedCreateNestedOneWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAPIKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAPIKeysInput, UserUncheckedCreateWithoutAPIKeysInput>
  }

  export type WorkflowCreateWithoutApiKeysInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    Triggers?: TriggerCreateNestedManyWithoutWorkflowInput
    Actions?: ActionCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutApiKeysInput = {
    id?: string
    userId: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    Triggers?: TriggerUncheckedCreateNestedManyWithoutWorkflowInput
    Actions?: ActionUncheckedCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutApiKeysInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutApiKeysInput, WorkflowUncheckedCreateWithoutApiKeysInput>
  }

  export type TriggerCreateWithoutApiKeyInput = {
    id?: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    isDeleted?: boolean
    workflow: WorkflowCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutApiKeyInput = {
    id?: string
    workflowId: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    isDeleted?: boolean
  }

  export type TriggerCreateOrConnectWithoutApiKeyInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutApiKeyInput, TriggerUncheckedCreateWithoutApiKeyInput>
  }

  export type TriggerCreateManyApiKeyInputEnvelope = {
    data: TriggerCreateManyApiKeyInput | TriggerCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAPIKeysInput = {
    update: XOR<UserUpdateWithoutAPIKeysInput, UserUncheckedUpdateWithoutAPIKeysInput>
    create: XOR<UserCreateWithoutAPIKeysInput, UserUncheckedCreateWithoutAPIKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAPIKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAPIKeysInput, UserUncheckedUpdateWithoutAPIKeysInput>
  }

  export type UserUpdateWithoutAPIKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUpdateManyWithoutUserNestedInput
    Credit?: CreditUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAPIKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    Credit?: CreditUncheckedUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowUpsertWithoutApiKeysInput = {
    update: XOR<WorkflowUpdateWithoutApiKeysInput, WorkflowUncheckedUpdateWithoutApiKeysInput>
    create: XOR<WorkflowCreateWithoutApiKeysInput, WorkflowUncheckedCreateWithoutApiKeysInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutApiKeysInput, WorkflowUncheckedUpdateWithoutApiKeysInput>
  }

  export type WorkflowUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    Triggers?: TriggerUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Triggers?: TriggerUncheckedUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUncheckedUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type TriggerUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutApiKeyInput, TriggerUncheckedUpdateWithoutApiKeyInput>
    create: XOR<TriggerCreateWithoutApiKeyInput, TriggerUncheckedCreateWithoutApiKeyInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutApiKeyInput, TriggerUncheckedUpdateWithoutApiKeyInput>
  }

  export type TriggerUpdateManyWithWhereWithoutApiKeyInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    workflowId?: StringFilter<"Trigger"> | string
    eventType?: StringFilter<"Trigger"> | string
    cronSchedule?: StringNullableFilter<"Trigger"> | string | null
    webhookURL?: StringNullableFilter<"Trigger"> | string | null
    apiKeyId?: StringNullableFilter<"Trigger"> | string | null
    isDeleted?: BoolFilter<"Trigger"> | boolean
  }

  export type UserCreateWithoutCreditInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowCreateNestedManyWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyUncheckedCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditInput, UserUncheckedCreateWithoutCreditInput>
  }

  export type UserUpsertWithoutCreditInput = {
    update: XOR<UserUpdateWithoutCreditInput, UserUncheckedUpdateWithoutCreditInput>
    create: XOR<UserCreateWithoutCreditInput, UserUncheckedCreateWithoutCreditInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditInput, UserUncheckedUpdateWithoutCreditInput>
  }

  export type UserUpdateWithoutCreditInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUncheckedUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowCreateNestedManyWithoutUserInput
    Credit?: CreditCreateNestedOneWithoutUserInput
    APIKeys?: APIKeyCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    Credit?: CreditUncheckedCreateNestedOneWithoutUserInput
    APIKeys?: APIKeyUncheckedCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUpdateManyWithoutUserNestedInput
    Credit?: CreditUpdateOneWithoutUserNestedInput
    APIKeys?: APIKeyUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    Credit?: CreditUncheckedUpdateOneWithoutUserNestedInput
    APIKeys?: APIKeyUncheckedUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkflowsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Credit?: CreditCreateNestedOneWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Credit?: CreditUncheckedCreateNestedOneWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyUncheckedCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type TriggerCreateWithoutWorkflowInput = {
    id?: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    isDeleted?: boolean
    apiKey?: APIKeyCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutWorkflowInput = {
    id?: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    apiKeyId?: string | null
    isDeleted?: boolean
  }

  export type TriggerCreateOrConnectWithoutWorkflowInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutWorkflowInput, TriggerUncheckedCreateWithoutWorkflowInput>
  }

  export type TriggerCreateManyWorkflowInputEnvelope = {
    data: TriggerCreateManyWorkflowInput | TriggerCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type ActionCreateWithoutWorkflowInput = {
    id?: string
    actionType: string
    config: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
  }

  export type ActionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    actionType: string
    config: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
  }

  export type ActionCreateOrConnectWithoutWorkflowInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutWorkflowInput, ActionUncheckedCreateWithoutWorkflowInput>
  }

  export type ActionCreateManyWorkflowInputEnvelope = {
    data: ActionCreateManyWorkflowInput | ActionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionLogCreateWithoutWorkflowInput = {
    id?: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
    LogEntries?: LogEntryCreateNestedManyWithoutExecutionLogInput
  }

  export type ExecutionLogUncheckedCreateWithoutWorkflowInput = {
    id?: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
    LogEntries?: LogEntryUncheckedCreateNestedManyWithoutExecutionLogInput
  }

  export type ExecutionLogCreateOrConnectWithoutWorkflowInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionLogCreateManyWorkflowInputEnvelope = {
    data: ExecutionLogCreateManyWorkflowInput | ExecutionLogCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type APIKeyCreateWithoutWorkflowInput = {
    id?: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutAPIKeysInput
    triggers?: TriggerCreateNestedManyWithoutApiKeyInput
  }

  export type APIKeyUncheckedCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    triggers?: TriggerUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type APIKeyCreateOrConnectWithoutWorkflowInput = {
    where: APIKeyWhereUniqueInput
    create: XOR<APIKeyCreateWithoutWorkflowInput, APIKeyUncheckedCreateWithoutWorkflowInput>
  }

  export type APIKeyCreateManyWorkflowInputEnvelope = {
    data: APIKeyCreateManyWorkflowInput | APIKeyCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Credit?: CreditUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Credit?: CreditUncheckedUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUncheckedUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TriggerUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutWorkflowInput, TriggerUncheckedUpdateWithoutWorkflowInput>
    create: XOR<TriggerCreateWithoutWorkflowInput, TriggerUncheckedCreateWithoutWorkflowInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutWorkflowInput, TriggerUncheckedUpdateWithoutWorkflowInput>
  }

  export type TriggerUpdateManyWithWhereWithoutWorkflowInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type ActionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutWorkflowInput, ActionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ActionCreateWithoutWorkflowInput, ActionUncheckedCreateWithoutWorkflowInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutWorkflowInput, ActionUncheckedUpdateWithoutWorkflowInput>
  }

  export type ActionUpdateManyWithWhereWithoutWorkflowInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    workflowId?: StringFilter<"Action"> | string
    actionType?: StringFilter<"Action"> | string
    config?: JsonFilter<"Action">
    isDeleted?: BoolFilter<"Action"> | boolean
  }

  export type ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionLogWhereUniqueInput
    update: XOR<ExecutionLogUpdateWithoutWorkflowInput, ExecutionLogUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionLogWhereUniqueInput
    data: XOR<ExecutionLogUpdateWithoutWorkflowInput, ExecutionLogUncheckedUpdateWithoutWorkflowInput>
  }

  export type ExecutionLogUpdateManyWithWhereWithoutWorkflowInput = {
    where: ExecutionLogScalarWhereInput
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type ExecutionLogScalarWhereInput = {
    AND?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    OR?: ExecutionLogScalarWhereInput[]
    NOT?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    workflowId?: StringFilter<"ExecutionLog"> | string
    status?: StringFilter<"ExecutionLog"> | string
    executedAt?: DateTimeFilter<"ExecutionLog"> | Date | string
    error?: StringNullableFilter<"ExecutionLog"> | string | null
    retryCount?: IntFilter<"ExecutionLog"> | number
  }

  export type APIKeyUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: APIKeyWhereUniqueInput
    update: XOR<APIKeyUpdateWithoutWorkflowInput, APIKeyUncheckedUpdateWithoutWorkflowInput>
    create: XOR<APIKeyCreateWithoutWorkflowInput, APIKeyUncheckedCreateWithoutWorkflowInput>
  }

  export type APIKeyUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: APIKeyWhereUniqueInput
    data: XOR<APIKeyUpdateWithoutWorkflowInput, APIKeyUncheckedUpdateWithoutWorkflowInput>
  }

  export type APIKeyUpdateManyWithWhereWithoutWorkflowInput = {
    where: APIKeyScalarWhereInput
    data: XOR<APIKeyUpdateManyMutationInput, APIKeyUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowCreateWithoutTriggersInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    Actions?: ActionCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutTriggersInput = {
    id?: string
    userId: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    Actions?: ActionUncheckedCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutTriggersInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTriggersInput, WorkflowUncheckedCreateWithoutTriggersInput>
  }

  export type APIKeyCreateWithoutTriggersInput = {
    id?: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutAPIKeysInput
    workflow?: WorkflowCreateNestedOneWithoutApiKeysInput
  }

  export type APIKeyUncheckedCreateWithoutTriggersInput = {
    id?: string
    userId: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    workflowId?: string | null
  }

  export type APIKeyCreateOrConnectWithoutTriggersInput = {
    where: APIKeyWhereUniqueInput
    create: XOR<APIKeyCreateWithoutTriggersInput, APIKeyUncheckedCreateWithoutTriggersInput>
  }

  export type WorkflowUpsertWithoutTriggersInput = {
    update: XOR<WorkflowUpdateWithoutTriggersInput, WorkflowUncheckedUpdateWithoutTriggersInput>
    create: XOR<WorkflowCreateWithoutTriggersInput, WorkflowUncheckedCreateWithoutTriggersInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutTriggersInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutTriggersInput, WorkflowUncheckedUpdateWithoutTriggersInput>
  }

  export type WorkflowUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    Actions?: ActionUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Actions?: ActionUncheckedUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type APIKeyUpsertWithoutTriggersInput = {
    update: XOR<APIKeyUpdateWithoutTriggersInput, APIKeyUncheckedUpdateWithoutTriggersInput>
    create: XOR<APIKeyCreateWithoutTriggersInput, APIKeyUncheckedCreateWithoutTriggersInput>
    where?: APIKeyWhereInput
  }

  export type APIKeyUpdateToOneWithWhereWithoutTriggersInput = {
    where?: APIKeyWhereInput
    data: XOR<APIKeyUpdateWithoutTriggersInput, APIKeyUncheckedUpdateWithoutTriggersInput>
  }

  export type APIKeyUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAPIKeysNestedInput
    workflow?: WorkflowUpdateOneWithoutApiKeysNestedInput
  }

  export type APIKeyUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    workflowId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowCreateWithoutActionsInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    Triggers?: TriggerCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutActionsInput = {
    id?: string
    userId: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    Triggers?: TriggerUncheckedCreateNestedManyWithoutWorkflowInput
    ExecutionLogs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutActionsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutActionsInput, WorkflowUncheckedCreateWithoutActionsInput>
  }

  export type WorkflowUpsertWithoutActionsInput = {
    update: XOR<WorkflowUpdateWithoutActionsInput, WorkflowUncheckedUpdateWithoutActionsInput>
    create: XOR<WorkflowCreateWithoutActionsInput, WorkflowUncheckedCreateWithoutActionsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutActionsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutActionsInput, WorkflowUncheckedUpdateWithoutActionsInput>
  }

  export type WorkflowUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    Triggers?: TriggerUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Triggers?: TriggerUncheckedUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutExecutionLogsInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    Triggers?: TriggerCreateNestedManyWithoutWorkflowInput
    Actions?: ActionCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutExecutionLogsInput = {
    id?: string
    userId: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    Triggers?: TriggerUncheckedCreateNestedManyWithoutWorkflowInput
    Actions?: ActionUncheckedCreateNestedManyWithoutWorkflowInput
    apiKeys?: APIKeyUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutExecutionLogsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutExecutionLogsInput, WorkflowUncheckedCreateWithoutExecutionLogsInput>
  }

  export type LogEntryCreateWithoutExecutionLogInput = {
    id?: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogEntryUncheckedCreateWithoutExecutionLogInput = {
    id?: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogEntryCreateOrConnectWithoutExecutionLogInput = {
    where: LogEntryWhereUniqueInput
    create: XOR<LogEntryCreateWithoutExecutionLogInput, LogEntryUncheckedCreateWithoutExecutionLogInput>
  }

  export type LogEntryCreateManyExecutionLogInputEnvelope = {
    data: LogEntryCreateManyExecutionLogInput | LogEntryCreateManyExecutionLogInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutExecutionLogsInput = {
    update: XOR<WorkflowUpdateWithoutExecutionLogsInput, WorkflowUncheckedUpdateWithoutExecutionLogsInput>
    create: XOR<WorkflowCreateWithoutExecutionLogsInput, WorkflowUncheckedCreateWithoutExecutionLogsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutExecutionLogsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutExecutionLogsInput, WorkflowUncheckedUpdateWithoutExecutionLogsInput>
  }

  export type WorkflowUpdateWithoutExecutionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    Triggers?: TriggerUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutExecutionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Triggers?: TriggerUncheckedUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUncheckedUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type LogEntryUpsertWithWhereUniqueWithoutExecutionLogInput = {
    where: LogEntryWhereUniqueInput
    update: XOR<LogEntryUpdateWithoutExecutionLogInput, LogEntryUncheckedUpdateWithoutExecutionLogInput>
    create: XOR<LogEntryCreateWithoutExecutionLogInput, LogEntryUncheckedCreateWithoutExecutionLogInput>
  }

  export type LogEntryUpdateWithWhereUniqueWithoutExecutionLogInput = {
    where: LogEntryWhereUniqueInput
    data: XOR<LogEntryUpdateWithoutExecutionLogInput, LogEntryUncheckedUpdateWithoutExecutionLogInput>
  }

  export type LogEntryUpdateManyWithWhereWithoutExecutionLogInput = {
    where: LogEntryScalarWhereInput
    data: XOR<LogEntryUpdateManyMutationInput, LogEntryUncheckedUpdateManyWithoutExecutionLogInput>
  }

  export type LogEntryScalarWhereInput = {
    AND?: LogEntryScalarWhereInput | LogEntryScalarWhereInput[]
    OR?: LogEntryScalarWhereInput[]
    NOT?: LogEntryScalarWhereInput | LogEntryScalarWhereInput[]
    id?: StringFilter<"LogEntry"> | string
    executionLogId?: StringFilter<"LogEntry"> | string
    message?: StringFilter<"LogEntry"> | string
    level?: StringFilter<"LogEntry"> | string
    timestamp?: DateTimeFilter<"LogEntry"> | Date | string
  }

  export type ExecutionLogCreateWithoutLogEntriesInput = {
    id?: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
    workflow: WorkflowCreateNestedOneWithoutExecutionLogsInput
  }

  export type ExecutionLogUncheckedCreateWithoutLogEntriesInput = {
    id?: string
    workflowId: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
  }

  export type ExecutionLogCreateOrConnectWithoutLogEntriesInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutLogEntriesInput, ExecutionLogUncheckedCreateWithoutLogEntriesInput>
  }

  export type ExecutionLogUpsertWithoutLogEntriesInput = {
    update: XOR<ExecutionLogUpdateWithoutLogEntriesInput, ExecutionLogUncheckedUpdateWithoutLogEntriesInput>
    create: XOR<ExecutionLogCreateWithoutLogEntriesInput, ExecutionLogUncheckedCreateWithoutLogEntriesInput>
    where?: ExecutionLogWhereInput
  }

  export type ExecutionLogUpdateToOneWithWhereWithoutLogEntriesInput = {
    where?: ExecutionLogWhereInput
    data: XOR<ExecutionLogUpdateWithoutLogEntriesInput, ExecutionLogUncheckedUpdateWithoutLogEntriesInput>
  }

  export type ExecutionLogUpdateWithoutLogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflow?: WorkflowUpdateOneRequiredWithoutExecutionLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateWithoutLogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutIntegrationTokensInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowCreateNestedManyWithoutUserInput
    Credit?: CreditCreateNestedOneWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationTokensInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    Credit?: CreditUncheckedCreateNestedOneWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyUncheckedCreateNestedManyWithoutUserInput
    ActivityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationTokensInput, UserUncheckedCreateWithoutIntegrationTokensInput>
  }

  export type UserUpsertWithoutIntegrationTokensInput = {
    update: XOR<UserUpdateWithoutIntegrationTokensInput, UserUncheckedUpdateWithoutIntegrationTokensInput>
    create: XOR<UserCreateWithoutIntegrationTokensInput, UserUncheckedCreateWithoutIntegrationTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationTokensInput, UserUncheckedUpdateWithoutIntegrationTokensInput>
  }

  export type UserUpdateWithoutIntegrationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUpdateManyWithoutUserNestedInput
    Credit?: CreditUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    Credit?: CreditUncheckedUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUncheckedUpdateManyWithoutUserNestedInput
    ActivityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowCreateNestedManyWithoutUserInput
    Credit?: CreditCreateNestedOneWithoutUserInput
    Transactions?: TransactionCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    Workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    Credit?: CreditUncheckedCreateNestedOneWithoutUserInput
    Transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    APIKeys?: APIKeyUncheckedCreateNestedManyWithoutUserInput
    IntegrationTokens?: IntegrationTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUpdateManyWithoutUserNestedInput
    Credit?: CreditUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    Credit?: CreditUncheckedUpdateOneWithoutUserNestedInput
    Transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    APIKeys?: APIKeyUncheckedUpdateManyWithoutUserNestedInput
    IntegrationTokens?: IntegrationTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowCreateManyUserInput = {
    id?: string
    name: string
    creditsRequired?: number
    version?: number
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    type: string
    amount: number
    createdAt?: Date | string
  }

  export type APIKeyCreateManyUserInput = {
    id?: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
    workflowId?: string | null
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IntegrationTokenCreateManyUserInput = {
    id?: string
    serviceName: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type WorkflowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Triggers?: TriggerUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Triggers?: TriggerUncheckedUpdateManyWithoutWorkflowNestedInput
    Actions?: ActionUncheckedUpdateManyWithoutWorkflowNestedInput
    ExecutionLogs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    apiKeys?: APIKeyUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creditsRequired?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    workflow?: WorkflowUpdateOneWithoutApiKeysNestedInput
    triggers?: TriggerUpdateManyWithoutApiKeyNestedInput
  }

  export type APIKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    workflowId?: NullableStringFieldUpdateOperationsInput | string | null
    triggers?: TriggerUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type APIKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    workflowId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TriggerCreateManyApiKeyInput = {
    id?: string
    workflowId: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    isDeleted?: boolean
  }

  export type TriggerUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    workflow?: WorkflowUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerCreateManyWorkflowInput = {
    id?: string
    eventType: string
    cronSchedule?: string | null
    webhookURL?: string | null
    apiKeyId?: string | null
    isDeleted?: boolean
  }

  export type ActionCreateManyWorkflowInput = {
    id?: string
    actionType: string
    config: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
  }

  export type ExecutionLogCreateManyWorkflowInput = {
    id?: string
    status: string
    executedAt?: Date | string
    error?: string | null
    retryCount?: number
  }

  export type APIKeyCreateManyWorkflowInput = {
    id?: string
    userId: string
    key: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type TriggerUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    apiKey?: APIKeyUpdateOneWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    cronSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    webhookURL?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExecutionLogUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    LogEntries?: LogEntryUpdateManyWithoutExecutionLogNestedInput
  }

  export type ExecutionLogUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    LogEntries?: LogEntryUncheckedUpdateManyWithoutExecutionLogNestedInput
  }

  export type ExecutionLogUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type APIKeyUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAPIKeysNestedInput
    triggers?: TriggerUpdateManyWithoutApiKeyNestedInput
  }

  export type APIKeyUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    triggers?: TriggerUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type APIKeyUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogEntryCreateManyExecutionLogInput = {
    id?: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogEntryUpdateWithoutExecutionLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogEntryUncheckedUpdateWithoutExecutionLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogEntryUncheckedUpdateManyWithoutExecutionLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}