
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
 * Model VestingSchedule
 * 
 */
export type VestingSchedule = $Result.DefaultSelection<Prisma.$VestingSchedulePayload>
/**
 * Model UnlockEvent
 * 
 */
export type UnlockEvent = $Result.DefaultSelection<Prisma.$UnlockEventPayload>
/**
 * Model DLOMCalculation
 * 
 */
export type DLOMCalculation = $Result.DefaultSelection<Prisma.$DLOMCalculationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VestingSchedules
 * const vestingSchedules = await prisma.vestingSchedule.findMany()
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
   * // Fetch zero or more VestingSchedules
   * const vestingSchedules = await prisma.vestingSchedule.findMany()
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
   * `prisma.vestingSchedule`: Exposes CRUD operations for the **VestingSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VestingSchedules
    * const vestingSchedules = await prisma.vestingSchedule.findMany()
    * ```
    */
  get vestingSchedule(): Prisma.VestingScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unlockEvent`: Exposes CRUD operations for the **UnlockEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnlockEvents
    * const unlockEvents = await prisma.unlockEvent.findMany()
    * ```
    */
  get unlockEvent(): Prisma.UnlockEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dLOMCalculation`: Exposes CRUD operations for the **DLOMCalculation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DLOMCalculations
    * const dLOMCalculations = await prisma.dLOMCalculation.findMany()
    * ```
    */
  get dLOMCalculation(): Prisma.DLOMCalculationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    VestingSchedule: 'VestingSchedule',
    UnlockEvent: 'UnlockEvent',
    DLOMCalculation: 'DLOMCalculation'
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
      modelProps: "vestingSchedule" | "unlockEvent" | "dLOMCalculation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VestingSchedule: {
        payload: Prisma.$VestingSchedulePayload<ExtArgs>
        fields: Prisma.VestingScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VestingScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VestingScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>
          }
          findFirst: {
            args: Prisma.VestingScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VestingScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>
          }
          findMany: {
            args: Prisma.VestingScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>[]
          }
          create: {
            args: Prisma.VestingScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>
          }
          createMany: {
            args: Prisma.VestingScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VestingScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>[]
          }
          delete: {
            args: Prisma.VestingScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>
          }
          update: {
            args: Prisma.VestingScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>
          }
          deleteMany: {
            args: Prisma.VestingScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VestingScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VestingScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>[]
          }
          upsert: {
            args: Prisma.VestingScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VestingSchedulePayload>
          }
          aggregate: {
            args: Prisma.VestingScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVestingSchedule>
          }
          groupBy: {
            args: Prisma.VestingScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VestingScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VestingScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<VestingScheduleCountAggregateOutputType> | number
          }
        }
      }
      UnlockEvent: {
        payload: Prisma.$UnlockEventPayload<ExtArgs>
        fields: Prisma.UnlockEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnlockEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnlockEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>
          }
          findFirst: {
            args: Prisma.UnlockEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnlockEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>
          }
          findMany: {
            args: Prisma.UnlockEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>[]
          }
          create: {
            args: Prisma.UnlockEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>
          }
          createMany: {
            args: Prisma.UnlockEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnlockEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>[]
          }
          delete: {
            args: Prisma.UnlockEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>
          }
          update: {
            args: Prisma.UnlockEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>
          }
          deleteMany: {
            args: Prisma.UnlockEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnlockEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnlockEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>[]
          }
          upsert: {
            args: Prisma.UnlockEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockEventPayload>
          }
          aggregate: {
            args: Prisma.UnlockEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnlockEvent>
          }
          groupBy: {
            args: Prisma.UnlockEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnlockEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnlockEventCountArgs<ExtArgs>
            result: $Utils.Optional<UnlockEventCountAggregateOutputType> | number
          }
        }
      }
      DLOMCalculation: {
        payload: Prisma.$DLOMCalculationPayload<ExtArgs>
        fields: Prisma.DLOMCalculationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DLOMCalculationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DLOMCalculationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>
          }
          findFirst: {
            args: Prisma.DLOMCalculationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DLOMCalculationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>
          }
          findMany: {
            args: Prisma.DLOMCalculationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>[]
          }
          create: {
            args: Prisma.DLOMCalculationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>
          }
          createMany: {
            args: Prisma.DLOMCalculationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DLOMCalculationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>[]
          }
          delete: {
            args: Prisma.DLOMCalculationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>
          }
          update: {
            args: Prisma.DLOMCalculationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>
          }
          deleteMany: {
            args: Prisma.DLOMCalculationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DLOMCalculationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DLOMCalculationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>[]
          }
          upsert: {
            args: Prisma.DLOMCalculationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DLOMCalculationPayload>
          }
          aggregate: {
            args: Prisma.DLOMCalculationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDLOMCalculation>
          }
          groupBy: {
            args: Prisma.DLOMCalculationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DLOMCalculationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DLOMCalculationCountArgs<ExtArgs>
            result: $Utils.Optional<DLOMCalculationCountAggregateOutputType> | number
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
    vestingSchedule?: VestingScheduleOmit
    unlockEvent?: UnlockEventOmit
    dLOMCalculation?: DLOMCalculationOmit
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
   * Count Type VestingScheduleCountOutputType
   */

  export type VestingScheduleCountOutputType = {
    unlockEvents: number
    dlomCalculations: number
  }

  export type VestingScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unlockEvents?: boolean | VestingScheduleCountOutputTypeCountUnlockEventsArgs
    dlomCalculations?: boolean | VestingScheduleCountOutputTypeCountDlomCalculationsArgs
  }

  // Custom InputTypes
  /**
   * VestingScheduleCountOutputType without action
   */
  export type VestingScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingScheduleCountOutputType
     */
    select?: VestingScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VestingScheduleCountOutputType without action
   */
  export type VestingScheduleCountOutputTypeCountUnlockEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockEventWhereInput
  }

  /**
   * VestingScheduleCountOutputType without action
   */
  export type VestingScheduleCountOutputTypeCountDlomCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DLOMCalculationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model VestingSchedule
   */

  export type AggregateVestingSchedule = {
    _count: VestingScheduleCountAggregateOutputType | null
    _avg: VestingScheduleAvgAggregateOutputType | null
    _sum: VestingScheduleSumAggregateOutputType | null
    _min: VestingScheduleMinAggregateOutputType | null
    _max: VestingScheduleMaxAggregateOutputType | null
  }

  export type VestingScheduleAvgAggregateOutputType = {
    totalQuantity: number | null
    purchasePrice: number | null
  }

  export type VestingScheduleSumAggregateOutputType = {
    totalQuantity: number | null
    purchasePrice: number | null
  }

  export type VestingScheduleMinAggregateOutputType = {
    id: string | null
    name: string | null
    tokenSymbol: string | null
    createdAt: Date | null
    totalQuantity: number | null
    purchasePrice: number | null
    purchaseDate: Date | null
  }

  export type VestingScheduleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tokenSymbol: string | null
    createdAt: Date | null
    totalQuantity: number | null
    purchasePrice: number | null
    purchaseDate: Date | null
  }

  export type VestingScheduleCountAggregateOutputType = {
    id: number
    name: number
    tokenSymbol: number
    createdAt: number
    totalQuantity: number
    purchasePrice: number
    purchaseDate: number
    _all: number
  }


  export type VestingScheduleAvgAggregateInputType = {
    totalQuantity?: true
    purchasePrice?: true
  }

  export type VestingScheduleSumAggregateInputType = {
    totalQuantity?: true
    purchasePrice?: true
  }

  export type VestingScheduleMinAggregateInputType = {
    id?: true
    name?: true
    tokenSymbol?: true
    createdAt?: true
    totalQuantity?: true
    purchasePrice?: true
    purchaseDate?: true
  }

  export type VestingScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    tokenSymbol?: true
    createdAt?: true
    totalQuantity?: true
    purchasePrice?: true
    purchaseDate?: true
  }

  export type VestingScheduleCountAggregateInputType = {
    id?: true
    name?: true
    tokenSymbol?: true
    createdAt?: true
    totalQuantity?: true
    purchasePrice?: true
    purchaseDate?: true
    _all?: true
  }

  export type VestingScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestingSchedule to aggregate.
     */
    where?: VestingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestingSchedules to fetch.
     */
    orderBy?: VestingScheduleOrderByWithRelationInput | VestingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VestingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestingSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VestingSchedules
    **/
    _count?: true | VestingScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VestingScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VestingScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VestingScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VestingScheduleMaxAggregateInputType
  }

  export type GetVestingScheduleAggregateType<T extends VestingScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateVestingSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVestingSchedule[P]>
      : GetScalarType<T[P], AggregateVestingSchedule[P]>
  }




  export type VestingScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VestingScheduleWhereInput
    orderBy?: VestingScheduleOrderByWithAggregationInput | VestingScheduleOrderByWithAggregationInput[]
    by: VestingScheduleScalarFieldEnum[] | VestingScheduleScalarFieldEnum
    having?: VestingScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VestingScheduleCountAggregateInputType | true
    _avg?: VestingScheduleAvgAggregateInputType
    _sum?: VestingScheduleSumAggregateInputType
    _min?: VestingScheduleMinAggregateInputType
    _max?: VestingScheduleMaxAggregateInputType
  }

  export type VestingScheduleGroupByOutputType = {
    id: string
    name: string
    tokenSymbol: string
    createdAt: Date
    totalQuantity: number
    purchasePrice: number | null
    purchaseDate: Date | null
    _count: VestingScheduleCountAggregateOutputType | null
    _avg: VestingScheduleAvgAggregateOutputType | null
    _sum: VestingScheduleSumAggregateOutputType | null
    _min: VestingScheduleMinAggregateOutputType | null
    _max: VestingScheduleMaxAggregateOutputType | null
  }

  type GetVestingScheduleGroupByPayload<T extends VestingScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VestingScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VestingScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VestingScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], VestingScheduleGroupByOutputType[P]>
        }
      >
    >


  export type VestingScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tokenSymbol?: boolean
    createdAt?: boolean
    totalQuantity?: boolean
    purchasePrice?: boolean
    purchaseDate?: boolean
    unlockEvents?: boolean | VestingSchedule$unlockEventsArgs<ExtArgs>
    dlomCalculations?: boolean | VestingSchedule$dlomCalculationsArgs<ExtArgs>
    _count?: boolean | VestingScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vestingSchedule"]>

  export type VestingScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tokenSymbol?: boolean
    createdAt?: boolean
    totalQuantity?: boolean
    purchasePrice?: boolean
    purchaseDate?: boolean
  }, ExtArgs["result"]["vestingSchedule"]>

  export type VestingScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tokenSymbol?: boolean
    createdAt?: boolean
    totalQuantity?: boolean
    purchasePrice?: boolean
    purchaseDate?: boolean
  }, ExtArgs["result"]["vestingSchedule"]>

  export type VestingScheduleSelectScalar = {
    id?: boolean
    name?: boolean
    tokenSymbol?: boolean
    createdAt?: boolean
    totalQuantity?: boolean
    purchasePrice?: boolean
    purchaseDate?: boolean
  }

  export type VestingScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tokenSymbol" | "createdAt" | "totalQuantity" | "purchasePrice" | "purchaseDate", ExtArgs["result"]["vestingSchedule"]>
  export type VestingScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unlockEvents?: boolean | VestingSchedule$unlockEventsArgs<ExtArgs>
    dlomCalculations?: boolean | VestingSchedule$dlomCalculationsArgs<ExtArgs>
    _count?: boolean | VestingScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VestingScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VestingScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VestingSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VestingSchedule"
    objects: {
      unlockEvents: Prisma.$UnlockEventPayload<ExtArgs>[]
      dlomCalculations: Prisma.$DLOMCalculationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tokenSymbol: string
      createdAt: Date
      totalQuantity: number
      purchasePrice: number | null
      purchaseDate: Date | null
    }, ExtArgs["result"]["vestingSchedule"]>
    composites: {}
  }

  type VestingScheduleGetPayload<S extends boolean | null | undefined | VestingScheduleDefaultArgs> = $Result.GetResult<Prisma.$VestingSchedulePayload, S>

  type VestingScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VestingScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VestingScheduleCountAggregateInputType | true
    }

  export interface VestingScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VestingSchedule'], meta: { name: 'VestingSchedule' } }
    /**
     * Find zero or one VestingSchedule that matches the filter.
     * @param {VestingScheduleFindUniqueArgs} args - Arguments to find a VestingSchedule
     * @example
     * // Get one VestingSchedule
     * const vestingSchedule = await prisma.vestingSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VestingScheduleFindUniqueArgs>(args: SelectSubset<T, VestingScheduleFindUniqueArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VestingSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VestingScheduleFindUniqueOrThrowArgs} args - Arguments to find a VestingSchedule
     * @example
     * // Get one VestingSchedule
     * const vestingSchedule = await prisma.vestingSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VestingScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, VestingScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestingSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestingScheduleFindFirstArgs} args - Arguments to find a VestingSchedule
     * @example
     * // Get one VestingSchedule
     * const vestingSchedule = await prisma.vestingSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VestingScheduleFindFirstArgs>(args?: SelectSubset<T, VestingScheduleFindFirstArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VestingSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestingScheduleFindFirstOrThrowArgs} args - Arguments to find a VestingSchedule
     * @example
     * // Get one VestingSchedule
     * const vestingSchedule = await prisma.vestingSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VestingScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, VestingScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VestingSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestingScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VestingSchedules
     * const vestingSchedules = await prisma.vestingSchedule.findMany()
     * 
     * // Get first 10 VestingSchedules
     * const vestingSchedules = await prisma.vestingSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vestingScheduleWithIdOnly = await prisma.vestingSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VestingScheduleFindManyArgs>(args?: SelectSubset<T, VestingScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VestingSchedule.
     * @param {VestingScheduleCreateArgs} args - Arguments to create a VestingSchedule.
     * @example
     * // Create one VestingSchedule
     * const VestingSchedule = await prisma.vestingSchedule.create({
     *   data: {
     *     // ... data to create a VestingSchedule
     *   }
     * })
     * 
     */
    create<T extends VestingScheduleCreateArgs>(args: SelectSubset<T, VestingScheduleCreateArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VestingSchedules.
     * @param {VestingScheduleCreateManyArgs} args - Arguments to create many VestingSchedules.
     * @example
     * // Create many VestingSchedules
     * const vestingSchedule = await prisma.vestingSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VestingScheduleCreateManyArgs>(args?: SelectSubset<T, VestingScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VestingSchedules and returns the data saved in the database.
     * @param {VestingScheduleCreateManyAndReturnArgs} args - Arguments to create many VestingSchedules.
     * @example
     * // Create many VestingSchedules
     * const vestingSchedule = await prisma.vestingSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VestingSchedules and only return the `id`
     * const vestingScheduleWithIdOnly = await prisma.vestingSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VestingScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, VestingScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VestingSchedule.
     * @param {VestingScheduleDeleteArgs} args - Arguments to delete one VestingSchedule.
     * @example
     * // Delete one VestingSchedule
     * const VestingSchedule = await prisma.vestingSchedule.delete({
     *   where: {
     *     // ... filter to delete one VestingSchedule
     *   }
     * })
     * 
     */
    delete<T extends VestingScheduleDeleteArgs>(args: SelectSubset<T, VestingScheduleDeleteArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VestingSchedule.
     * @param {VestingScheduleUpdateArgs} args - Arguments to update one VestingSchedule.
     * @example
     * // Update one VestingSchedule
     * const vestingSchedule = await prisma.vestingSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VestingScheduleUpdateArgs>(args: SelectSubset<T, VestingScheduleUpdateArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VestingSchedules.
     * @param {VestingScheduleDeleteManyArgs} args - Arguments to filter VestingSchedules to delete.
     * @example
     * // Delete a few VestingSchedules
     * const { count } = await prisma.vestingSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VestingScheduleDeleteManyArgs>(args?: SelectSubset<T, VestingScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestingSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestingScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VestingSchedules
     * const vestingSchedule = await prisma.vestingSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VestingScheduleUpdateManyArgs>(args: SelectSubset<T, VestingScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VestingSchedules and returns the data updated in the database.
     * @param {VestingScheduleUpdateManyAndReturnArgs} args - Arguments to update many VestingSchedules.
     * @example
     * // Update many VestingSchedules
     * const vestingSchedule = await prisma.vestingSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VestingSchedules and only return the `id`
     * const vestingScheduleWithIdOnly = await prisma.vestingSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends VestingScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, VestingScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VestingSchedule.
     * @param {VestingScheduleUpsertArgs} args - Arguments to update or create a VestingSchedule.
     * @example
     * // Update or create a VestingSchedule
     * const vestingSchedule = await prisma.vestingSchedule.upsert({
     *   create: {
     *     // ... data to create a VestingSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VestingSchedule we want to update
     *   }
     * })
     */
    upsert<T extends VestingScheduleUpsertArgs>(args: SelectSubset<T, VestingScheduleUpsertArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VestingSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestingScheduleCountArgs} args - Arguments to filter VestingSchedules to count.
     * @example
     * // Count the number of VestingSchedules
     * const count = await prisma.vestingSchedule.count({
     *   where: {
     *     // ... the filter for the VestingSchedules we want to count
     *   }
     * })
    **/
    count<T extends VestingScheduleCountArgs>(
      args?: Subset<T, VestingScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VestingScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VestingSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestingScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VestingScheduleAggregateArgs>(args: Subset<T, VestingScheduleAggregateArgs>): Prisma.PrismaPromise<GetVestingScheduleAggregateType<T>>

    /**
     * Group by VestingSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VestingScheduleGroupByArgs} args - Group by arguments.
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
      T extends VestingScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VestingScheduleGroupByArgs['orderBy'] }
        : { orderBy?: VestingScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VestingScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVestingScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VestingSchedule model
   */
  readonly fields: VestingScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VestingSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VestingScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unlockEvents<T extends VestingSchedule$unlockEventsArgs<ExtArgs> = {}>(args?: Subset<T, VestingSchedule$unlockEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dlomCalculations<T extends VestingSchedule$dlomCalculationsArgs<ExtArgs> = {}>(args?: Subset<T, VestingSchedule$dlomCalculationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VestingSchedule model
   */
  interface VestingScheduleFieldRefs {
    readonly id: FieldRef<"VestingSchedule", 'String'>
    readonly name: FieldRef<"VestingSchedule", 'String'>
    readonly tokenSymbol: FieldRef<"VestingSchedule", 'String'>
    readonly createdAt: FieldRef<"VestingSchedule", 'DateTime'>
    readonly totalQuantity: FieldRef<"VestingSchedule", 'Float'>
    readonly purchasePrice: FieldRef<"VestingSchedule", 'Float'>
    readonly purchaseDate: FieldRef<"VestingSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VestingSchedule findUnique
   */
  export type VestingScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VestingSchedule to fetch.
     */
    where: VestingScheduleWhereUniqueInput
  }

  /**
   * VestingSchedule findUniqueOrThrow
   */
  export type VestingScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VestingSchedule to fetch.
     */
    where: VestingScheduleWhereUniqueInput
  }

  /**
   * VestingSchedule findFirst
   */
  export type VestingScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VestingSchedule to fetch.
     */
    where?: VestingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestingSchedules to fetch.
     */
    orderBy?: VestingScheduleOrderByWithRelationInput | VestingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestingSchedules.
     */
    cursor?: VestingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestingSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestingSchedules.
     */
    distinct?: VestingScheduleScalarFieldEnum | VestingScheduleScalarFieldEnum[]
  }

  /**
   * VestingSchedule findFirstOrThrow
   */
  export type VestingScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VestingSchedule to fetch.
     */
    where?: VestingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestingSchedules to fetch.
     */
    orderBy?: VestingScheduleOrderByWithRelationInput | VestingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VestingSchedules.
     */
    cursor?: VestingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestingSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VestingSchedules.
     */
    distinct?: VestingScheduleScalarFieldEnum | VestingScheduleScalarFieldEnum[]
  }

  /**
   * VestingSchedule findMany
   */
  export type VestingScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * Filter, which VestingSchedules to fetch.
     */
    where?: VestingScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VestingSchedules to fetch.
     */
    orderBy?: VestingScheduleOrderByWithRelationInput | VestingScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VestingSchedules.
     */
    cursor?: VestingScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VestingSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VestingSchedules.
     */
    skip?: number
    distinct?: VestingScheduleScalarFieldEnum | VestingScheduleScalarFieldEnum[]
  }

  /**
   * VestingSchedule create
   */
  export type VestingScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a VestingSchedule.
     */
    data: XOR<VestingScheduleCreateInput, VestingScheduleUncheckedCreateInput>
  }

  /**
   * VestingSchedule createMany
   */
  export type VestingScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VestingSchedules.
     */
    data: VestingScheduleCreateManyInput | VestingScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VestingSchedule createManyAndReturn
   */
  export type VestingScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many VestingSchedules.
     */
    data: VestingScheduleCreateManyInput | VestingScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VestingSchedule update
   */
  export type VestingScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a VestingSchedule.
     */
    data: XOR<VestingScheduleUpdateInput, VestingScheduleUncheckedUpdateInput>
    /**
     * Choose, which VestingSchedule to update.
     */
    where: VestingScheduleWhereUniqueInput
  }

  /**
   * VestingSchedule updateMany
   */
  export type VestingScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VestingSchedules.
     */
    data: XOR<VestingScheduleUpdateManyMutationInput, VestingScheduleUncheckedUpdateManyInput>
    /**
     * Filter which VestingSchedules to update
     */
    where?: VestingScheduleWhereInput
    /**
     * Limit how many VestingSchedules to update.
     */
    limit?: number
  }

  /**
   * VestingSchedule updateManyAndReturn
   */
  export type VestingScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * The data used to update VestingSchedules.
     */
    data: XOR<VestingScheduleUpdateManyMutationInput, VestingScheduleUncheckedUpdateManyInput>
    /**
     * Filter which VestingSchedules to update
     */
    where?: VestingScheduleWhereInput
    /**
     * Limit how many VestingSchedules to update.
     */
    limit?: number
  }

  /**
   * VestingSchedule upsert
   */
  export type VestingScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the VestingSchedule to update in case it exists.
     */
    where: VestingScheduleWhereUniqueInput
    /**
     * In case the VestingSchedule found by the `where` argument doesn't exist, create a new VestingSchedule with this data.
     */
    create: XOR<VestingScheduleCreateInput, VestingScheduleUncheckedCreateInput>
    /**
     * In case the VestingSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VestingScheduleUpdateInput, VestingScheduleUncheckedUpdateInput>
  }

  /**
   * VestingSchedule delete
   */
  export type VestingScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
    /**
     * Filter which VestingSchedule to delete.
     */
    where: VestingScheduleWhereUniqueInput
  }

  /**
   * VestingSchedule deleteMany
   */
  export type VestingScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VestingSchedules to delete
     */
    where?: VestingScheduleWhereInput
    /**
     * Limit how many VestingSchedules to delete.
     */
    limit?: number
  }

  /**
   * VestingSchedule.unlockEvents
   */
  export type VestingSchedule$unlockEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    where?: UnlockEventWhereInput
    orderBy?: UnlockEventOrderByWithRelationInput | UnlockEventOrderByWithRelationInput[]
    cursor?: UnlockEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnlockEventScalarFieldEnum | UnlockEventScalarFieldEnum[]
  }

  /**
   * VestingSchedule.dlomCalculations
   */
  export type VestingSchedule$dlomCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    where?: DLOMCalculationWhereInput
    orderBy?: DLOMCalculationOrderByWithRelationInput | DLOMCalculationOrderByWithRelationInput[]
    cursor?: DLOMCalculationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DLOMCalculationScalarFieldEnum | DLOMCalculationScalarFieldEnum[]
  }

  /**
   * VestingSchedule without action
   */
  export type VestingScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VestingSchedule
     */
    select?: VestingScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VestingSchedule
     */
    omit?: VestingScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VestingScheduleInclude<ExtArgs> | null
  }


  /**
   * Model UnlockEvent
   */

  export type AggregateUnlockEvent = {
    _count: UnlockEventCountAggregateOutputType | null
    _avg: UnlockEventAvgAggregateOutputType | null
    _sum: UnlockEventSumAggregateOutputType | null
    _min: UnlockEventMinAggregateOutputType | null
    _max: UnlockEventMaxAggregateOutputType | null
  }

  export type UnlockEventAvgAggregateOutputType = {
    amount: number | null
    duration: number | null
  }

  export type UnlockEventSumAggregateOutputType = {
    amount: number | null
    duration: number | null
  }

  export type UnlockEventMinAggregateOutputType = {
    id: string | null
    vestingScheduleId: string | null
    unlockDate: Date | null
    amount: number | null
    frequency: string | null
    duration: number | null
  }

  export type UnlockEventMaxAggregateOutputType = {
    id: string | null
    vestingScheduleId: string | null
    unlockDate: Date | null
    amount: number | null
    frequency: string | null
    duration: number | null
  }

  export type UnlockEventCountAggregateOutputType = {
    id: number
    vestingScheduleId: number
    unlockDate: number
    amount: number
    frequency: number
    duration: number
    _all: number
  }


  export type UnlockEventAvgAggregateInputType = {
    amount?: true
    duration?: true
  }

  export type UnlockEventSumAggregateInputType = {
    amount?: true
    duration?: true
  }

  export type UnlockEventMinAggregateInputType = {
    id?: true
    vestingScheduleId?: true
    unlockDate?: true
    amount?: true
    frequency?: true
    duration?: true
  }

  export type UnlockEventMaxAggregateInputType = {
    id?: true
    vestingScheduleId?: true
    unlockDate?: true
    amount?: true
    frequency?: true
    duration?: true
  }

  export type UnlockEventCountAggregateInputType = {
    id?: true
    vestingScheduleId?: true
    unlockDate?: true
    amount?: true
    frequency?: true
    duration?: true
    _all?: true
  }

  export type UnlockEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockEvent to aggregate.
     */
    where?: UnlockEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockEvents to fetch.
     */
    orderBy?: UnlockEventOrderByWithRelationInput | UnlockEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnlockEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnlockEvents
    **/
    _count?: true | UnlockEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnlockEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnlockEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnlockEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnlockEventMaxAggregateInputType
  }

  export type GetUnlockEventAggregateType<T extends UnlockEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUnlockEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnlockEvent[P]>
      : GetScalarType<T[P], AggregateUnlockEvent[P]>
  }




  export type UnlockEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockEventWhereInput
    orderBy?: UnlockEventOrderByWithAggregationInput | UnlockEventOrderByWithAggregationInput[]
    by: UnlockEventScalarFieldEnum[] | UnlockEventScalarFieldEnum
    having?: UnlockEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnlockEventCountAggregateInputType | true
    _avg?: UnlockEventAvgAggregateInputType
    _sum?: UnlockEventSumAggregateInputType
    _min?: UnlockEventMinAggregateInputType
    _max?: UnlockEventMaxAggregateInputType
  }

  export type UnlockEventGroupByOutputType = {
    id: string
    vestingScheduleId: string
    unlockDate: Date
    amount: number
    frequency: string
    duration: number | null
    _count: UnlockEventCountAggregateOutputType | null
    _avg: UnlockEventAvgAggregateOutputType | null
    _sum: UnlockEventSumAggregateOutputType | null
    _min: UnlockEventMinAggregateOutputType | null
    _max: UnlockEventMaxAggregateOutputType | null
  }

  type GetUnlockEventGroupByPayload<T extends UnlockEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnlockEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnlockEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnlockEventGroupByOutputType[P]>
            : GetScalarType<T[P], UnlockEventGroupByOutputType[P]>
        }
      >
    >


  export type UnlockEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestingScheduleId?: boolean
    unlockDate?: boolean
    amount?: boolean
    frequency?: boolean
    duration?: boolean
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockEvent"]>

  export type UnlockEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestingScheduleId?: boolean
    unlockDate?: boolean
    amount?: boolean
    frequency?: boolean
    duration?: boolean
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockEvent"]>

  export type UnlockEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestingScheduleId?: boolean
    unlockDate?: boolean
    amount?: boolean
    frequency?: boolean
    duration?: boolean
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockEvent"]>

  export type UnlockEventSelectScalar = {
    id?: boolean
    vestingScheduleId?: boolean
    unlockDate?: boolean
    amount?: boolean
    frequency?: boolean
    duration?: boolean
  }

  export type UnlockEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vestingScheduleId" | "unlockDate" | "amount" | "frequency" | "duration", ExtArgs["result"]["unlockEvent"]>
  export type UnlockEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }
  export type UnlockEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }
  export type UnlockEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }

  export type $UnlockEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnlockEvent"
    objects: {
      vestingSchedule: Prisma.$VestingSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vestingScheduleId: string
      unlockDate: Date
      amount: number
      frequency: string
      duration: number | null
    }, ExtArgs["result"]["unlockEvent"]>
    composites: {}
  }

  type UnlockEventGetPayload<S extends boolean | null | undefined | UnlockEventDefaultArgs> = $Result.GetResult<Prisma.$UnlockEventPayload, S>

  type UnlockEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnlockEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnlockEventCountAggregateInputType | true
    }

  export interface UnlockEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnlockEvent'], meta: { name: 'UnlockEvent' } }
    /**
     * Find zero or one UnlockEvent that matches the filter.
     * @param {UnlockEventFindUniqueArgs} args - Arguments to find a UnlockEvent
     * @example
     * // Get one UnlockEvent
     * const unlockEvent = await prisma.unlockEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnlockEventFindUniqueArgs>(args: SelectSubset<T, UnlockEventFindUniqueArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnlockEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnlockEventFindUniqueOrThrowArgs} args - Arguments to find a UnlockEvent
     * @example
     * // Get one UnlockEvent
     * const unlockEvent = await prisma.unlockEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnlockEventFindUniqueOrThrowArgs>(args: SelectSubset<T, UnlockEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockEventFindFirstArgs} args - Arguments to find a UnlockEvent
     * @example
     * // Get one UnlockEvent
     * const unlockEvent = await prisma.unlockEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnlockEventFindFirstArgs>(args?: SelectSubset<T, UnlockEventFindFirstArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockEventFindFirstOrThrowArgs} args - Arguments to find a UnlockEvent
     * @example
     * // Get one UnlockEvent
     * const unlockEvent = await prisma.unlockEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnlockEventFindFirstOrThrowArgs>(args?: SelectSubset<T, UnlockEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnlockEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnlockEvents
     * const unlockEvents = await prisma.unlockEvent.findMany()
     * 
     * // Get first 10 UnlockEvents
     * const unlockEvents = await prisma.unlockEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unlockEventWithIdOnly = await prisma.unlockEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnlockEventFindManyArgs>(args?: SelectSubset<T, UnlockEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnlockEvent.
     * @param {UnlockEventCreateArgs} args - Arguments to create a UnlockEvent.
     * @example
     * // Create one UnlockEvent
     * const UnlockEvent = await prisma.unlockEvent.create({
     *   data: {
     *     // ... data to create a UnlockEvent
     *   }
     * })
     * 
     */
    create<T extends UnlockEventCreateArgs>(args: SelectSubset<T, UnlockEventCreateArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnlockEvents.
     * @param {UnlockEventCreateManyArgs} args - Arguments to create many UnlockEvents.
     * @example
     * // Create many UnlockEvents
     * const unlockEvent = await prisma.unlockEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnlockEventCreateManyArgs>(args?: SelectSubset<T, UnlockEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnlockEvents and returns the data saved in the database.
     * @param {UnlockEventCreateManyAndReturnArgs} args - Arguments to create many UnlockEvents.
     * @example
     * // Create many UnlockEvents
     * const unlockEvent = await prisma.unlockEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnlockEvents and only return the `id`
     * const unlockEventWithIdOnly = await prisma.unlockEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnlockEventCreateManyAndReturnArgs>(args?: SelectSubset<T, UnlockEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnlockEvent.
     * @param {UnlockEventDeleteArgs} args - Arguments to delete one UnlockEvent.
     * @example
     * // Delete one UnlockEvent
     * const UnlockEvent = await prisma.unlockEvent.delete({
     *   where: {
     *     // ... filter to delete one UnlockEvent
     *   }
     * })
     * 
     */
    delete<T extends UnlockEventDeleteArgs>(args: SelectSubset<T, UnlockEventDeleteArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnlockEvent.
     * @param {UnlockEventUpdateArgs} args - Arguments to update one UnlockEvent.
     * @example
     * // Update one UnlockEvent
     * const unlockEvent = await prisma.unlockEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnlockEventUpdateArgs>(args: SelectSubset<T, UnlockEventUpdateArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnlockEvents.
     * @param {UnlockEventDeleteManyArgs} args - Arguments to filter UnlockEvents to delete.
     * @example
     * // Delete a few UnlockEvents
     * const { count } = await prisma.unlockEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnlockEventDeleteManyArgs>(args?: SelectSubset<T, UnlockEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnlockEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnlockEvents
     * const unlockEvent = await prisma.unlockEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnlockEventUpdateManyArgs>(args: SelectSubset<T, UnlockEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnlockEvents and returns the data updated in the database.
     * @param {UnlockEventUpdateManyAndReturnArgs} args - Arguments to update many UnlockEvents.
     * @example
     * // Update many UnlockEvents
     * const unlockEvent = await prisma.unlockEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnlockEvents and only return the `id`
     * const unlockEventWithIdOnly = await prisma.unlockEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnlockEventUpdateManyAndReturnArgs>(args: SelectSubset<T, UnlockEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnlockEvent.
     * @param {UnlockEventUpsertArgs} args - Arguments to update or create a UnlockEvent.
     * @example
     * // Update or create a UnlockEvent
     * const unlockEvent = await prisma.unlockEvent.upsert({
     *   create: {
     *     // ... data to create a UnlockEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnlockEvent we want to update
     *   }
     * })
     */
    upsert<T extends UnlockEventUpsertArgs>(args: SelectSubset<T, UnlockEventUpsertArgs<ExtArgs>>): Prisma__UnlockEventClient<$Result.GetResult<Prisma.$UnlockEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnlockEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockEventCountArgs} args - Arguments to filter UnlockEvents to count.
     * @example
     * // Count the number of UnlockEvents
     * const count = await prisma.unlockEvent.count({
     *   where: {
     *     // ... the filter for the UnlockEvents we want to count
     *   }
     * })
    **/
    count<T extends UnlockEventCountArgs>(
      args?: Subset<T, UnlockEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnlockEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnlockEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnlockEventAggregateArgs>(args: Subset<T, UnlockEventAggregateArgs>): Prisma.PrismaPromise<GetUnlockEventAggregateType<T>>

    /**
     * Group by UnlockEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockEventGroupByArgs} args - Group by arguments.
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
      T extends UnlockEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnlockEventGroupByArgs['orderBy'] }
        : { orderBy?: UnlockEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnlockEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnlockEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnlockEvent model
   */
  readonly fields: UnlockEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnlockEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnlockEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vestingSchedule<T extends VestingScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VestingScheduleDefaultArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnlockEvent model
   */
  interface UnlockEventFieldRefs {
    readonly id: FieldRef<"UnlockEvent", 'String'>
    readonly vestingScheduleId: FieldRef<"UnlockEvent", 'String'>
    readonly unlockDate: FieldRef<"UnlockEvent", 'DateTime'>
    readonly amount: FieldRef<"UnlockEvent", 'Float'>
    readonly frequency: FieldRef<"UnlockEvent", 'String'>
    readonly duration: FieldRef<"UnlockEvent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UnlockEvent findUnique
   */
  export type UnlockEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * Filter, which UnlockEvent to fetch.
     */
    where: UnlockEventWhereUniqueInput
  }

  /**
   * UnlockEvent findUniqueOrThrow
   */
  export type UnlockEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * Filter, which UnlockEvent to fetch.
     */
    where: UnlockEventWhereUniqueInput
  }

  /**
   * UnlockEvent findFirst
   */
  export type UnlockEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * Filter, which UnlockEvent to fetch.
     */
    where?: UnlockEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockEvents to fetch.
     */
    orderBy?: UnlockEventOrderByWithRelationInput | UnlockEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockEvents.
     */
    cursor?: UnlockEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockEvents.
     */
    distinct?: UnlockEventScalarFieldEnum | UnlockEventScalarFieldEnum[]
  }

  /**
   * UnlockEvent findFirstOrThrow
   */
  export type UnlockEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * Filter, which UnlockEvent to fetch.
     */
    where?: UnlockEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockEvents to fetch.
     */
    orderBy?: UnlockEventOrderByWithRelationInput | UnlockEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockEvents.
     */
    cursor?: UnlockEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockEvents.
     */
    distinct?: UnlockEventScalarFieldEnum | UnlockEventScalarFieldEnum[]
  }

  /**
   * UnlockEvent findMany
   */
  export type UnlockEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * Filter, which UnlockEvents to fetch.
     */
    where?: UnlockEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockEvents to fetch.
     */
    orderBy?: UnlockEventOrderByWithRelationInput | UnlockEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnlockEvents.
     */
    cursor?: UnlockEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockEvents.
     */
    skip?: number
    distinct?: UnlockEventScalarFieldEnum | UnlockEventScalarFieldEnum[]
  }

  /**
   * UnlockEvent create
   */
  export type UnlockEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * The data needed to create a UnlockEvent.
     */
    data: XOR<UnlockEventCreateInput, UnlockEventUncheckedCreateInput>
  }

  /**
   * UnlockEvent createMany
   */
  export type UnlockEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnlockEvents.
     */
    data: UnlockEventCreateManyInput | UnlockEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnlockEvent createManyAndReturn
   */
  export type UnlockEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * The data used to create many UnlockEvents.
     */
    data: UnlockEventCreateManyInput | UnlockEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnlockEvent update
   */
  export type UnlockEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * The data needed to update a UnlockEvent.
     */
    data: XOR<UnlockEventUpdateInput, UnlockEventUncheckedUpdateInput>
    /**
     * Choose, which UnlockEvent to update.
     */
    where: UnlockEventWhereUniqueInput
  }

  /**
   * UnlockEvent updateMany
   */
  export type UnlockEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnlockEvents.
     */
    data: XOR<UnlockEventUpdateManyMutationInput, UnlockEventUncheckedUpdateManyInput>
    /**
     * Filter which UnlockEvents to update
     */
    where?: UnlockEventWhereInput
    /**
     * Limit how many UnlockEvents to update.
     */
    limit?: number
  }

  /**
   * UnlockEvent updateManyAndReturn
   */
  export type UnlockEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * The data used to update UnlockEvents.
     */
    data: XOR<UnlockEventUpdateManyMutationInput, UnlockEventUncheckedUpdateManyInput>
    /**
     * Filter which UnlockEvents to update
     */
    where?: UnlockEventWhereInput
    /**
     * Limit how many UnlockEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnlockEvent upsert
   */
  export type UnlockEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * The filter to search for the UnlockEvent to update in case it exists.
     */
    where: UnlockEventWhereUniqueInput
    /**
     * In case the UnlockEvent found by the `where` argument doesn't exist, create a new UnlockEvent with this data.
     */
    create: XOR<UnlockEventCreateInput, UnlockEventUncheckedCreateInput>
    /**
     * In case the UnlockEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnlockEventUpdateInput, UnlockEventUncheckedUpdateInput>
  }

  /**
   * UnlockEvent delete
   */
  export type UnlockEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
    /**
     * Filter which UnlockEvent to delete.
     */
    where: UnlockEventWhereUniqueInput
  }

  /**
   * UnlockEvent deleteMany
   */
  export type UnlockEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockEvents to delete
     */
    where?: UnlockEventWhereInput
    /**
     * Limit how many UnlockEvents to delete.
     */
    limit?: number
  }

  /**
   * UnlockEvent without action
   */
  export type UnlockEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockEvent
     */
    select?: UnlockEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockEvent
     */
    omit?: UnlockEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockEventInclude<ExtArgs> | null
  }


  /**
   * Model DLOMCalculation
   */

  export type AggregateDLOMCalculation = {
    _count: DLOMCalculationCountAggregateOutputType | null
    _avg: DLOMCalculationAvgAggregateOutputType | null
    _sum: DLOMCalculationSumAggregateOutputType | null
    _min: DLOMCalculationMinAggregateOutputType | null
    _max: DLOMCalculationMaxAggregateOutputType | null
  }

  export type DLOMCalculationAvgAggregateOutputType = {
    totalUnlocked: number | null
    totalLocked: number | null
    discountPercent: number | null
    discountedValue: number | null
  }

  export type DLOMCalculationSumAggregateOutputType = {
    totalUnlocked: number | null
    totalLocked: number | null
    discountPercent: number | null
    discountedValue: number | null
  }

  export type DLOMCalculationMinAggregateOutputType = {
    id: string | null
    vestingScheduleId: string | null
    runAt: Date | null
    totalUnlocked: number | null
    totalLocked: number | null
    discountPercent: number | null
    discountedValue: number | null
  }

  export type DLOMCalculationMaxAggregateOutputType = {
    id: string | null
    vestingScheduleId: string | null
    runAt: Date | null
    totalUnlocked: number | null
    totalLocked: number | null
    discountPercent: number | null
    discountedValue: number | null
  }

  export type DLOMCalculationCountAggregateOutputType = {
    id: number
    vestingScheduleId: number
    runAt: number
    totalUnlocked: number
    totalLocked: number
    discountPercent: number
    discountedValue: number
    resultsJson: number
    _all: number
  }


  export type DLOMCalculationAvgAggregateInputType = {
    totalUnlocked?: true
    totalLocked?: true
    discountPercent?: true
    discountedValue?: true
  }

  export type DLOMCalculationSumAggregateInputType = {
    totalUnlocked?: true
    totalLocked?: true
    discountPercent?: true
    discountedValue?: true
  }

  export type DLOMCalculationMinAggregateInputType = {
    id?: true
    vestingScheduleId?: true
    runAt?: true
    totalUnlocked?: true
    totalLocked?: true
    discountPercent?: true
    discountedValue?: true
  }

  export type DLOMCalculationMaxAggregateInputType = {
    id?: true
    vestingScheduleId?: true
    runAt?: true
    totalUnlocked?: true
    totalLocked?: true
    discountPercent?: true
    discountedValue?: true
  }

  export type DLOMCalculationCountAggregateInputType = {
    id?: true
    vestingScheduleId?: true
    runAt?: true
    totalUnlocked?: true
    totalLocked?: true
    discountPercent?: true
    discountedValue?: true
    resultsJson?: true
    _all?: true
  }

  export type DLOMCalculationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DLOMCalculation to aggregate.
     */
    where?: DLOMCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DLOMCalculations to fetch.
     */
    orderBy?: DLOMCalculationOrderByWithRelationInput | DLOMCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DLOMCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DLOMCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DLOMCalculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DLOMCalculations
    **/
    _count?: true | DLOMCalculationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DLOMCalculationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DLOMCalculationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DLOMCalculationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DLOMCalculationMaxAggregateInputType
  }

  export type GetDLOMCalculationAggregateType<T extends DLOMCalculationAggregateArgs> = {
        [P in keyof T & keyof AggregateDLOMCalculation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDLOMCalculation[P]>
      : GetScalarType<T[P], AggregateDLOMCalculation[P]>
  }




  export type DLOMCalculationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DLOMCalculationWhereInput
    orderBy?: DLOMCalculationOrderByWithAggregationInput | DLOMCalculationOrderByWithAggregationInput[]
    by: DLOMCalculationScalarFieldEnum[] | DLOMCalculationScalarFieldEnum
    having?: DLOMCalculationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DLOMCalculationCountAggregateInputType | true
    _avg?: DLOMCalculationAvgAggregateInputType
    _sum?: DLOMCalculationSumAggregateInputType
    _min?: DLOMCalculationMinAggregateInputType
    _max?: DLOMCalculationMaxAggregateInputType
  }

  export type DLOMCalculationGroupByOutputType = {
    id: string
    vestingScheduleId: string
    runAt: Date
    totalUnlocked: number
    totalLocked: number
    discountPercent: number | null
    discountedValue: number | null
    resultsJson: JsonValue
    _count: DLOMCalculationCountAggregateOutputType | null
    _avg: DLOMCalculationAvgAggregateOutputType | null
    _sum: DLOMCalculationSumAggregateOutputType | null
    _min: DLOMCalculationMinAggregateOutputType | null
    _max: DLOMCalculationMaxAggregateOutputType | null
  }

  type GetDLOMCalculationGroupByPayload<T extends DLOMCalculationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DLOMCalculationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DLOMCalculationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DLOMCalculationGroupByOutputType[P]>
            : GetScalarType<T[P], DLOMCalculationGroupByOutputType[P]>
        }
      >
    >


  export type DLOMCalculationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestingScheduleId?: boolean
    runAt?: boolean
    totalUnlocked?: boolean
    totalLocked?: boolean
    discountPercent?: boolean
    discountedValue?: boolean
    resultsJson?: boolean
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dLOMCalculation"]>

  export type DLOMCalculationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestingScheduleId?: boolean
    runAt?: boolean
    totalUnlocked?: boolean
    totalLocked?: boolean
    discountPercent?: boolean
    discountedValue?: boolean
    resultsJson?: boolean
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dLOMCalculation"]>

  export type DLOMCalculationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vestingScheduleId?: boolean
    runAt?: boolean
    totalUnlocked?: boolean
    totalLocked?: boolean
    discountPercent?: boolean
    discountedValue?: boolean
    resultsJson?: boolean
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dLOMCalculation"]>

  export type DLOMCalculationSelectScalar = {
    id?: boolean
    vestingScheduleId?: boolean
    runAt?: boolean
    totalUnlocked?: boolean
    totalLocked?: boolean
    discountPercent?: boolean
    discountedValue?: boolean
    resultsJson?: boolean
  }

  export type DLOMCalculationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vestingScheduleId" | "runAt" | "totalUnlocked" | "totalLocked" | "discountPercent" | "discountedValue" | "resultsJson", ExtArgs["result"]["dLOMCalculation"]>
  export type DLOMCalculationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }
  export type DLOMCalculationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }
  export type DLOMCalculationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vestingSchedule?: boolean | VestingScheduleDefaultArgs<ExtArgs>
  }

  export type $DLOMCalculationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DLOMCalculation"
    objects: {
      vestingSchedule: Prisma.$VestingSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vestingScheduleId: string
      runAt: Date
      totalUnlocked: number
      totalLocked: number
      discountPercent: number | null
      discountedValue: number | null
      resultsJson: Prisma.JsonValue
    }, ExtArgs["result"]["dLOMCalculation"]>
    composites: {}
  }

  type DLOMCalculationGetPayload<S extends boolean | null | undefined | DLOMCalculationDefaultArgs> = $Result.GetResult<Prisma.$DLOMCalculationPayload, S>

  type DLOMCalculationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DLOMCalculationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DLOMCalculationCountAggregateInputType | true
    }

  export interface DLOMCalculationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DLOMCalculation'], meta: { name: 'DLOMCalculation' } }
    /**
     * Find zero or one DLOMCalculation that matches the filter.
     * @param {DLOMCalculationFindUniqueArgs} args - Arguments to find a DLOMCalculation
     * @example
     * // Get one DLOMCalculation
     * const dLOMCalculation = await prisma.dLOMCalculation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DLOMCalculationFindUniqueArgs>(args: SelectSubset<T, DLOMCalculationFindUniqueArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DLOMCalculation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DLOMCalculationFindUniqueOrThrowArgs} args - Arguments to find a DLOMCalculation
     * @example
     * // Get one DLOMCalculation
     * const dLOMCalculation = await prisma.dLOMCalculation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DLOMCalculationFindUniqueOrThrowArgs>(args: SelectSubset<T, DLOMCalculationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DLOMCalculation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DLOMCalculationFindFirstArgs} args - Arguments to find a DLOMCalculation
     * @example
     * // Get one DLOMCalculation
     * const dLOMCalculation = await prisma.dLOMCalculation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DLOMCalculationFindFirstArgs>(args?: SelectSubset<T, DLOMCalculationFindFirstArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DLOMCalculation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DLOMCalculationFindFirstOrThrowArgs} args - Arguments to find a DLOMCalculation
     * @example
     * // Get one DLOMCalculation
     * const dLOMCalculation = await prisma.dLOMCalculation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DLOMCalculationFindFirstOrThrowArgs>(args?: SelectSubset<T, DLOMCalculationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DLOMCalculations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DLOMCalculationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DLOMCalculations
     * const dLOMCalculations = await prisma.dLOMCalculation.findMany()
     * 
     * // Get first 10 DLOMCalculations
     * const dLOMCalculations = await prisma.dLOMCalculation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dLOMCalculationWithIdOnly = await prisma.dLOMCalculation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DLOMCalculationFindManyArgs>(args?: SelectSubset<T, DLOMCalculationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DLOMCalculation.
     * @param {DLOMCalculationCreateArgs} args - Arguments to create a DLOMCalculation.
     * @example
     * // Create one DLOMCalculation
     * const DLOMCalculation = await prisma.dLOMCalculation.create({
     *   data: {
     *     // ... data to create a DLOMCalculation
     *   }
     * })
     * 
     */
    create<T extends DLOMCalculationCreateArgs>(args: SelectSubset<T, DLOMCalculationCreateArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DLOMCalculations.
     * @param {DLOMCalculationCreateManyArgs} args - Arguments to create many DLOMCalculations.
     * @example
     * // Create many DLOMCalculations
     * const dLOMCalculation = await prisma.dLOMCalculation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DLOMCalculationCreateManyArgs>(args?: SelectSubset<T, DLOMCalculationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DLOMCalculations and returns the data saved in the database.
     * @param {DLOMCalculationCreateManyAndReturnArgs} args - Arguments to create many DLOMCalculations.
     * @example
     * // Create many DLOMCalculations
     * const dLOMCalculation = await prisma.dLOMCalculation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DLOMCalculations and only return the `id`
     * const dLOMCalculationWithIdOnly = await prisma.dLOMCalculation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DLOMCalculationCreateManyAndReturnArgs>(args?: SelectSubset<T, DLOMCalculationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DLOMCalculation.
     * @param {DLOMCalculationDeleteArgs} args - Arguments to delete one DLOMCalculation.
     * @example
     * // Delete one DLOMCalculation
     * const DLOMCalculation = await prisma.dLOMCalculation.delete({
     *   where: {
     *     // ... filter to delete one DLOMCalculation
     *   }
     * })
     * 
     */
    delete<T extends DLOMCalculationDeleteArgs>(args: SelectSubset<T, DLOMCalculationDeleteArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DLOMCalculation.
     * @param {DLOMCalculationUpdateArgs} args - Arguments to update one DLOMCalculation.
     * @example
     * // Update one DLOMCalculation
     * const dLOMCalculation = await prisma.dLOMCalculation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DLOMCalculationUpdateArgs>(args: SelectSubset<T, DLOMCalculationUpdateArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DLOMCalculations.
     * @param {DLOMCalculationDeleteManyArgs} args - Arguments to filter DLOMCalculations to delete.
     * @example
     * // Delete a few DLOMCalculations
     * const { count } = await prisma.dLOMCalculation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DLOMCalculationDeleteManyArgs>(args?: SelectSubset<T, DLOMCalculationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DLOMCalculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DLOMCalculationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DLOMCalculations
     * const dLOMCalculation = await prisma.dLOMCalculation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DLOMCalculationUpdateManyArgs>(args: SelectSubset<T, DLOMCalculationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DLOMCalculations and returns the data updated in the database.
     * @param {DLOMCalculationUpdateManyAndReturnArgs} args - Arguments to update many DLOMCalculations.
     * @example
     * // Update many DLOMCalculations
     * const dLOMCalculation = await prisma.dLOMCalculation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DLOMCalculations and only return the `id`
     * const dLOMCalculationWithIdOnly = await prisma.dLOMCalculation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DLOMCalculationUpdateManyAndReturnArgs>(args: SelectSubset<T, DLOMCalculationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DLOMCalculation.
     * @param {DLOMCalculationUpsertArgs} args - Arguments to update or create a DLOMCalculation.
     * @example
     * // Update or create a DLOMCalculation
     * const dLOMCalculation = await prisma.dLOMCalculation.upsert({
     *   create: {
     *     // ... data to create a DLOMCalculation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DLOMCalculation we want to update
     *   }
     * })
     */
    upsert<T extends DLOMCalculationUpsertArgs>(args: SelectSubset<T, DLOMCalculationUpsertArgs<ExtArgs>>): Prisma__DLOMCalculationClient<$Result.GetResult<Prisma.$DLOMCalculationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DLOMCalculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DLOMCalculationCountArgs} args - Arguments to filter DLOMCalculations to count.
     * @example
     * // Count the number of DLOMCalculations
     * const count = await prisma.dLOMCalculation.count({
     *   where: {
     *     // ... the filter for the DLOMCalculations we want to count
     *   }
     * })
    **/
    count<T extends DLOMCalculationCountArgs>(
      args?: Subset<T, DLOMCalculationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DLOMCalculationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DLOMCalculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DLOMCalculationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DLOMCalculationAggregateArgs>(args: Subset<T, DLOMCalculationAggregateArgs>): Prisma.PrismaPromise<GetDLOMCalculationAggregateType<T>>

    /**
     * Group by DLOMCalculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DLOMCalculationGroupByArgs} args - Group by arguments.
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
      T extends DLOMCalculationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DLOMCalculationGroupByArgs['orderBy'] }
        : { orderBy?: DLOMCalculationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DLOMCalculationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDLOMCalculationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DLOMCalculation model
   */
  readonly fields: DLOMCalculationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DLOMCalculation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DLOMCalculationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vestingSchedule<T extends VestingScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VestingScheduleDefaultArgs<ExtArgs>>): Prisma__VestingScheduleClient<$Result.GetResult<Prisma.$VestingSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DLOMCalculation model
   */
  interface DLOMCalculationFieldRefs {
    readonly id: FieldRef<"DLOMCalculation", 'String'>
    readonly vestingScheduleId: FieldRef<"DLOMCalculation", 'String'>
    readonly runAt: FieldRef<"DLOMCalculation", 'DateTime'>
    readonly totalUnlocked: FieldRef<"DLOMCalculation", 'Float'>
    readonly totalLocked: FieldRef<"DLOMCalculation", 'Float'>
    readonly discountPercent: FieldRef<"DLOMCalculation", 'Float'>
    readonly discountedValue: FieldRef<"DLOMCalculation", 'Float'>
    readonly resultsJson: FieldRef<"DLOMCalculation", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DLOMCalculation findUnique
   */
  export type DLOMCalculationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * Filter, which DLOMCalculation to fetch.
     */
    where: DLOMCalculationWhereUniqueInput
  }

  /**
   * DLOMCalculation findUniqueOrThrow
   */
  export type DLOMCalculationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * Filter, which DLOMCalculation to fetch.
     */
    where: DLOMCalculationWhereUniqueInput
  }

  /**
   * DLOMCalculation findFirst
   */
  export type DLOMCalculationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * Filter, which DLOMCalculation to fetch.
     */
    where?: DLOMCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DLOMCalculations to fetch.
     */
    orderBy?: DLOMCalculationOrderByWithRelationInput | DLOMCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DLOMCalculations.
     */
    cursor?: DLOMCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DLOMCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DLOMCalculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DLOMCalculations.
     */
    distinct?: DLOMCalculationScalarFieldEnum | DLOMCalculationScalarFieldEnum[]
  }

  /**
   * DLOMCalculation findFirstOrThrow
   */
  export type DLOMCalculationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * Filter, which DLOMCalculation to fetch.
     */
    where?: DLOMCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DLOMCalculations to fetch.
     */
    orderBy?: DLOMCalculationOrderByWithRelationInput | DLOMCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DLOMCalculations.
     */
    cursor?: DLOMCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DLOMCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DLOMCalculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DLOMCalculations.
     */
    distinct?: DLOMCalculationScalarFieldEnum | DLOMCalculationScalarFieldEnum[]
  }

  /**
   * DLOMCalculation findMany
   */
  export type DLOMCalculationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * Filter, which DLOMCalculations to fetch.
     */
    where?: DLOMCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DLOMCalculations to fetch.
     */
    orderBy?: DLOMCalculationOrderByWithRelationInput | DLOMCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DLOMCalculations.
     */
    cursor?: DLOMCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DLOMCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DLOMCalculations.
     */
    skip?: number
    distinct?: DLOMCalculationScalarFieldEnum | DLOMCalculationScalarFieldEnum[]
  }

  /**
   * DLOMCalculation create
   */
  export type DLOMCalculationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * The data needed to create a DLOMCalculation.
     */
    data: XOR<DLOMCalculationCreateInput, DLOMCalculationUncheckedCreateInput>
  }

  /**
   * DLOMCalculation createMany
   */
  export type DLOMCalculationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DLOMCalculations.
     */
    data: DLOMCalculationCreateManyInput | DLOMCalculationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DLOMCalculation createManyAndReturn
   */
  export type DLOMCalculationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * The data used to create many DLOMCalculations.
     */
    data: DLOMCalculationCreateManyInput | DLOMCalculationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DLOMCalculation update
   */
  export type DLOMCalculationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * The data needed to update a DLOMCalculation.
     */
    data: XOR<DLOMCalculationUpdateInput, DLOMCalculationUncheckedUpdateInput>
    /**
     * Choose, which DLOMCalculation to update.
     */
    where: DLOMCalculationWhereUniqueInput
  }

  /**
   * DLOMCalculation updateMany
   */
  export type DLOMCalculationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DLOMCalculations.
     */
    data: XOR<DLOMCalculationUpdateManyMutationInput, DLOMCalculationUncheckedUpdateManyInput>
    /**
     * Filter which DLOMCalculations to update
     */
    where?: DLOMCalculationWhereInput
    /**
     * Limit how many DLOMCalculations to update.
     */
    limit?: number
  }

  /**
   * DLOMCalculation updateManyAndReturn
   */
  export type DLOMCalculationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * The data used to update DLOMCalculations.
     */
    data: XOR<DLOMCalculationUpdateManyMutationInput, DLOMCalculationUncheckedUpdateManyInput>
    /**
     * Filter which DLOMCalculations to update
     */
    where?: DLOMCalculationWhereInput
    /**
     * Limit how many DLOMCalculations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DLOMCalculation upsert
   */
  export type DLOMCalculationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * The filter to search for the DLOMCalculation to update in case it exists.
     */
    where: DLOMCalculationWhereUniqueInput
    /**
     * In case the DLOMCalculation found by the `where` argument doesn't exist, create a new DLOMCalculation with this data.
     */
    create: XOR<DLOMCalculationCreateInput, DLOMCalculationUncheckedCreateInput>
    /**
     * In case the DLOMCalculation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DLOMCalculationUpdateInput, DLOMCalculationUncheckedUpdateInput>
  }

  /**
   * DLOMCalculation delete
   */
  export type DLOMCalculationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
    /**
     * Filter which DLOMCalculation to delete.
     */
    where: DLOMCalculationWhereUniqueInput
  }

  /**
   * DLOMCalculation deleteMany
   */
  export type DLOMCalculationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DLOMCalculations to delete
     */
    where?: DLOMCalculationWhereInput
    /**
     * Limit how many DLOMCalculations to delete.
     */
    limit?: number
  }

  /**
   * DLOMCalculation without action
   */
  export type DLOMCalculationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DLOMCalculation
     */
    select?: DLOMCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DLOMCalculation
     */
    omit?: DLOMCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DLOMCalculationInclude<ExtArgs> | null
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


  export const VestingScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tokenSymbol: 'tokenSymbol',
    createdAt: 'createdAt',
    totalQuantity: 'totalQuantity',
    purchasePrice: 'purchasePrice',
    purchaseDate: 'purchaseDate'
  };

  export type VestingScheduleScalarFieldEnum = (typeof VestingScheduleScalarFieldEnum)[keyof typeof VestingScheduleScalarFieldEnum]


  export const UnlockEventScalarFieldEnum: {
    id: 'id',
    vestingScheduleId: 'vestingScheduleId',
    unlockDate: 'unlockDate',
    amount: 'amount',
    frequency: 'frequency',
    duration: 'duration'
  };

  export type UnlockEventScalarFieldEnum = (typeof UnlockEventScalarFieldEnum)[keyof typeof UnlockEventScalarFieldEnum]


  export const DLOMCalculationScalarFieldEnum: {
    id: 'id',
    vestingScheduleId: 'vestingScheduleId',
    runAt: 'runAt',
    totalUnlocked: 'totalUnlocked',
    totalLocked: 'totalLocked',
    discountPercent: 'discountPercent',
    discountedValue: 'discountedValue',
    resultsJson: 'resultsJson'
  };

  export type DLOMCalculationScalarFieldEnum = (typeof DLOMCalculationScalarFieldEnum)[keyof typeof DLOMCalculationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
   * Deep Input Types
   */


  export type VestingScheduleWhereInput = {
    AND?: VestingScheduleWhereInput | VestingScheduleWhereInput[]
    OR?: VestingScheduleWhereInput[]
    NOT?: VestingScheduleWhereInput | VestingScheduleWhereInput[]
    id?: StringFilter<"VestingSchedule"> | string
    name?: StringFilter<"VestingSchedule"> | string
    tokenSymbol?: StringFilter<"VestingSchedule"> | string
    createdAt?: DateTimeFilter<"VestingSchedule"> | Date | string
    totalQuantity?: FloatFilter<"VestingSchedule"> | number
    purchasePrice?: FloatNullableFilter<"VestingSchedule"> | number | null
    purchaseDate?: DateTimeNullableFilter<"VestingSchedule"> | Date | string | null
    unlockEvents?: UnlockEventListRelationFilter
    dlomCalculations?: DLOMCalculationListRelationFilter
  }

  export type VestingScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tokenSymbol?: SortOrder
    createdAt?: SortOrder
    totalQuantity?: SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    unlockEvents?: UnlockEventOrderByRelationAggregateInput
    dlomCalculations?: DLOMCalculationOrderByRelationAggregateInput
  }

  export type VestingScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VestingScheduleWhereInput | VestingScheduleWhereInput[]
    OR?: VestingScheduleWhereInput[]
    NOT?: VestingScheduleWhereInput | VestingScheduleWhereInput[]
    name?: StringFilter<"VestingSchedule"> | string
    tokenSymbol?: StringFilter<"VestingSchedule"> | string
    createdAt?: DateTimeFilter<"VestingSchedule"> | Date | string
    totalQuantity?: FloatFilter<"VestingSchedule"> | number
    purchasePrice?: FloatNullableFilter<"VestingSchedule"> | number | null
    purchaseDate?: DateTimeNullableFilter<"VestingSchedule"> | Date | string | null
    unlockEvents?: UnlockEventListRelationFilter
    dlomCalculations?: DLOMCalculationListRelationFilter
  }, "id">

  export type VestingScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tokenSymbol?: SortOrder
    createdAt?: SortOrder
    totalQuantity?: SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    _count?: VestingScheduleCountOrderByAggregateInput
    _avg?: VestingScheduleAvgOrderByAggregateInput
    _max?: VestingScheduleMaxOrderByAggregateInput
    _min?: VestingScheduleMinOrderByAggregateInput
    _sum?: VestingScheduleSumOrderByAggregateInput
  }

  export type VestingScheduleScalarWhereWithAggregatesInput = {
    AND?: VestingScheduleScalarWhereWithAggregatesInput | VestingScheduleScalarWhereWithAggregatesInput[]
    OR?: VestingScheduleScalarWhereWithAggregatesInput[]
    NOT?: VestingScheduleScalarWhereWithAggregatesInput | VestingScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VestingSchedule"> | string
    name?: StringWithAggregatesFilter<"VestingSchedule"> | string
    tokenSymbol?: StringWithAggregatesFilter<"VestingSchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VestingSchedule"> | Date | string
    totalQuantity?: FloatWithAggregatesFilter<"VestingSchedule"> | number
    purchasePrice?: FloatNullableWithAggregatesFilter<"VestingSchedule"> | number | null
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"VestingSchedule"> | Date | string | null
  }

  export type UnlockEventWhereInput = {
    AND?: UnlockEventWhereInput | UnlockEventWhereInput[]
    OR?: UnlockEventWhereInput[]
    NOT?: UnlockEventWhereInput | UnlockEventWhereInput[]
    id?: StringFilter<"UnlockEvent"> | string
    vestingScheduleId?: StringFilter<"UnlockEvent"> | string
    unlockDate?: DateTimeFilter<"UnlockEvent"> | Date | string
    amount?: FloatFilter<"UnlockEvent"> | number
    frequency?: StringFilter<"UnlockEvent"> | string
    duration?: IntNullableFilter<"UnlockEvent"> | number | null
    vestingSchedule?: XOR<VestingScheduleScalarRelationFilter, VestingScheduleWhereInput>
  }

  export type UnlockEventOrderByWithRelationInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    unlockDate?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    duration?: SortOrderInput | SortOrder
    vestingSchedule?: VestingScheduleOrderByWithRelationInput
  }

  export type UnlockEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnlockEventWhereInput | UnlockEventWhereInput[]
    OR?: UnlockEventWhereInput[]
    NOT?: UnlockEventWhereInput | UnlockEventWhereInput[]
    vestingScheduleId?: StringFilter<"UnlockEvent"> | string
    unlockDate?: DateTimeFilter<"UnlockEvent"> | Date | string
    amount?: FloatFilter<"UnlockEvent"> | number
    frequency?: StringFilter<"UnlockEvent"> | string
    duration?: IntNullableFilter<"UnlockEvent"> | number | null
    vestingSchedule?: XOR<VestingScheduleScalarRelationFilter, VestingScheduleWhereInput>
  }, "id">

  export type UnlockEventOrderByWithAggregationInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    unlockDate?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    duration?: SortOrderInput | SortOrder
    _count?: UnlockEventCountOrderByAggregateInput
    _avg?: UnlockEventAvgOrderByAggregateInput
    _max?: UnlockEventMaxOrderByAggregateInput
    _min?: UnlockEventMinOrderByAggregateInput
    _sum?: UnlockEventSumOrderByAggregateInput
  }

  export type UnlockEventScalarWhereWithAggregatesInput = {
    AND?: UnlockEventScalarWhereWithAggregatesInput | UnlockEventScalarWhereWithAggregatesInput[]
    OR?: UnlockEventScalarWhereWithAggregatesInput[]
    NOT?: UnlockEventScalarWhereWithAggregatesInput | UnlockEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnlockEvent"> | string
    vestingScheduleId?: StringWithAggregatesFilter<"UnlockEvent"> | string
    unlockDate?: DateTimeWithAggregatesFilter<"UnlockEvent"> | Date | string
    amount?: FloatWithAggregatesFilter<"UnlockEvent"> | number
    frequency?: StringWithAggregatesFilter<"UnlockEvent"> | string
    duration?: IntNullableWithAggregatesFilter<"UnlockEvent"> | number | null
  }

  export type DLOMCalculationWhereInput = {
    AND?: DLOMCalculationWhereInput | DLOMCalculationWhereInput[]
    OR?: DLOMCalculationWhereInput[]
    NOT?: DLOMCalculationWhereInput | DLOMCalculationWhereInput[]
    id?: StringFilter<"DLOMCalculation"> | string
    vestingScheduleId?: StringFilter<"DLOMCalculation"> | string
    runAt?: DateTimeFilter<"DLOMCalculation"> | Date | string
    totalUnlocked?: FloatFilter<"DLOMCalculation"> | number
    totalLocked?: FloatFilter<"DLOMCalculation"> | number
    discountPercent?: FloatNullableFilter<"DLOMCalculation"> | number | null
    discountedValue?: FloatNullableFilter<"DLOMCalculation"> | number | null
    resultsJson?: JsonFilter<"DLOMCalculation">
    vestingSchedule?: XOR<VestingScheduleScalarRelationFilter, VestingScheduleWhereInput>
  }

  export type DLOMCalculationOrderByWithRelationInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    runAt?: SortOrder
    totalUnlocked?: SortOrder
    totalLocked?: SortOrder
    discountPercent?: SortOrderInput | SortOrder
    discountedValue?: SortOrderInput | SortOrder
    resultsJson?: SortOrder
    vestingSchedule?: VestingScheduleOrderByWithRelationInput
  }

  export type DLOMCalculationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DLOMCalculationWhereInput | DLOMCalculationWhereInput[]
    OR?: DLOMCalculationWhereInput[]
    NOT?: DLOMCalculationWhereInput | DLOMCalculationWhereInput[]
    vestingScheduleId?: StringFilter<"DLOMCalculation"> | string
    runAt?: DateTimeFilter<"DLOMCalculation"> | Date | string
    totalUnlocked?: FloatFilter<"DLOMCalculation"> | number
    totalLocked?: FloatFilter<"DLOMCalculation"> | number
    discountPercent?: FloatNullableFilter<"DLOMCalculation"> | number | null
    discountedValue?: FloatNullableFilter<"DLOMCalculation"> | number | null
    resultsJson?: JsonFilter<"DLOMCalculation">
    vestingSchedule?: XOR<VestingScheduleScalarRelationFilter, VestingScheduleWhereInput>
  }, "id">

  export type DLOMCalculationOrderByWithAggregationInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    runAt?: SortOrder
    totalUnlocked?: SortOrder
    totalLocked?: SortOrder
    discountPercent?: SortOrderInput | SortOrder
    discountedValue?: SortOrderInput | SortOrder
    resultsJson?: SortOrder
    _count?: DLOMCalculationCountOrderByAggregateInput
    _avg?: DLOMCalculationAvgOrderByAggregateInput
    _max?: DLOMCalculationMaxOrderByAggregateInput
    _min?: DLOMCalculationMinOrderByAggregateInput
    _sum?: DLOMCalculationSumOrderByAggregateInput
  }

  export type DLOMCalculationScalarWhereWithAggregatesInput = {
    AND?: DLOMCalculationScalarWhereWithAggregatesInput | DLOMCalculationScalarWhereWithAggregatesInput[]
    OR?: DLOMCalculationScalarWhereWithAggregatesInput[]
    NOT?: DLOMCalculationScalarWhereWithAggregatesInput | DLOMCalculationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DLOMCalculation"> | string
    vestingScheduleId?: StringWithAggregatesFilter<"DLOMCalculation"> | string
    runAt?: DateTimeWithAggregatesFilter<"DLOMCalculation"> | Date | string
    totalUnlocked?: FloatWithAggregatesFilter<"DLOMCalculation"> | number
    totalLocked?: FloatWithAggregatesFilter<"DLOMCalculation"> | number
    discountPercent?: FloatNullableWithAggregatesFilter<"DLOMCalculation"> | number | null
    discountedValue?: FloatNullableWithAggregatesFilter<"DLOMCalculation"> | number | null
    resultsJson?: JsonWithAggregatesFilter<"DLOMCalculation">
  }

  export type VestingScheduleCreateInput = {
    id?: string
    name: string
    tokenSymbol?: string
    createdAt?: Date | string
    totalQuantity: number
    purchasePrice?: number | null
    purchaseDate?: Date | string | null
    unlockEvents?: UnlockEventCreateNestedManyWithoutVestingScheduleInput
    dlomCalculations?: DLOMCalculationCreateNestedManyWithoutVestingScheduleInput
  }

  export type VestingScheduleUncheckedCreateInput = {
    id?: string
    name: string
    tokenSymbol?: string
    createdAt?: Date | string
    totalQuantity: number
    purchasePrice?: number | null
    purchaseDate?: Date | string | null
    unlockEvents?: UnlockEventUncheckedCreateNestedManyWithoutVestingScheduleInput
    dlomCalculations?: DLOMCalculationUncheckedCreateNestedManyWithoutVestingScheduleInput
  }

  export type VestingScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlockEvents?: UnlockEventUpdateManyWithoutVestingScheduleNestedInput
    dlomCalculations?: DLOMCalculationUpdateManyWithoutVestingScheduleNestedInput
  }

  export type VestingScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlockEvents?: UnlockEventUncheckedUpdateManyWithoutVestingScheduleNestedInput
    dlomCalculations?: DLOMCalculationUncheckedUpdateManyWithoutVestingScheduleNestedInput
  }

  export type VestingScheduleCreateManyInput = {
    id?: string
    name: string
    tokenSymbol?: string
    createdAt?: Date | string
    totalQuantity: number
    purchasePrice?: number | null
    purchaseDate?: Date | string | null
  }

  export type VestingScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VestingScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnlockEventCreateInput = {
    id?: string
    unlockDate: Date | string
    amount: number
    frequency: string
    duration?: number | null
    vestingSchedule: VestingScheduleCreateNestedOneWithoutUnlockEventsInput
  }

  export type UnlockEventUncheckedCreateInput = {
    id?: string
    vestingScheduleId: string
    unlockDate: Date | string
    amount: number
    frequency: string
    duration?: number | null
  }

  export type UnlockEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    vestingSchedule?: VestingScheduleUpdateOneRequiredWithoutUnlockEventsNestedInput
  }

  export type UnlockEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vestingScheduleId?: StringFieldUpdateOperationsInput | string
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UnlockEventCreateManyInput = {
    id?: string
    vestingScheduleId: string
    unlockDate: Date | string
    amount: number
    frequency: string
    duration?: number | null
  }

  export type UnlockEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UnlockEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vestingScheduleId?: StringFieldUpdateOperationsInput | string
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DLOMCalculationCreateInput = {
    id?: string
    runAt?: Date | string
    totalUnlocked?: number
    totalLocked?: number
    discountPercent?: number | null
    discountedValue?: number | null
    resultsJson: JsonNullValueInput | InputJsonValue
    vestingSchedule: VestingScheduleCreateNestedOneWithoutDlomCalculationsInput
  }

  export type DLOMCalculationUncheckedCreateInput = {
    id?: string
    vestingScheduleId: string
    runAt?: Date | string
    totalUnlocked?: number
    totalLocked?: number
    discountPercent?: number | null
    discountedValue?: number | null
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUnlocked?: FloatFieldUpdateOperationsInput | number
    totalLocked?: FloatFieldUpdateOperationsInput | number
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    discountedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    resultsJson?: JsonNullValueInput | InputJsonValue
    vestingSchedule?: VestingScheduleUpdateOneRequiredWithoutDlomCalculationsNestedInput
  }

  export type DLOMCalculationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vestingScheduleId?: StringFieldUpdateOperationsInput | string
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUnlocked?: FloatFieldUpdateOperationsInput | number
    totalLocked?: FloatFieldUpdateOperationsInput | number
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    discountedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationCreateManyInput = {
    id?: string
    vestingScheduleId: string
    runAt?: Date | string
    totalUnlocked?: number
    totalLocked?: number
    discountPercent?: number | null
    discountedValue?: number | null
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUnlocked?: FloatFieldUpdateOperationsInput | number
    totalLocked?: FloatFieldUpdateOperationsInput | number
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    discountedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vestingScheduleId?: StringFieldUpdateOperationsInput | string
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUnlocked?: FloatFieldUpdateOperationsInput | number
    totalLocked?: FloatFieldUpdateOperationsInput | number
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    discountedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    resultsJson?: JsonNullValueInput | InputJsonValue
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type UnlockEventListRelationFilter = {
    every?: UnlockEventWhereInput
    some?: UnlockEventWhereInput
    none?: UnlockEventWhereInput
  }

  export type DLOMCalculationListRelationFilter = {
    every?: DLOMCalculationWhereInput
    some?: DLOMCalculationWhereInput
    none?: DLOMCalculationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UnlockEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DLOMCalculationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VestingScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tokenSymbol?: SortOrder
    createdAt?: SortOrder
    totalQuantity?: SortOrder
    purchasePrice?: SortOrder
    purchaseDate?: SortOrder
  }

  export type VestingScheduleAvgOrderByAggregateInput = {
    totalQuantity?: SortOrder
    purchasePrice?: SortOrder
  }

  export type VestingScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tokenSymbol?: SortOrder
    createdAt?: SortOrder
    totalQuantity?: SortOrder
    purchasePrice?: SortOrder
    purchaseDate?: SortOrder
  }

  export type VestingScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tokenSymbol?: SortOrder
    createdAt?: SortOrder
    totalQuantity?: SortOrder
    purchasePrice?: SortOrder
    purchaseDate?: SortOrder
  }

  export type VestingScheduleSumOrderByAggregateInput = {
    totalQuantity?: SortOrder
    purchasePrice?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VestingScheduleScalarRelationFilter = {
    is?: VestingScheduleWhereInput
    isNot?: VestingScheduleWhereInput
  }

  export type UnlockEventCountOrderByAggregateInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    unlockDate?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
  }

  export type UnlockEventAvgOrderByAggregateInput = {
    amount?: SortOrder
    duration?: SortOrder
  }

  export type UnlockEventMaxOrderByAggregateInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    unlockDate?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
  }

  export type UnlockEventMinOrderByAggregateInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    unlockDate?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
  }

  export type UnlockEventSumOrderByAggregateInput = {
    amount?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DLOMCalculationCountOrderByAggregateInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    runAt?: SortOrder
    totalUnlocked?: SortOrder
    totalLocked?: SortOrder
    discountPercent?: SortOrder
    discountedValue?: SortOrder
    resultsJson?: SortOrder
  }

  export type DLOMCalculationAvgOrderByAggregateInput = {
    totalUnlocked?: SortOrder
    totalLocked?: SortOrder
    discountPercent?: SortOrder
    discountedValue?: SortOrder
  }

  export type DLOMCalculationMaxOrderByAggregateInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    runAt?: SortOrder
    totalUnlocked?: SortOrder
    totalLocked?: SortOrder
    discountPercent?: SortOrder
    discountedValue?: SortOrder
  }

  export type DLOMCalculationMinOrderByAggregateInput = {
    id?: SortOrder
    vestingScheduleId?: SortOrder
    runAt?: SortOrder
    totalUnlocked?: SortOrder
    totalLocked?: SortOrder
    discountPercent?: SortOrder
    discountedValue?: SortOrder
  }

  export type DLOMCalculationSumOrderByAggregateInput = {
    totalUnlocked?: SortOrder
    totalLocked?: SortOrder
    discountPercent?: SortOrder
    discountedValue?: SortOrder
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

  export type UnlockEventCreateNestedManyWithoutVestingScheduleInput = {
    create?: XOR<UnlockEventCreateWithoutVestingScheduleInput, UnlockEventUncheckedCreateWithoutVestingScheduleInput> | UnlockEventCreateWithoutVestingScheduleInput[] | UnlockEventUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: UnlockEventCreateOrConnectWithoutVestingScheduleInput | UnlockEventCreateOrConnectWithoutVestingScheduleInput[]
    createMany?: UnlockEventCreateManyVestingScheduleInputEnvelope
    connect?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
  }

  export type DLOMCalculationCreateNestedManyWithoutVestingScheduleInput = {
    create?: XOR<DLOMCalculationCreateWithoutVestingScheduleInput, DLOMCalculationUncheckedCreateWithoutVestingScheduleInput> | DLOMCalculationCreateWithoutVestingScheduleInput[] | DLOMCalculationUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: DLOMCalculationCreateOrConnectWithoutVestingScheduleInput | DLOMCalculationCreateOrConnectWithoutVestingScheduleInput[]
    createMany?: DLOMCalculationCreateManyVestingScheduleInputEnvelope
    connect?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
  }

  export type UnlockEventUncheckedCreateNestedManyWithoutVestingScheduleInput = {
    create?: XOR<UnlockEventCreateWithoutVestingScheduleInput, UnlockEventUncheckedCreateWithoutVestingScheduleInput> | UnlockEventCreateWithoutVestingScheduleInput[] | UnlockEventUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: UnlockEventCreateOrConnectWithoutVestingScheduleInput | UnlockEventCreateOrConnectWithoutVestingScheduleInput[]
    createMany?: UnlockEventCreateManyVestingScheduleInputEnvelope
    connect?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
  }

  export type DLOMCalculationUncheckedCreateNestedManyWithoutVestingScheduleInput = {
    create?: XOR<DLOMCalculationCreateWithoutVestingScheduleInput, DLOMCalculationUncheckedCreateWithoutVestingScheduleInput> | DLOMCalculationCreateWithoutVestingScheduleInput[] | DLOMCalculationUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: DLOMCalculationCreateOrConnectWithoutVestingScheduleInput | DLOMCalculationCreateOrConnectWithoutVestingScheduleInput[]
    createMany?: DLOMCalculationCreateManyVestingScheduleInputEnvelope
    connect?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UnlockEventUpdateManyWithoutVestingScheduleNestedInput = {
    create?: XOR<UnlockEventCreateWithoutVestingScheduleInput, UnlockEventUncheckedCreateWithoutVestingScheduleInput> | UnlockEventCreateWithoutVestingScheduleInput[] | UnlockEventUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: UnlockEventCreateOrConnectWithoutVestingScheduleInput | UnlockEventCreateOrConnectWithoutVestingScheduleInput[]
    upsert?: UnlockEventUpsertWithWhereUniqueWithoutVestingScheduleInput | UnlockEventUpsertWithWhereUniqueWithoutVestingScheduleInput[]
    createMany?: UnlockEventCreateManyVestingScheduleInputEnvelope
    set?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    disconnect?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    delete?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    connect?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    update?: UnlockEventUpdateWithWhereUniqueWithoutVestingScheduleInput | UnlockEventUpdateWithWhereUniqueWithoutVestingScheduleInput[]
    updateMany?: UnlockEventUpdateManyWithWhereWithoutVestingScheduleInput | UnlockEventUpdateManyWithWhereWithoutVestingScheduleInput[]
    deleteMany?: UnlockEventScalarWhereInput | UnlockEventScalarWhereInput[]
  }

  export type DLOMCalculationUpdateManyWithoutVestingScheduleNestedInput = {
    create?: XOR<DLOMCalculationCreateWithoutVestingScheduleInput, DLOMCalculationUncheckedCreateWithoutVestingScheduleInput> | DLOMCalculationCreateWithoutVestingScheduleInput[] | DLOMCalculationUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: DLOMCalculationCreateOrConnectWithoutVestingScheduleInput | DLOMCalculationCreateOrConnectWithoutVestingScheduleInput[]
    upsert?: DLOMCalculationUpsertWithWhereUniqueWithoutVestingScheduleInput | DLOMCalculationUpsertWithWhereUniqueWithoutVestingScheduleInput[]
    createMany?: DLOMCalculationCreateManyVestingScheduleInputEnvelope
    set?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    disconnect?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    delete?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    connect?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    update?: DLOMCalculationUpdateWithWhereUniqueWithoutVestingScheduleInput | DLOMCalculationUpdateWithWhereUniqueWithoutVestingScheduleInput[]
    updateMany?: DLOMCalculationUpdateManyWithWhereWithoutVestingScheduleInput | DLOMCalculationUpdateManyWithWhereWithoutVestingScheduleInput[]
    deleteMany?: DLOMCalculationScalarWhereInput | DLOMCalculationScalarWhereInput[]
  }

  export type UnlockEventUncheckedUpdateManyWithoutVestingScheduleNestedInput = {
    create?: XOR<UnlockEventCreateWithoutVestingScheduleInput, UnlockEventUncheckedCreateWithoutVestingScheduleInput> | UnlockEventCreateWithoutVestingScheduleInput[] | UnlockEventUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: UnlockEventCreateOrConnectWithoutVestingScheduleInput | UnlockEventCreateOrConnectWithoutVestingScheduleInput[]
    upsert?: UnlockEventUpsertWithWhereUniqueWithoutVestingScheduleInput | UnlockEventUpsertWithWhereUniqueWithoutVestingScheduleInput[]
    createMany?: UnlockEventCreateManyVestingScheduleInputEnvelope
    set?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    disconnect?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    delete?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    connect?: UnlockEventWhereUniqueInput | UnlockEventWhereUniqueInput[]
    update?: UnlockEventUpdateWithWhereUniqueWithoutVestingScheduleInput | UnlockEventUpdateWithWhereUniqueWithoutVestingScheduleInput[]
    updateMany?: UnlockEventUpdateManyWithWhereWithoutVestingScheduleInput | UnlockEventUpdateManyWithWhereWithoutVestingScheduleInput[]
    deleteMany?: UnlockEventScalarWhereInput | UnlockEventScalarWhereInput[]
  }

  export type DLOMCalculationUncheckedUpdateManyWithoutVestingScheduleNestedInput = {
    create?: XOR<DLOMCalculationCreateWithoutVestingScheduleInput, DLOMCalculationUncheckedCreateWithoutVestingScheduleInput> | DLOMCalculationCreateWithoutVestingScheduleInput[] | DLOMCalculationUncheckedCreateWithoutVestingScheduleInput[]
    connectOrCreate?: DLOMCalculationCreateOrConnectWithoutVestingScheduleInput | DLOMCalculationCreateOrConnectWithoutVestingScheduleInput[]
    upsert?: DLOMCalculationUpsertWithWhereUniqueWithoutVestingScheduleInput | DLOMCalculationUpsertWithWhereUniqueWithoutVestingScheduleInput[]
    createMany?: DLOMCalculationCreateManyVestingScheduleInputEnvelope
    set?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    disconnect?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    delete?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    connect?: DLOMCalculationWhereUniqueInput | DLOMCalculationWhereUniqueInput[]
    update?: DLOMCalculationUpdateWithWhereUniqueWithoutVestingScheduleInput | DLOMCalculationUpdateWithWhereUniqueWithoutVestingScheduleInput[]
    updateMany?: DLOMCalculationUpdateManyWithWhereWithoutVestingScheduleInput | DLOMCalculationUpdateManyWithWhereWithoutVestingScheduleInput[]
    deleteMany?: DLOMCalculationScalarWhereInput | DLOMCalculationScalarWhereInput[]
  }

  export type VestingScheduleCreateNestedOneWithoutUnlockEventsInput = {
    create?: XOR<VestingScheduleCreateWithoutUnlockEventsInput, VestingScheduleUncheckedCreateWithoutUnlockEventsInput>
    connectOrCreate?: VestingScheduleCreateOrConnectWithoutUnlockEventsInput
    connect?: VestingScheduleWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VestingScheduleUpdateOneRequiredWithoutUnlockEventsNestedInput = {
    create?: XOR<VestingScheduleCreateWithoutUnlockEventsInput, VestingScheduleUncheckedCreateWithoutUnlockEventsInput>
    connectOrCreate?: VestingScheduleCreateOrConnectWithoutUnlockEventsInput
    upsert?: VestingScheduleUpsertWithoutUnlockEventsInput
    connect?: VestingScheduleWhereUniqueInput
    update?: XOR<XOR<VestingScheduleUpdateToOneWithWhereWithoutUnlockEventsInput, VestingScheduleUpdateWithoutUnlockEventsInput>, VestingScheduleUncheckedUpdateWithoutUnlockEventsInput>
  }

  export type VestingScheduleCreateNestedOneWithoutDlomCalculationsInput = {
    create?: XOR<VestingScheduleCreateWithoutDlomCalculationsInput, VestingScheduleUncheckedCreateWithoutDlomCalculationsInput>
    connectOrCreate?: VestingScheduleCreateOrConnectWithoutDlomCalculationsInput
    connect?: VestingScheduleWhereUniqueInput
  }

  export type VestingScheduleUpdateOneRequiredWithoutDlomCalculationsNestedInput = {
    create?: XOR<VestingScheduleCreateWithoutDlomCalculationsInput, VestingScheduleUncheckedCreateWithoutDlomCalculationsInput>
    connectOrCreate?: VestingScheduleCreateOrConnectWithoutDlomCalculationsInput
    upsert?: VestingScheduleUpsertWithoutDlomCalculationsInput
    connect?: VestingScheduleWhereUniqueInput
    update?: XOR<XOR<VestingScheduleUpdateToOneWithWhereWithoutDlomCalculationsInput, VestingScheduleUpdateWithoutDlomCalculationsInput>, VestingScheduleUncheckedUpdateWithoutDlomCalculationsInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UnlockEventCreateWithoutVestingScheduleInput = {
    id?: string
    unlockDate: Date | string
    amount: number
    frequency: string
    duration?: number | null
  }

  export type UnlockEventUncheckedCreateWithoutVestingScheduleInput = {
    id?: string
    unlockDate: Date | string
    amount: number
    frequency: string
    duration?: number | null
  }

  export type UnlockEventCreateOrConnectWithoutVestingScheduleInput = {
    where: UnlockEventWhereUniqueInput
    create: XOR<UnlockEventCreateWithoutVestingScheduleInput, UnlockEventUncheckedCreateWithoutVestingScheduleInput>
  }

  export type UnlockEventCreateManyVestingScheduleInputEnvelope = {
    data: UnlockEventCreateManyVestingScheduleInput | UnlockEventCreateManyVestingScheduleInput[]
    skipDuplicates?: boolean
  }

  export type DLOMCalculationCreateWithoutVestingScheduleInput = {
    id?: string
    runAt?: Date | string
    totalUnlocked?: number
    totalLocked?: number
    discountPercent?: number | null
    discountedValue?: number | null
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationUncheckedCreateWithoutVestingScheduleInput = {
    id?: string
    runAt?: Date | string
    totalUnlocked?: number
    totalLocked?: number
    discountPercent?: number | null
    discountedValue?: number | null
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationCreateOrConnectWithoutVestingScheduleInput = {
    where: DLOMCalculationWhereUniqueInput
    create: XOR<DLOMCalculationCreateWithoutVestingScheduleInput, DLOMCalculationUncheckedCreateWithoutVestingScheduleInput>
  }

  export type DLOMCalculationCreateManyVestingScheduleInputEnvelope = {
    data: DLOMCalculationCreateManyVestingScheduleInput | DLOMCalculationCreateManyVestingScheduleInput[]
    skipDuplicates?: boolean
  }

  export type UnlockEventUpsertWithWhereUniqueWithoutVestingScheduleInput = {
    where: UnlockEventWhereUniqueInput
    update: XOR<UnlockEventUpdateWithoutVestingScheduleInput, UnlockEventUncheckedUpdateWithoutVestingScheduleInput>
    create: XOR<UnlockEventCreateWithoutVestingScheduleInput, UnlockEventUncheckedCreateWithoutVestingScheduleInput>
  }

  export type UnlockEventUpdateWithWhereUniqueWithoutVestingScheduleInput = {
    where: UnlockEventWhereUniqueInput
    data: XOR<UnlockEventUpdateWithoutVestingScheduleInput, UnlockEventUncheckedUpdateWithoutVestingScheduleInput>
  }

  export type UnlockEventUpdateManyWithWhereWithoutVestingScheduleInput = {
    where: UnlockEventScalarWhereInput
    data: XOR<UnlockEventUpdateManyMutationInput, UnlockEventUncheckedUpdateManyWithoutVestingScheduleInput>
  }

  export type UnlockEventScalarWhereInput = {
    AND?: UnlockEventScalarWhereInput | UnlockEventScalarWhereInput[]
    OR?: UnlockEventScalarWhereInput[]
    NOT?: UnlockEventScalarWhereInput | UnlockEventScalarWhereInput[]
    id?: StringFilter<"UnlockEvent"> | string
    vestingScheduleId?: StringFilter<"UnlockEvent"> | string
    unlockDate?: DateTimeFilter<"UnlockEvent"> | Date | string
    amount?: FloatFilter<"UnlockEvent"> | number
    frequency?: StringFilter<"UnlockEvent"> | string
    duration?: IntNullableFilter<"UnlockEvent"> | number | null
  }

  export type DLOMCalculationUpsertWithWhereUniqueWithoutVestingScheduleInput = {
    where: DLOMCalculationWhereUniqueInput
    update: XOR<DLOMCalculationUpdateWithoutVestingScheduleInput, DLOMCalculationUncheckedUpdateWithoutVestingScheduleInput>
    create: XOR<DLOMCalculationCreateWithoutVestingScheduleInput, DLOMCalculationUncheckedCreateWithoutVestingScheduleInput>
  }

  export type DLOMCalculationUpdateWithWhereUniqueWithoutVestingScheduleInput = {
    where: DLOMCalculationWhereUniqueInput
    data: XOR<DLOMCalculationUpdateWithoutVestingScheduleInput, DLOMCalculationUncheckedUpdateWithoutVestingScheduleInput>
  }

  export type DLOMCalculationUpdateManyWithWhereWithoutVestingScheduleInput = {
    where: DLOMCalculationScalarWhereInput
    data: XOR<DLOMCalculationUpdateManyMutationInput, DLOMCalculationUncheckedUpdateManyWithoutVestingScheduleInput>
  }

  export type DLOMCalculationScalarWhereInput = {
    AND?: DLOMCalculationScalarWhereInput | DLOMCalculationScalarWhereInput[]
    OR?: DLOMCalculationScalarWhereInput[]
    NOT?: DLOMCalculationScalarWhereInput | DLOMCalculationScalarWhereInput[]
    id?: StringFilter<"DLOMCalculation"> | string
    vestingScheduleId?: StringFilter<"DLOMCalculation"> | string
    runAt?: DateTimeFilter<"DLOMCalculation"> | Date | string
    totalUnlocked?: FloatFilter<"DLOMCalculation"> | number
    totalLocked?: FloatFilter<"DLOMCalculation"> | number
    discountPercent?: FloatNullableFilter<"DLOMCalculation"> | number | null
    discountedValue?: FloatNullableFilter<"DLOMCalculation"> | number | null
    resultsJson?: JsonFilter<"DLOMCalculation">
  }

  export type VestingScheduleCreateWithoutUnlockEventsInput = {
    id?: string
    name: string
    tokenSymbol?: string
    createdAt?: Date | string
    totalQuantity: number
    purchasePrice?: number | null
    purchaseDate?: Date | string | null
    dlomCalculations?: DLOMCalculationCreateNestedManyWithoutVestingScheduleInput
  }

  export type VestingScheduleUncheckedCreateWithoutUnlockEventsInput = {
    id?: string
    name: string
    tokenSymbol?: string
    createdAt?: Date | string
    totalQuantity: number
    purchasePrice?: number | null
    purchaseDate?: Date | string | null
    dlomCalculations?: DLOMCalculationUncheckedCreateNestedManyWithoutVestingScheduleInput
  }

  export type VestingScheduleCreateOrConnectWithoutUnlockEventsInput = {
    where: VestingScheduleWhereUniqueInput
    create: XOR<VestingScheduleCreateWithoutUnlockEventsInput, VestingScheduleUncheckedCreateWithoutUnlockEventsInput>
  }

  export type VestingScheduleUpsertWithoutUnlockEventsInput = {
    update: XOR<VestingScheduleUpdateWithoutUnlockEventsInput, VestingScheduleUncheckedUpdateWithoutUnlockEventsInput>
    create: XOR<VestingScheduleCreateWithoutUnlockEventsInput, VestingScheduleUncheckedCreateWithoutUnlockEventsInput>
    where?: VestingScheduleWhereInput
  }

  export type VestingScheduleUpdateToOneWithWhereWithoutUnlockEventsInput = {
    where?: VestingScheduleWhereInput
    data: XOR<VestingScheduleUpdateWithoutUnlockEventsInput, VestingScheduleUncheckedUpdateWithoutUnlockEventsInput>
  }

  export type VestingScheduleUpdateWithoutUnlockEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dlomCalculations?: DLOMCalculationUpdateManyWithoutVestingScheduleNestedInput
  }

  export type VestingScheduleUncheckedUpdateWithoutUnlockEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dlomCalculations?: DLOMCalculationUncheckedUpdateManyWithoutVestingScheduleNestedInput
  }

  export type VestingScheduleCreateWithoutDlomCalculationsInput = {
    id?: string
    name: string
    tokenSymbol?: string
    createdAt?: Date | string
    totalQuantity: number
    purchasePrice?: number | null
    purchaseDate?: Date | string | null
    unlockEvents?: UnlockEventCreateNestedManyWithoutVestingScheduleInput
  }

  export type VestingScheduleUncheckedCreateWithoutDlomCalculationsInput = {
    id?: string
    name: string
    tokenSymbol?: string
    createdAt?: Date | string
    totalQuantity: number
    purchasePrice?: number | null
    purchaseDate?: Date | string | null
    unlockEvents?: UnlockEventUncheckedCreateNestedManyWithoutVestingScheduleInput
  }

  export type VestingScheduleCreateOrConnectWithoutDlomCalculationsInput = {
    where: VestingScheduleWhereUniqueInput
    create: XOR<VestingScheduleCreateWithoutDlomCalculationsInput, VestingScheduleUncheckedCreateWithoutDlomCalculationsInput>
  }

  export type VestingScheduleUpsertWithoutDlomCalculationsInput = {
    update: XOR<VestingScheduleUpdateWithoutDlomCalculationsInput, VestingScheduleUncheckedUpdateWithoutDlomCalculationsInput>
    create: XOR<VestingScheduleCreateWithoutDlomCalculationsInput, VestingScheduleUncheckedCreateWithoutDlomCalculationsInput>
    where?: VestingScheduleWhereInput
  }

  export type VestingScheduleUpdateToOneWithWhereWithoutDlomCalculationsInput = {
    where?: VestingScheduleWhereInput
    data: XOR<VestingScheduleUpdateWithoutDlomCalculationsInput, VestingScheduleUncheckedUpdateWithoutDlomCalculationsInput>
  }

  export type VestingScheduleUpdateWithoutDlomCalculationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlockEvents?: UnlockEventUpdateManyWithoutVestingScheduleNestedInput
  }

  export type VestingScheduleUncheckedUpdateWithoutDlomCalculationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalQuantity?: FloatFieldUpdateOperationsInput | number
    purchasePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlockEvents?: UnlockEventUncheckedUpdateManyWithoutVestingScheduleNestedInput
  }

  export type UnlockEventCreateManyVestingScheduleInput = {
    id?: string
    unlockDate: Date | string
    amount: number
    frequency: string
    duration?: number | null
  }

  export type DLOMCalculationCreateManyVestingScheduleInput = {
    id?: string
    runAt?: Date | string
    totalUnlocked?: number
    totalLocked?: number
    discountPercent?: number | null
    discountedValue?: number | null
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type UnlockEventUpdateWithoutVestingScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UnlockEventUncheckedUpdateWithoutVestingScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UnlockEventUncheckedUpdateManyWithoutVestingScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DLOMCalculationUpdateWithoutVestingScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUnlocked?: FloatFieldUpdateOperationsInput | number
    totalLocked?: FloatFieldUpdateOperationsInput | number
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    discountedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationUncheckedUpdateWithoutVestingScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUnlocked?: FloatFieldUpdateOperationsInput | number
    totalLocked?: FloatFieldUpdateOperationsInput | number
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    discountedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type DLOMCalculationUncheckedUpdateManyWithoutVestingScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUnlocked?: FloatFieldUpdateOperationsInput | number
    totalLocked?: FloatFieldUpdateOperationsInput | number
    discountPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    discountedValue?: NullableFloatFieldUpdateOperationsInput | number | null
    resultsJson?: JsonNullValueInput | InputJsonValue
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