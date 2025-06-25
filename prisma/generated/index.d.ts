
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
 * Model FolioProduct
 * 
 */
export type FolioProduct = $Result.DefaultSelection<Prisma.$FolioProductPayload>
/**
 * Model FolioStock
 * 
 */
export type FolioStock = $Result.DefaultSelection<Prisma.$FolioStockPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FolioProducts
 * const folioProducts = await prisma.folioProduct.findMany()
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
   * // Fetch zero or more FolioProducts
   * const folioProducts = await prisma.folioProduct.findMany()
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
   * `prisma.folioProduct`: Exposes CRUD operations for the **FolioProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FolioProducts
    * const folioProducts = await prisma.folioProduct.findMany()
    * ```
    */
  get folioProduct(): Prisma.FolioProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folioStock`: Exposes CRUD operations for the **FolioStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FolioStocks
    * const folioStocks = await prisma.folioStock.findMany()
    * ```
    */
  get folioStock(): Prisma.FolioStockDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    FolioProduct: 'FolioProduct',
    FolioStock: 'FolioStock'
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
      modelProps: "folioProduct" | "folioStock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FolioProduct: {
        payload: Prisma.$FolioProductPayload<ExtArgs>
        fields: Prisma.FolioProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolioProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolioProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>
          }
          findFirst: {
            args: Prisma.FolioProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolioProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>
          }
          findMany: {
            args: Prisma.FolioProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>[]
          }
          create: {
            args: Prisma.FolioProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>
          }
          createMany: {
            args: Prisma.FolioProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolioProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>[]
          }
          delete: {
            args: Prisma.FolioProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>
          }
          update: {
            args: Prisma.FolioProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>
          }
          deleteMany: {
            args: Prisma.FolioProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolioProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolioProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>[]
          }
          upsert: {
            args: Prisma.FolioProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioProductPayload>
          }
          aggregate: {
            args: Prisma.FolioProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolioProduct>
          }
          groupBy: {
            args: Prisma.FolioProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolioProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolioProductCountArgs<ExtArgs>
            result: $Utils.Optional<FolioProductCountAggregateOutputType> | number
          }
        }
      }
      FolioStock: {
        payload: Prisma.$FolioStockPayload<ExtArgs>
        fields: Prisma.FolioStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolioStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolioStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>
          }
          findFirst: {
            args: Prisma.FolioStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolioStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>
          }
          findMany: {
            args: Prisma.FolioStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>[]
          }
          create: {
            args: Prisma.FolioStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>
          }
          createMany: {
            args: Prisma.FolioStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolioStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>[]
          }
          delete: {
            args: Prisma.FolioStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>
          }
          update: {
            args: Prisma.FolioStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>
          }
          deleteMany: {
            args: Prisma.FolioStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolioStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolioStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>[]
          }
          upsert: {
            args: Prisma.FolioStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioStockPayload>
          }
          aggregate: {
            args: Prisma.FolioStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolioStock>
          }
          groupBy: {
            args: Prisma.FolioStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolioStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolioStockCountArgs<ExtArgs>
            result: $Utils.Optional<FolioStockCountAggregateOutputType> | number
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
    folioProduct?: FolioProductOmit
    folioStock?: FolioStockOmit
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
   * Models
   */

  /**
   * Model FolioProduct
   */

  export type AggregateFolioProduct = {
    _count: FolioProductCountAggregateOutputType | null
    _avg: FolioProductAvgAggregateOutputType | null
    _sum: FolioProductSumAggregateOutputType | null
    _min: FolioProductMinAggregateOutputType | null
    _max: FolioProductMaxAggregateOutputType | null
  }

  export type FolioProductAvgAggregateOutputType = {
    id: number | null
    book_id: number | null
    price: number | null
    stock_status: number | null
    store: number | null
    verbosity: number | null
  }

  export type FolioProductSumAggregateOutputType = {
    id: number | null
    book_id: number | null
    price: number | null
    stock_status: number | null
    store: number | null
    verbosity: number | null
  }

  export type FolioProductMinAggregateOutputType = {
    id: number | null
    type: string | null
    book_id: number | null
    sku: string | null
    title: string | null
    pages: string | null
    short_description: string | null
    editor_note_description: string | null
    collection_text: string | null
    category: string | null
    publication_date: Date | null
    price: number | null
    url: string | null
    main_image: string | null
    thumbnail_image: string | null
    stock_status: number | null
    store: number | null
    verbosity: number | null
  }

  export type FolioProductMaxAggregateOutputType = {
    id: number | null
    type: string | null
    book_id: number | null
    sku: string | null
    title: string | null
    pages: string | null
    short_description: string | null
    editor_note_description: string | null
    collection_text: string | null
    category: string | null
    publication_date: Date | null
    price: number | null
    url: string | null
    main_image: string | null
    thumbnail_image: string | null
    stock_status: number | null
    store: number | null
    verbosity: number | null
  }

  export type FolioProductCountAggregateOutputType = {
    id: number
    type: number
    book_id: number
    sku: number
    title: number
    author: number
    illustrator: number
    introduced_by: number
    afterword_by: number
    pages: number
    short_description: number
    editor_note_description: number
    collection_text: number
    category: number
    publication_date: number
    price: number
    url: number
    main_image: number
    thumbnail_image: number
    media: number
    visibility: number
    stock_status: number
    store: number
    verbosity: number
    _all: number
  }


  export type FolioProductAvgAggregateInputType = {
    id?: true
    book_id?: true
    price?: true
    stock_status?: true
    store?: true
    verbosity?: true
  }

  export type FolioProductSumAggregateInputType = {
    id?: true
    book_id?: true
    price?: true
    stock_status?: true
    store?: true
    verbosity?: true
  }

  export type FolioProductMinAggregateInputType = {
    id?: true
    type?: true
    book_id?: true
    sku?: true
    title?: true
    pages?: true
    short_description?: true
    editor_note_description?: true
    collection_text?: true
    category?: true
    publication_date?: true
    price?: true
    url?: true
    main_image?: true
    thumbnail_image?: true
    stock_status?: true
    store?: true
    verbosity?: true
  }

  export type FolioProductMaxAggregateInputType = {
    id?: true
    type?: true
    book_id?: true
    sku?: true
    title?: true
    pages?: true
    short_description?: true
    editor_note_description?: true
    collection_text?: true
    category?: true
    publication_date?: true
    price?: true
    url?: true
    main_image?: true
    thumbnail_image?: true
    stock_status?: true
    store?: true
    verbosity?: true
  }

  export type FolioProductCountAggregateInputType = {
    id?: true
    type?: true
    book_id?: true
    sku?: true
    title?: true
    author?: true
    illustrator?: true
    introduced_by?: true
    afterword_by?: true
    pages?: true
    short_description?: true
    editor_note_description?: true
    collection_text?: true
    category?: true
    publication_date?: true
    price?: true
    url?: true
    main_image?: true
    thumbnail_image?: true
    media?: true
    visibility?: true
    stock_status?: true
    store?: true
    verbosity?: true
    _all?: true
  }

  export type FolioProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FolioProduct to aggregate.
     */
    where?: FolioProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioProducts to fetch.
     */
    orderBy?: FolioProductOrderByWithRelationInput | FolioProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolioProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FolioProducts
    **/
    _count?: true | FolioProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolioProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolioProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolioProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolioProductMaxAggregateInputType
  }

  export type GetFolioProductAggregateType<T extends FolioProductAggregateArgs> = {
        [P in keyof T & keyof AggregateFolioProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolioProduct[P]>
      : GetScalarType<T[P], AggregateFolioProduct[P]>
  }




  export type FolioProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolioProductWhereInput
    orderBy?: FolioProductOrderByWithAggregationInput | FolioProductOrderByWithAggregationInput[]
    by: FolioProductScalarFieldEnum[] | FolioProductScalarFieldEnum
    having?: FolioProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolioProductCountAggregateInputType | true
    _avg?: FolioProductAvgAggregateInputType
    _sum?: FolioProductSumAggregateInputType
    _min?: FolioProductMinAggregateInputType
    _max?: FolioProductMaxAggregateInputType
  }

  export type FolioProductGroupByOutputType = {
    id: number
    type: string
    book_id: number
    sku: string
    title: string
    author: JsonValue
    illustrator: JsonValue
    introduced_by: JsonValue
    afterword_by: JsonValue
    pages: string
    short_description: string
    editor_note_description: string
    collection_text: string
    category: string
    publication_date: Date | null
    price: number
    url: string
    main_image: string
    thumbnail_image: string
    media: JsonValue
    visibility: JsonValue
    stock_status: number
    store: number
    verbosity: number
    _count: FolioProductCountAggregateOutputType | null
    _avg: FolioProductAvgAggregateOutputType | null
    _sum: FolioProductSumAggregateOutputType | null
    _min: FolioProductMinAggregateOutputType | null
    _max: FolioProductMaxAggregateOutputType | null
  }

  type GetFolioProductGroupByPayload<T extends FolioProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolioProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolioProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolioProductGroupByOutputType[P]>
            : GetScalarType<T[P], FolioProductGroupByOutputType[P]>
        }
      >
    >


  export type FolioProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    book_id?: boolean
    sku?: boolean
    title?: boolean
    author?: boolean
    illustrator?: boolean
    introduced_by?: boolean
    afterword_by?: boolean
    pages?: boolean
    short_description?: boolean
    editor_note_description?: boolean
    collection_text?: boolean
    category?: boolean
    publication_date?: boolean
    price?: boolean
    url?: boolean
    main_image?: boolean
    thumbnail_image?: boolean
    media?: boolean
    visibility?: boolean
    stock_status?: boolean
    store?: boolean
    verbosity?: boolean
    stock?: boolean | FolioProduct$stockArgs<ExtArgs>
  }, ExtArgs["result"]["folioProduct"]>

  export type FolioProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    book_id?: boolean
    sku?: boolean
    title?: boolean
    author?: boolean
    illustrator?: boolean
    introduced_by?: boolean
    afterword_by?: boolean
    pages?: boolean
    short_description?: boolean
    editor_note_description?: boolean
    collection_text?: boolean
    category?: boolean
    publication_date?: boolean
    price?: boolean
    url?: boolean
    main_image?: boolean
    thumbnail_image?: boolean
    media?: boolean
    visibility?: boolean
    stock_status?: boolean
    store?: boolean
    verbosity?: boolean
  }, ExtArgs["result"]["folioProduct"]>

  export type FolioProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    book_id?: boolean
    sku?: boolean
    title?: boolean
    author?: boolean
    illustrator?: boolean
    introduced_by?: boolean
    afterword_by?: boolean
    pages?: boolean
    short_description?: boolean
    editor_note_description?: boolean
    collection_text?: boolean
    category?: boolean
    publication_date?: boolean
    price?: boolean
    url?: boolean
    main_image?: boolean
    thumbnail_image?: boolean
    media?: boolean
    visibility?: boolean
    stock_status?: boolean
    store?: boolean
    verbosity?: boolean
  }, ExtArgs["result"]["folioProduct"]>

  export type FolioProductSelectScalar = {
    id?: boolean
    type?: boolean
    book_id?: boolean
    sku?: boolean
    title?: boolean
    author?: boolean
    illustrator?: boolean
    introduced_by?: boolean
    afterword_by?: boolean
    pages?: boolean
    short_description?: boolean
    editor_note_description?: boolean
    collection_text?: boolean
    category?: boolean
    publication_date?: boolean
    price?: boolean
    url?: boolean
    main_image?: boolean
    thumbnail_image?: boolean
    media?: boolean
    visibility?: boolean
    stock_status?: boolean
    store?: boolean
    verbosity?: boolean
  }

  export type FolioProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "book_id" | "sku" | "title" | "author" | "illustrator" | "introduced_by" | "afterword_by" | "pages" | "short_description" | "editor_note_description" | "collection_text" | "category" | "publication_date" | "price" | "url" | "main_image" | "thumbnail_image" | "media" | "visibility" | "stock_status" | "store" | "verbosity", ExtArgs["result"]["folioProduct"]>
  export type FolioProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | FolioProduct$stockArgs<ExtArgs>
  }
  export type FolioProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FolioProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FolioProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FolioProduct"
    objects: {
      stock: Prisma.$FolioStockPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      book_id: number
      sku: string
      title: string
      author: Prisma.JsonValue
      illustrator: Prisma.JsonValue
      introduced_by: Prisma.JsonValue
      afterword_by: Prisma.JsonValue
      pages: string
      short_description: string
      editor_note_description: string
      collection_text: string
      category: string
      publication_date: Date | null
      price: number
      url: string
      main_image: string
      thumbnail_image: string
      media: Prisma.JsonValue
      visibility: Prisma.JsonValue
      stock_status: number
      store: number
      verbosity: number
    }, ExtArgs["result"]["folioProduct"]>
    composites: {}
  }

  type FolioProductGetPayload<S extends boolean | null | undefined | FolioProductDefaultArgs> = $Result.GetResult<Prisma.$FolioProductPayload, S>

  type FolioProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolioProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolioProductCountAggregateInputType | true
    }

  export interface FolioProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FolioProduct'], meta: { name: 'FolioProduct' } }
    /**
     * Find zero or one FolioProduct that matches the filter.
     * @param {FolioProductFindUniqueArgs} args - Arguments to find a FolioProduct
     * @example
     * // Get one FolioProduct
     * const folioProduct = await prisma.folioProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolioProductFindUniqueArgs>(args: SelectSubset<T, FolioProductFindUniqueArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FolioProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolioProductFindUniqueOrThrowArgs} args - Arguments to find a FolioProduct
     * @example
     * // Get one FolioProduct
     * const folioProduct = await prisma.folioProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolioProductFindUniqueOrThrowArgs>(args: SelectSubset<T, FolioProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FolioProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioProductFindFirstArgs} args - Arguments to find a FolioProduct
     * @example
     * // Get one FolioProduct
     * const folioProduct = await prisma.folioProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolioProductFindFirstArgs>(args?: SelectSubset<T, FolioProductFindFirstArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FolioProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioProductFindFirstOrThrowArgs} args - Arguments to find a FolioProduct
     * @example
     * // Get one FolioProduct
     * const folioProduct = await prisma.folioProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolioProductFindFirstOrThrowArgs>(args?: SelectSubset<T, FolioProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FolioProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FolioProducts
     * const folioProducts = await prisma.folioProduct.findMany()
     * 
     * // Get first 10 FolioProducts
     * const folioProducts = await prisma.folioProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folioProductWithIdOnly = await prisma.folioProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolioProductFindManyArgs>(args?: SelectSubset<T, FolioProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FolioProduct.
     * @param {FolioProductCreateArgs} args - Arguments to create a FolioProduct.
     * @example
     * // Create one FolioProduct
     * const FolioProduct = await prisma.folioProduct.create({
     *   data: {
     *     // ... data to create a FolioProduct
     *   }
     * })
     * 
     */
    create<T extends FolioProductCreateArgs>(args: SelectSubset<T, FolioProductCreateArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FolioProducts.
     * @param {FolioProductCreateManyArgs} args - Arguments to create many FolioProducts.
     * @example
     * // Create many FolioProducts
     * const folioProduct = await prisma.folioProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolioProductCreateManyArgs>(args?: SelectSubset<T, FolioProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FolioProducts and returns the data saved in the database.
     * @param {FolioProductCreateManyAndReturnArgs} args - Arguments to create many FolioProducts.
     * @example
     * // Create many FolioProducts
     * const folioProduct = await prisma.folioProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FolioProducts and only return the `id`
     * const folioProductWithIdOnly = await prisma.folioProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolioProductCreateManyAndReturnArgs>(args?: SelectSubset<T, FolioProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FolioProduct.
     * @param {FolioProductDeleteArgs} args - Arguments to delete one FolioProduct.
     * @example
     * // Delete one FolioProduct
     * const FolioProduct = await prisma.folioProduct.delete({
     *   where: {
     *     // ... filter to delete one FolioProduct
     *   }
     * })
     * 
     */
    delete<T extends FolioProductDeleteArgs>(args: SelectSubset<T, FolioProductDeleteArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FolioProduct.
     * @param {FolioProductUpdateArgs} args - Arguments to update one FolioProduct.
     * @example
     * // Update one FolioProduct
     * const folioProduct = await prisma.folioProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolioProductUpdateArgs>(args: SelectSubset<T, FolioProductUpdateArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FolioProducts.
     * @param {FolioProductDeleteManyArgs} args - Arguments to filter FolioProducts to delete.
     * @example
     * // Delete a few FolioProducts
     * const { count } = await prisma.folioProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolioProductDeleteManyArgs>(args?: SelectSubset<T, FolioProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FolioProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FolioProducts
     * const folioProduct = await prisma.folioProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolioProductUpdateManyArgs>(args: SelectSubset<T, FolioProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FolioProducts and returns the data updated in the database.
     * @param {FolioProductUpdateManyAndReturnArgs} args - Arguments to update many FolioProducts.
     * @example
     * // Update many FolioProducts
     * const folioProduct = await prisma.folioProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FolioProducts and only return the `id`
     * const folioProductWithIdOnly = await prisma.folioProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends FolioProductUpdateManyAndReturnArgs>(args: SelectSubset<T, FolioProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FolioProduct.
     * @param {FolioProductUpsertArgs} args - Arguments to update or create a FolioProduct.
     * @example
     * // Update or create a FolioProduct
     * const folioProduct = await prisma.folioProduct.upsert({
     *   create: {
     *     // ... data to create a FolioProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FolioProduct we want to update
     *   }
     * })
     */
    upsert<T extends FolioProductUpsertArgs>(args: SelectSubset<T, FolioProductUpsertArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FolioProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioProductCountArgs} args - Arguments to filter FolioProducts to count.
     * @example
     * // Count the number of FolioProducts
     * const count = await prisma.folioProduct.count({
     *   where: {
     *     // ... the filter for the FolioProducts we want to count
     *   }
     * })
    **/
    count<T extends FolioProductCountArgs>(
      args?: Subset<T, FolioProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolioProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FolioProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolioProductAggregateArgs>(args: Subset<T, FolioProductAggregateArgs>): Prisma.PrismaPromise<GetFolioProductAggregateType<T>>

    /**
     * Group by FolioProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioProductGroupByArgs} args - Group by arguments.
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
      T extends FolioProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolioProductGroupByArgs['orderBy'] }
        : { orderBy?: FolioProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FolioProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolioProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FolioProduct model
   */
  readonly fields: FolioProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FolioProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolioProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock<T extends FolioProduct$stockArgs<ExtArgs> = {}>(args?: Subset<T, FolioProduct$stockArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FolioProduct model
   */
  interface FolioProductFieldRefs {
    readonly id: FieldRef<"FolioProduct", 'Int'>
    readonly type: FieldRef<"FolioProduct", 'String'>
    readonly book_id: FieldRef<"FolioProduct", 'Int'>
    readonly sku: FieldRef<"FolioProduct", 'String'>
    readonly title: FieldRef<"FolioProduct", 'String'>
    readonly author: FieldRef<"FolioProduct", 'Json'>
    readonly illustrator: FieldRef<"FolioProduct", 'Json'>
    readonly introduced_by: FieldRef<"FolioProduct", 'Json'>
    readonly afterword_by: FieldRef<"FolioProduct", 'Json'>
    readonly pages: FieldRef<"FolioProduct", 'String'>
    readonly short_description: FieldRef<"FolioProduct", 'String'>
    readonly editor_note_description: FieldRef<"FolioProduct", 'String'>
    readonly collection_text: FieldRef<"FolioProduct", 'String'>
    readonly category: FieldRef<"FolioProduct", 'String'>
    readonly publication_date: FieldRef<"FolioProduct", 'DateTime'>
    readonly price: FieldRef<"FolioProduct", 'Float'>
    readonly url: FieldRef<"FolioProduct", 'String'>
    readonly main_image: FieldRef<"FolioProduct", 'String'>
    readonly thumbnail_image: FieldRef<"FolioProduct", 'String'>
    readonly media: FieldRef<"FolioProduct", 'Json'>
    readonly visibility: FieldRef<"FolioProduct", 'Json'>
    readonly stock_status: FieldRef<"FolioProduct", 'Int'>
    readonly store: FieldRef<"FolioProduct", 'Int'>
    readonly verbosity: FieldRef<"FolioProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FolioProduct findUnique
   */
  export type FolioProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * Filter, which FolioProduct to fetch.
     */
    where: FolioProductWhereUniqueInput
  }

  /**
   * FolioProduct findUniqueOrThrow
   */
  export type FolioProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * Filter, which FolioProduct to fetch.
     */
    where: FolioProductWhereUniqueInput
  }

  /**
   * FolioProduct findFirst
   */
  export type FolioProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * Filter, which FolioProduct to fetch.
     */
    where?: FolioProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioProducts to fetch.
     */
    orderBy?: FolioProductOrderByWithRelationInput | FolioProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FolioProducts.
     */
    cursor?: FolioProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FolioProducts.
     */
    distinct?: FolioProductScalarFieldEnum | FolioProductScalarFieldEnum[]
  }

  /**
   * FolioProduct findFirstOrThrow
   */
  export type FolioProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * Filter, which FolioProduct to fetch.
     */
    where?: FolioProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioProducts to fetch.
     */
    orderBy?: FolioProductOrderByWithRelationInput | FolioProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FolioProducts.
     */
    cursor?: FolioProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FolioProducts.
     */
    distinct?: FolioProductScalarFieldEnum | FolioProductScalarFieldEnum[]
  }

  /**
   * FolioProduct findMany
   */
  export type FolioProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * Filter, which FolioProducts to fetch.
     */
    where?: FolioProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioProducts to fetch.
     */
    orderBy?: FolioProductOrderByWithRelationInput | FolioProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FolioProducts.
     */
    cursor?: FolioProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioProducts.
     */
    skip?: number
    distinct?: FolioProductScalarFieldEnum | FolioProductScalarFieldEnum[]
  }

  /**
   * FolioProduct create
   */
  export type FolioProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * The data needed to create a FolioProduct.
     */
    data: XOR<FolioProductCreateInput, FolioProductUncheckedCreateInput>
  }

  /**
   * FolioProduct createMany
   */
  export type FolioProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FolioProducts.
     */
    data: FolioProductCreateManyInput | FolioProductCreateManyInput[]
  }

  /**
   * FolioProduct createManyAndReturn
   */
  export type FolioProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * The data used to create many FolioProducts.
     */
    data: FolioProductCreateManyInput | FolioProductCreateManyInput[]
  }

  /**
   * FolioProduct update
   */
  export type FolioProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * The data needed to update a FolioProduct.
     */
    data: XOR<FolioProductUpdateInput, FolioProductUncheckedUpdateInput>
    /**
     * Choose, which FolioProduct to update.
     */
    where: FolioProductWhereUniqueInput
  }

  /**
   * FolioProduct updateMany
   */
  export type FolioProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FolioProducts.
     */
    data: XOR<FolioProductUpdateManyMutationInput, FolioProductUncheckedUpdateManyInput>
    /**
     * Filter which FolioProducts to update
     */
    where?: FolioProductWhereInput
    /**
     * Limit how many FolioProducts to update.
     */
    limit?: number
  }

  /**
   * FolioProduct updateManyAndReturn
   */
  export type FolioProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * The data used to update FolioProducts.
     */
    data: XOR<FolioProductUpdateManyMutationInput, FolioProductUncheckedUpdateManyInput>
    /**
     * Filter which FolioProducts to update
     */
    where?: FolioProductWhereInput
    /**
     * Limit how many FolioProducts to update.
     */
    limit?: number
  }

  /**
   * FolioProduct upsert
   */
  export type FolioProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * The filter to search for the FolioProduct to update in case it exists.
     */
    where: FolioProductWhereUniqueInput
    /**
     * In case the FolioProduct found by the `where` argument doesn't exist, create a new FolioProduct with this data.
     */
    create: XOR<FolioProductCreateInput, FolioProductUncheckedCreateInput>
    /**
     * In case the FolioProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolioProductUpdateInput, FolioProductUncheckedUpdateInput>
  }

  /**
   * FolioProduct delete
   */
  export type FolioProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
    /**
     * Filter which FolioProduct to delete.
     */
    where: FolioProductWhereUniqueInput
  }

  /**
   * FolioProduct deleteMany
   */
  export type FolioProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FolioProducts to delete
     */
    where?: FolioProductWhereInput
    /**
     * Limit how many FolioProducts to delete.
     */
    limit?: number
  }

  /**
   * FolioProduct.stock
   */
  export type FolioProduct$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    where?: FolioStockWhereInput
  }

  /**
   * FolioProduct without action
   */
  export type FolioProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioProduct
     */
    select?: FolioProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioProduct
     */
    omit?: FolioProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioProductInclude<ExtArgs> | null
  }


  /**
   * Model FolioStock
   */

  export type AggregateFolioStock = {
    _count: FolioStockCountAggregateOutputType | null
    _avg: FolioStockAvgAggregateOutputType | null
    _sum: FolioStockSumAggregateOutputType | null
    _min: FolioStockMinAggregateOutputType | null
    _max: FolioStockMaxAggregateOutputType | null
  }

  export type FolioStockAvgAggregateOutputType = {
    id: number | null
    book_id: number | null
    quantity: number | null
  }

  export type FolioStockSumAggregateOutputType = {
    id: number | null
    book_id: number | null
    quantity: number | null
  }

  export type FolioStockMinAggregateOutputType = {
    id: number | null
    type: string | null
    book_id: number | null
    is_out_temp: boolean | null
    quantity: number | null
  }

  export type FolioStockMaxAggregateOutputType = {
    id: number | null
    type: string | null
    book_id: number | null
    is_out_temp: boolean | null
    quantity: number | null
  }

  export type FolioStockCountAggregateOutputType = {
    id: number
    type: number
    book_id: number
    is_out_temp: number
    quantity: number
    _all: number
  }


  export type FolioStockAvgAggregateInputType = {
    id?: true
    book_id?: true
    quantity?: true
  }

  export type FolioStockSumAggregateInputType = {
    id?: true
    book_id?: true
    quantity?: true
  }

  export type FolioStockMinAggregateInputType = {
    id?: true
    type?: true
    book_id?: true
    is_out_temp?: true
    quantity?: true
  }

  export type FolioStockMaxAggregateInputType = {
    id?: true
    type?: true
    book_id?: true
    is_out_temp?: true
    quantity?: true
  }

  export type FolioStockCountAggregateInputType = {
    id?: true
    type?: true
    book_id?: true
    is_out_temp?: true
    quantity?: true
    _all?: true
  }

  export type FolioStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FolioStock to aggregate.
     */
    where?: FolioStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioStocks to fetch.
     */
    orderBy?: FolioStockOrderByWithRelationInput | FolioStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolioStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FolioStocks
    **/
    _count?: true | FolioStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolioStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolioStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolioStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolioStockMaxAggregateInputType
  }

  export type GetFolioStockAggregateType<T extends FolioStockAggregateArgs> = {
        [P in keyof T & keyof AggregateFolioStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolioStock[P]>
      : GetScalarType<T[P], AggregateFolioStock[P]>
  }




  export type FolioStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolioStockWhereInput
    orderBy?: FolioStockOrderByWithAggregationInput | FolioStockOrderByWithAggregationInput[]
    by: FolioStockScalarFieldEnum[] | FolioStockScalarFieldEnum
    having?: FolioStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolioStockCountAggregateInputType | true
    _avg?: FolioStockAvgAggregateInputType
    _sum?: FolioStockSumAggregateInputType
    _min?: FolioStockMinAggregateInputType
    _max?: FolioStockMaxAggregateInputType
  }

  export type FolioStockGroupByOutputType = {
    id: number
    type: string
    book_id: number
    is_out_temp: boolean
    quantity: number
    _count: FolioStockCountAggregateOutputType | null
    _avg: FolioStockAvgAggregateOutputType | null
    _sum: FolioStockSumAggregateOutputType | null
    _min: FolioStockMinAggregateOutputType | null
    _max: FolioStockMaxAggregateOutputType | null
  }

  type GetFolioStockGroupByPayload<T extends FolioStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolioStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolioStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolioStockGroupByOutputType[P]>
            : GetScalarType<T[P], FolioStockGroupByOutputType[P]>
        }
      >
    >


  export type FolioStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    book_id?: boolean
    is_out_temp?: boolean
    quantity?: boolean
    product?: boolean | FolioProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folioStock"]>

  export type FolioStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    book_id?: boolean
    is_out_temp?: boolean
    quantity?: boolean
    product?: boolean | FolioProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folioStock"]>

  export type FolioStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    book_id?: boolean
    is_out_temp?: boolean
    quantity?: boolean
    product?: boolean | FolioProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folioStock"]>

  export type FolioStockSelectScalar = {
    id?: boolean
    type?: boolean
    book_id?: boolean
    is_out_temp?: boolean
    quantity?: boolean
  }

  export type FolioStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "book_id" | "is_out_temp" | "quantity", ExtArgs["result"]["folioStock"]>
  export type FolioStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | FolioProductDefaultArgs<ExtArgs>
  }
  export type FolioStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | FolioProductDefaultArgs<ExtArgs>
  }
  export type FolioStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | FolioProductDefaultArgs<ExtArgs>
  }

  export type $FolioStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FolioStock"
    objects: {
      product: Prisma.$FolioProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      book_id: number
      is_out_temp: boolean
      quantity: number
    }, ExtArgs["result"]["folioStock"]>
    composites: {}
  }

  type FolioStockGetPayload<S extends boolean | null | undefined | FolioStockDefaultArgs> = $Result.GetResult<Prisma.$FolioStockPayload, S>

  type FolioStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolioStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolioStockCountAggregateInputType | true
    }

  export interface FolioStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FolioStock'], meta: { name: 'FolioStock' } }
    /**
     * Find zero or one FolioStock that matches the filter.
     * @param {FolioStockFindUniqueArgs} args - Arguments to find a FolioStock
     * @example
     * // Get one FolioStock
     * const folioStock = await prisma.folioStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolioStockFindUniqueArgs>(args: SelectSubset<T, FolioStockFindUniqueArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FolioStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolioStockFindUniqueOrThrowArgs} args - Arguments to find a FolioStock
     * @example
     * // Get one FolioStock
     * const folioStock = await prisma.folioStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolioStockFindUniqueOrThrowArgs>(args: SelectSubset<T, FolioStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FolioStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioStockFindFirstArgs} args - Arguments to find a FolioStock
     * @example
     * // Get one FolioStock
     * const folioStock = await prisma.folioStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolioStockFindFirstArgs>(args?: SelectSubset<T, FolioStockFindFirstArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FolioStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioStockFindFirstOrThrowArgs} args - Arguments to find a FolioStock
     * @example
     * // Get one FolioStock
     * const folioStock = await prisma.folioStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolioStockFindFirstOrThrowArgs>(args?: SelectSubset<T, FolioStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FolioStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FolioStocks
     * const folioStocks = await prisma.folioStock.findMany()
     * 
     * // Get first 10 FolioStocks
     * const folioStocks = await prisma.folioStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folioStockWithIdOnly = await prisma.folioStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolioStockFindManyArgs>(args?: SelectSubset<T, FolioStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FolioStock.
     * @param {FolioStockCreateArgs} args - Arguments to create a FolioStock.
     * @example
     * // Create one FolioStock
     * const FolioStock = await prisma.folioStock.create({
     *   data: {
     *     // ... data to create a FolioStock
     *   }
     * })
     * 
     */
    create<T extends FolioStockCreateArgs>(args: SelectSubset<T, FolioStockCreateArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FolioStocks.
     * @param {FolioStockCreateManyArgs} args - Arguments to create many FolioStocks.
     * @example
     * // Create many FolioStocks
     * const folioStock = await prisma.folioStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolioStockCreateManyArgs>(args?: SelectSubset<T, FolioStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FolioStocks and returns the data saved in the database.
     * @param {FolioStockCreateManyAndReturnArgs} args - Arguments to create many FolioStocks.
     * @example
     * // Create many FolioStocks
     * const folioStock = await prisma.folioStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FolioStocks and only return the `id`
     * const folioStockWithIdOnly = await prisma.folioStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolioStockCreateManyAndReturnArgs>(args?: SelectSubset<T, FolioStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FolioStock.
     * @param {FolioStockDeleteArgs} args - Arguments to delete one FolioStock.
     * @example
     * // Delete one FolioStock
     * const FolioStock = await prisma.folioStock.delete({
     *   where: {
     *     // ... filter to delete one FolioStock
     *   }
     * })
     * 
     */
    delete<T extends FolioStockDeleteArgs>(args: SelectSubset<T, FolioStockDeleteArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FolioStock.
     * @param {FolioStockUpdateArgs} args - Arguments to update one FolioStock.
     * @example
     * // Update one FolioStock
     * const folioStock = await prisma.folioStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolioStockUpdateArgs>(args: SelectSubset<T, FolioStockUpdateArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FolioStocks.
     * @param {FolioStockDeleteManyArgs} args - Arguments to filter FolioStocks to delete.
     * @example
     * // Delete a few FolioStocks
     * const { count } = await prisma.folioStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolioStockDeleteManyArgs>(args?: SelectSubset<T, FolioStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FolioStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FolioStocks
     * const folioStock = await prisma.folioStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolioStockUpdateManyArgs>(args: SelectSubset<T, FolioStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FolioStocks and returns the data updated in the database.
     * @param {FolioStockUpdateManyAndReturnArgs} args - Arguments to update many FolioStocks.
     * @example
     * // Update many FolioStocks
     * const folioStock = await prisma.folioStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FolioStocks and only return the `id`
     * const folioStockWithIdOnly = await prisma.folioStock.updateManyAndReturn({
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
    updateManyAndReturn<T extends FolioStockUpdateManyAndReturnArgs>(args: SelectSubset<T, FolioStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FolioStock.
     * @param {FolioStockUpsertArgs} args - Arguments to update or create a FolioStock.
     * @example
     * // Update or create a FolioStock
     * const folioStock = await prisma.folioStock.upsert({
     *   create: {
     *     // ... data to create a FolioStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FolioStock we want to update
     *   }
     * })
     */
    upsert<T extends FolioStockUpsertArgs>(args: SelectSubset<T, FolioStockUpsertArgs<ExtArgs>>): Prisma__FolioStockClient<$Result.GetResult<Prisma.$FolioStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FolioStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioStockCountArgs} args - Arguments to filter FolioStocks to count.
     * @example
     * // Count the number of FolioStocks
     * const count = await prisma.folioStock.count({
     *   where: {
     *     // ... the filter for the FolioStocks we want to count
     *   }
     * })
    **/
    count<T extends FolioStockCountArgs>(
      args?: Subset<T, FolioStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolioStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FolioStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolioStockAggregateArgs>(args: Subset<T, FolioStockAggregateArgs>): Prisma.PrismaPromise<GetFolioStockAggregateType<T>>

    /**
     * Group by FolioStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioStockGroupByArgs} args - Group by arguments.
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
      T extends FolioStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolioStockGroupByArgs['orderBy'] }
        : { orderBy?: FolioStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FolioStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolioStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FolioStock model
   */
  readonly fields: FolioStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FolioStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolioStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends FolioProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FolioProductDefaultArgs<ExtArgs>>): Prisma__FolioProductClient<$Result.GetResult<Prisma.$FolioProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FolioStock model
   */
  interface FolioStockFieldRefs {
    readonly id: FieldRef<"FolioStock", 'Int'>
    readonly type: FieldRef<"FolioStock", 'String'>
    readonly book_id: FieldRef<"FolioStock", 'Int'>
    readonly is_out_temp: FieldRef<"FolioStock", 'Boolean'>
    readonly quantity: FieldRef<"FolioStock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FolioStock findUnique
   */
  export type FolioStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * Filter, which FolioStock to fetch.
     */
    where: FolioStockWhereUniqueInput
  }

  /**
   * FolioStock findUniqueOrThrow
   */
  export type FolioStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * Filter, which FolioStock to fetch.
     */
    where: FolioStockWhereUniqueInput
  }

  /**
   * FolioStock findFirst
   */
  export type FolioStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * Filter, which FolioStock to fetch.
     */
    where?: FolioStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioStocks to fetch.
     */
    orderBy?: FolioStockOrderByWithRelationInput | FolioStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FolioStocks.
     */
    cursor?: FolioStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FolioStocks.
     */
    distinct?: FolioStockScalarFieldEnum | FolioStockScalarFieldEnum[]
  }

  /**
   * FolioStock findFirstOrThrow
   */
  export type FolioStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * Filter, which FolioStock to fetch.
     */
    where?: FolioStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioStocks to fetch.
     */
    orderBy?: FolioStockOrderByWithRelationInput | FolioStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FolioStocks.
     */
    cursor?: FolioStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FolioStocks.
     */
    distinct?: FolioStockScalarFieldEnum | FolioStockScalarFieldEnum[]
  }

  /**
   * FolioStock findMany
   */
  export type FolioStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * Filter, which FolioStocks to fetch.
     */
    where?: FolioStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolioStocks to fetch.
     */
    orderBy?: FolioStockOrderByWithRelationInput | FolioStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FolioStocks.
     */
    cursor?: FolioStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolioStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolioStocks.
     */
    skip?: number
    distinct?: FolioStockScalarFieldEnum | FolioStockScalarFieldEnum[]
  }

  /**
   * FolioStock create
   */
  export type FolioStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * The data needed to create a FolioStock.
     */
    data: XOR<FolioStockCreateInput, FolioStockUncheckedCreateInput>
  }

  /**
   * FolioStock createMany
   */
  export type FolioStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FolioStocks.
     */
    data: FolioStockCreateManyInput | FolioStockCreateManyInput[]
  }

  /**
   * FolioStock createManyAndReturn
   */
  export type FolioStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * The data used to create many FolioStocks.
     */
    data: FolioStockCreateManyInput | FolioStockCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FolioStock update
   */
  export type FolioStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * The data needed to update a FolioStock.
     */
    data: XOR<FolioStockUpdateInput, FolioStockUncheckedUpdateInput>
    /**
     * Choose, which FolioStock to update.
     */
    where: FolioStockWhereUniqueInput
  }

  /**
   * FolioStock updateMany
   */
  export type FolioStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FolioStocks.
     */
    data: XOR<FolioStockUpdateManyMutationInput, FolioStockUncheckedUpdateManyInput>
    /**
     * Filter which FolioStocks to update
     */
    where?: FolioStockWhereInput
    /**
     * Limit how many FolioStocks to update.
     */
    limit?: number
  }

  /**
   * FolioStock updateManyAndReturn
   */
  export type FolioStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * The data used to update FolioStocks.
     */
    data: XOR<FolioStockUpdateManyMutationInput, FolioStockUncheckedUpdateManyInput>
    /**
     * Filter which FolioStocks to update
     */
    where?: FolioStockWhereInput
    /**
     * Limit how many FolioStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FolioStock upsert
   */
  export type FolioStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * The filter to search for the FolioStock to update in case it exists.
     */
    where: FolioStockWhereUniqueInput
    /**
     * In case the FolioStock found by the `where` argument doesn't exist, create a new FolioStock with this data.
     */
    create: XOR<FolioStockCreateInput, FolioStockUncheckedCreateInput>
    /**
     * In case the FolioStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolioStockUpdateInput, FolioStockUncheckedUpdateInput>
  }

  /**
   * FolioStock delete
   */
  export type FolioStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
    /**
     * Filter which FolioStock to delete.
     */
    where: FolioStockWhereUniqueInput
  }

  /**
   * FolioStock deleteMany
   */
  export type FolioStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FolioStocks to delete
     */
    where?: FolioStockWhereInput
    /**
     * Limit how many FolioStocks to delete.
     */
    limit?: number
  }

  /**
   * FolioStock without action
   */
  export type FolioStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolioStock
     */
    select?: FolioStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolioStock
     */
    omit?: FolioStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioStockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FolioProductScalarFieldEnum: {
    id: 'id',
    type: 'type',
    book_id: 'book_id',
    sku: 'sku',
    title: 'title',
    author: 'author',
    illustrator: 'illustrator',
    introduced_by: 'introduced_by',
    afterword_by: 'afterword_by',
    pages: 'pages',
    short_description: 'short_description',
    editor_note_description: 'editor_note_description',
    collection_text: 'collection_text',
    category: 'category',
    publication_date: 'publication_date',
    price: 'price',
    url: 'url',
    main_image: 'main_image',
    thumbnail_image: 'thumbnail_image',
    media: 'media',
    visibility: 'visibility',
    stock_status: 'stock_status',
    store: 'store',
    verbosity: 'verbosity'
  };

  export type FolioProductScalarFieldEnum = (typeof FolioProductScalarFieldEnum)[keyof typeof FolioProductScalarFieldEnum]


  export const FolioStockScalarFieldEnum: {
    id: 'id',
    type: 'type',
    book_id: 'book_id',
    is_out_temp: 'is_out_temp',
    quantity: 'quantity'
  };

  export type FolioStockScalarFieldEnum = (typeof FolioStockScalarFieldEnum)[keyof typeof FolioStockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type FolioProductWhereInput = {
    AND?: FolioProductWhereInput | FolioProductWhereInput[]
    OR?: FolioProductWhereInput[]
    NOT?: FolioProductWhereInput | FolioProductWhereInput[]
    id?: IntFilter<"FolioProduct"> | number
    type?: StringFilter<"FolioProduct"> | string
    book_id?: IntFilter<"FolioProduct"> | number
    sku?: StringFilter<"FolioProduct"> | string
    title?: StringFilter<"FolioProduct"> | string
    author?: JsonFilter<"FolioProduct">
    illustrator?: JsonFilter<"FolioProduct">
    introduced_by?: JsonFilter<"FolioProduct">
    afterword_by?: JsonFilter<"FolioProduct">
    pages?: StringFilter<"FolioProduct"> | string
    short_description?: StringFilter<"FolioProduct"> | string
    editor_note_description?: StringFilter<"FolioProduct"> | string
    collection_text?: StringFilter<"FolioProduct"> | string
    category?: StringFilter<"FolioProduct"> | string
    publication_date?: DateTimeNullableFilter<"FolioProduct"> | Date | string | null
    price?: FloatFilter<"FolioProduct"> | number
    url?: StringFilter<"FolioProduct"> | string
    main_image?: StringFilter<"FolioProduct"> | string
    thumbnail_image?: StringFilter<"FolioProduct"> | string
    media?: JsonFilter<"FolioProduct">
    visibility?: JsonFilter<"FolioProduct">
    stock_status?: IntFilter<"FolioProduct"> | number
    store?: IntFilter<"FolioProduct"> | number
    verbosity?: IntFilter<"FolioProduct"> | number
    stock?: XOR<FolioStockNullableScalarRelationFilter, FolioStockWhereInput> | null
  }

  export type FolioProductOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    author?: SortOrder
    illustrator?: SortOrder
    introduced_by?: SortOrder
    afterword_by?: SortOrder
    pages?: SortOrder
    short_description?: SortOrder
    editor_note_description?: SortOrder
    collection_text?: SortOrder
    category?: SortOrder
    publication_date?: SortOrderInput | SortOrder
    price?: SortOrder
    url?: SortOrder
    main_image?: SortOrder
    thumbnail_image?: SortOrder
    media?: SortOrder
    visibility?: SortOrder
    stock_status?: SortOrder
    store?: SortOrder
    verbosity?: SortOrder
    stock?: FolioStockOrderByWithRelationInput
  }

  export type FolioProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    book_id?: number
    AND?: FolioProductWhereInput | FolioProductWhereInput[]
    OR?: FolioProductWhereInput[]
    NOT?: FolioProductWhereInput | FolioProductWhereInput[]
    type?: StringFilter<"FolioProduct"> | string
    sku?: StringFilter<"FolioProduct"> | string
    title?: StringFilter<"FolioProduct"> | string
    author?: JsonFilter<"FolioProduct">
    illustrator?: JsonFilter<"FolioProduct">
    introduced_by?: JsonFilter<"FolioProduct">
    afterword_by?: JsonFilter<"FolioProduct">
    pages?: StringFilter<"FolioProduct"> | string
    short_description?: StringFilter<"FolioProduct"> | string
    editor_note_description?: StringFilter<"FolioProduct"> | string
    collection_text?: StringFilter<"FolioProduct"> | string
    category?: StringFilter<"FolioProduct"> | string
    publication_date?: DateTimeNullableFilter<"FolioProduct"> | Date | string | null
    price?: FloatFilter<"FolioProduct"> | number
    url?: StringFilter<"FolioProduct"> | string
    main_image?: StringFilter<"FolioProduct"> | string
    thumbnail_image?: StringFilter<"FolioProduct"> | string
    media?: JsonFilter<"FolioProduct">
    visibility?: JsonFilter<"FolioProduct">
    stock_status?: IntFilter<"FolioProduct"> | number
    store?: IntFilter<"FolioProduct"> | number
    verbosity?: IntFilter<"FolioProduct"> | number
    stock?: XOR<FolioStockNullableScalarRelationFilter, FolioStockWhereInput> | null
  }, "id" | "book_id">

  export type FolioProductOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    author?: SortOrder
    illustrator?: SortOrder
    introduced_by?: SortOrder
    afterword_by?: SortOrder
    pages?: SortOrder
    short_description?: SortOrder
    editor_note_description?: SortOrder
    collection_text?: SortOrder
    category?: SortOrder
    publication_date?: SortOrderInput | SortOrder
    price?: SortOrder
    url?: SortOrder
    main_image?: SortOrder
    thumbnail_image?: SortOrder
    media?: SortOrder
    visibility?: SortOrder
    stock_status?: SortOrder
    store?: SortOrder
    verbosity?: SortOrder
    _count?: FolioProductCountOrderByAggregateInput
    _avg?: FolioProductAvgOrderByAggregateInput
    _max?: FolioProductMaxOrderByAggregateInput
    _min?: FolioProductMinOrderByAggregateInput
    _sum?: FolioProductSumOrderByAggregateInput
  }

  export type FolioProductScalarWhereWithAggregatesInput = {
    AND?: FolioProductScalarWhereWithAggregatesInput | FolioProductScalarWhereWithAggregatesInput[]
    OR?: FolioProductScalarWhereWithAggregatesInput[]
    NOT?: FolioProductScalarWhereWithAggregatesInput | FolioProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FolioProduct"> | number
    type?: StringWithAggregatesFilter<"FolioProduct"> | string
    book_id?: IntWithAggregatesFilter<"FolioProduct"> | number
    sku?: StringWithAggregatesFilter<"FolioProduct"> | string
    title?: StringWithAggregatesFilter<"FolioProduct"> | string
    author?: JsonWithAggregatesFilter<"FolioProduct">
    illustrator?: JsonWithAggregatesFilter<"FolioProduct">
    introduced_by?: JsonWithAggregatesFilter<"FolioProduct">
    afterword_by?: JsonWithAggregatesFilter<"FolioProduct">
    pages?: StringWithAggregatesFilter<"FolioProduct"> | string
    short_description?: StringWithAggregatesFilter<"FolioProduct"> | string
    editor_note_description?: StringWithAggregatesFilter<"FolioProduct"> | string
    collection_text?: StringWithAggregatesFilter<"FolioProduct"> | string
    category?: StringWithAggregatesFilter<"FolioProduct"> | string
    publication_date?: DateTimeNullableWithAggregatesFilter<"FolioProduct"> | Date | string | null
    price?: FloatWithAggregatesFilter<"FolioProduct"> | number
    url?: StringWithAggregatesFilter<"FolioProduct"> | string
    main_image?: StringWithAggregatesFilter<"FolioProduct"> | string
    thumbnail_image?: StringWithAggregatesFilter<"FolioProduct"> | string
    media?: JsonWithAggregatesFilter<"FolioProduct">
    visibility?: JsonWithAggregatesFilter<"FolioProduct">
    stock_status?: IntWithAggregatesFilter<"FolioProduct"> | number
    store?: IntWithAggregatesFilter<"FolioProduct"> | number
    verbosity?: IntWithAggregatesFilter<"FolioProduct"> | number
  }

  export type FolioStockWhereInput = {
    AND?: FolioStockWhereInput | FolioStockWhereInput[]
    OR?: FolioStockWhereInput[]
    NOT?: FolioStockWhereInput | FolioStockWhereInput[]
    id?: IntFilter<"FolioStock"> | number
    type?: StringFilter<"FolioStock"> | string
    book_id?: IntFilter<"FolioStock"> | number
    is_out_temp?: BoolFilter<"FolioStock"> | boolean
    quantity?: IntFilter<"FolioStock"> | number
    product?: XOR<FolioProductScalarRelationFilter, FolioProductWhereInput>
  }

  export type FolioStockOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    is_out_temp?: SortOrder
    quantity?: SortOrder
    product?: FolioProductOrderByWithRelationInput
  }

  export type FolioStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    book_id?: number
    AND?: FolioStockWhereInput | FolioStockWhereInput[]
    OR?: FolioStockWhereInput[]
    NOT?: FolioStockWhereInput | FolioStockWhereInput[]
    type?: StringFilter<"FolioStock"> | string
    is_out_temp?: BoolFilter<"FolioStock"> | boolean
    quantity?: IntFilter<"FolioStock"> | number
    product?: XOR<FolioProductScalarRelationFilter, FolioProductWhereInput>
  }, "id" | "book_id">

  export type FolioStockOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    is_out_temp?: SortOrder
    quantity?: SortOrder
    _count?: FolioStockCountOrderByAggregateInput
    _avg?: FolioStockAvgOrderByAggregateInput
    _max?: FolioStockMaxOrderByAggregateInput
    _min?: FolioStockMinOrderByAggregateInput
    _sum?: FolioStockSumOrderByAggregateInput
  }

  export type FolioStockScalarWhereWithAggregatesInput = {
    AND?: FolioStockScalarWhereWithAggregatesInput | FolioStockScalarWhereWithAggregatesInput[]
    OR?: FolioStockScalarWhereWithAggregatesInput[]
    NOT?: FolioStockScalarWhereWithAggregatesInput | FolioStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FolioStock"> | number
    type?: StringWithAggregatesFilter<"FolioStock"> | string
    book_id?: IntWithAggregatesFilter<"FolioStock"> | number
    is_out_temp?: BoolWithAggregatesFilter<"FolioStock"> | boolean
    quantity?: IntWithAggregatesFilter<"FolioStock"> | number
  }

  export type FolioProductCreateInput = {
    type: string
    book_id: number
    sku: string
    title: string
    author: JsonNullValueInput | InputJsonValue
    illustrator: JsonNullValueInput | InputJsonValue
    introduced_by: JsonNullValueInput | InputJsonValue
    afterword_by: JsonNullValueInput | InputJsonValue
    pages: string
    short_description: string
    editor_note_description: string
    collection_text: string
    category: string
    publication_date?: Date | string | null
    price: number
    url: string
    main_image: string
    thumbnail_image: string
    media: JsonNullValueInput | InputJsonValue
    visibility: JsonNullValueInput | InputJsonValue
    stock_status: number
    store: number
    verbosity: number
    stock?: FolioStockCreateNestedOneWithoutProductInput
  }

  export type FolioProductUncheckedCreateInput = {
    id?: number
    type: string
    book_id: number
    sku: string
    title: string
    author: JsonNullValueInput | InputJsonValue
    illustrator: JsonNullValueInput | InputJsonValue
    introduced_by: JsonNullValueInput | InputJsonValue
    afterword_by: JsonNullValueInput | InputJsonValue
    pages: string
    short_description: string
    editor_note_description: string
    collection_text: string
    category: string
    publication_date?: Date | string | null
    price: number
    url: string
    main_image: string
    thumbnail_image: string
    media: JsonNullValueInput | InputJsonValue
    visibility: JsonNullValueInput | InputJsonValue
    stock_status: number
    store: number
    verbosity: number
    stock?: FolioStockUncheckedCreateNestedOneWithoutProductInput
  }

  export type FolioProductUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: JsonNullValueInput | InputJsonValue
    illustrator?: JsonNullValueInput | InputJsonValue
    introduced_by?: JsonNullValueInput | InputJsonValue
    afterword_by?: JsonNullValueInput | InputJsonValue
    pages?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    editor_note_description?: StringFieldUpdateOperationsInput | string
    collection_text?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
    thumbnail_image?: StringFieldUpdateOperationsInput | string
    media?: JsonNullValueInput | InputJsonValue
    visibility?: JsonNullValueInput | InputJsonValue
    stock_status?: IntFieldUpdateOperationsInput | number
    store?: IntFieldUpdateOperationsInput | number
    verbosity?: IntFieldUpdateOperationsInput | number
    stock?: FolioStockUpdateOneWithoutProductNestedInput
  }

  export type FolioProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: JsonNullValueInput | InputJsonValue
    illustrator?: JsonNullValueInput | InputJsonValue
    introduced_by?: JsonNullValueInput | InputJsonValue
    afterword_by?: JsonNullValueInput | InputJsonValue
    pages?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    editor_note_description?: StringFieldUpdateOperationsInput | string
    collection_text?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
    thumbnail_image?: StringFieldUpdateOperationsInput | string
    media?: JsonNullValueInput | InputJsonValue
    visibility?: JsonNullValueInput | InputJsonValue
    stock_status?: IntFieldUpdateOperationsInput | number
    store?: IntFieldUpdateOperationsInput | number
    verbosity?: IntFieldUpdateOperationsInput | number
    stock?: FolioStockUncheckedUpdateOneWithoutProductNestedInput
  }

  export type FolioProductCreateManyInput = {
    id?: number
    type: string
    book_id: number
    sku: string
    title: string
    author: JsonNullValueInput | InputJsonValue
    illustrator: JsonNullValueInput | InputJsonValue
    introduced_by: JsonNullValueInput | InputJsonValue
    afterword_by: JsonNullValueInput | InputJsonValue
    pages: string
    short_description: string
    editor_note_description: string
    collection_text: string
    category: string
    publication_date?: Date | string | null
    price: number
    url: string
    main_image: string
    thumbnail_image: string
    media: JsonNullValueInput | InputJsonValue
    visibility: JsonNullValueInput | InputJsonValue
    stock_status: number
    store: number
    verbosity: number
  }

  export type FolioProductUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: JsonNullValueInput | InputJsonValue
    illustrator?: JsonNullValueInput | InputJsonValue
    introduced_by?: JsonNullValueInput | InputJsonValue
    afterword_by?: JsonNullValueInput | InputJsonValue
    pages?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    editor_note_description?: StringFieldUpdateOperationsInput | string
    collection_text?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
    thumbnail_image?: StringFieldUpdateOperationsInput | string
    media?: JsonNullValueInput | InputJsonValue
    visibility?: JsonNullValueInput | InputJsonValue
    stock_status?: IntFieldUpdateOperationsInput | number
    store?: IntFieldUpdateOperationsInput | number
    verbosity?: IntFieldUpdateOperationsInput | number
  }

  export type FolioProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: JsonNullValueInput | InputJsonValue
    illustrator?: JsonNullValueInput | InputJsonValue
    introduced_by?: JsonNullValueInput | InputJsonValue
    afterword_by?: JsonNullValueInput | InputJsonValue
    pages?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    editor_note_description?: StringFieldUpdateOperationsInput | string
    collection_text?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
    thumbnail_image?: StringFieldUpdateOperationsInput | string
    media?: JsonNullValueInput | InputJsonValue
    visibility?: JsonNullValueInput | InputJsonValue
    stock_status?: IntFieldUpdateOperationsInput | number
    store?: IntFieldUpdateOperationsInput | number
    verbosity?: IntFieldUpdateOperationsInput | number
  }

  export type FolioStockCreateInput = {
    type: string
    is_out_temp: boolean
    quantity: number
    product: FolioProductCreateNestedOneWithoutStockInput
  }

  export type FolioStockUncheckedCreateInput = {
    id?: number
    type: string
    book_id: number
    is_out_temp: boolean
    quantity: number
  }

  export type FolioStockUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    is_out_temp?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    product?: FolioProductUpdateOneRequiredWithoutStockNestedInput
  }

  export type FolioStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    is_out_temp?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FolioStockCreateManyInput = {
    id?: number
    type: string
    book_id: number
    is_out_temp: boolean
    quantity: number
  }

  export type FolioStockUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    is_out_temp?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FolioStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    is_out_temp?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FolioStockNullableScalarRelationFilter = {
    is?: FolioStockWhereInput | null
    isNot?: FolioStockWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FolioProductCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    author?: SortOrder
    illustrator?: SortOrder
    introduced_by?: SortOrder
    afterword_by?: SortOrder
    pages?: SortOrder
    short_description?: SortOrder
    editor_note_description?: SortOrder
    collection_text?: SortOrder
    category?: SortOrder
    publication_date?: SortOrder
    price?: SortOrder
    url?: SortOrder
    main_image?: SortOrder
    thumbnail_image?: SortOrder
    media?: SortOrder
    visibility?: SortOrder
    stock_status?: SortOrder
    store?: SortOrder
    verbosity?: SortOrder
  }

  export type FolioProductAvgOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    price?: SortOrder
    stock_status?: SortOrder
    store?: SortOrder
    verbosity?: SortOrder
  }

  export type FolioProductMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    pages?: SortOrder
    short_description?: SortOrder
    editor_note_description?: SortOrder
    collection_text?: SortOrder
    category?: SortOrder
    publication_date?: SortOrder
    price?: SortOrder
    url?: SortOrder
    main_image?: SortOrder
    thumbnail_image?: SortOrder
    stock_status?: SortOrder
    store?: SortOrder
    verbosity?: SortOrder
  }

  export type FolioProductMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    pages?: SortOrder
    short_description?: SortOrder
    editor_note_description?: SortOrder
    collection_text?: SortOrder
    category?: SortOrder
    publication_date?: SortOrder
    price?: SortOrder
    url?: SortOrder
    main_image?: SortOrder
    thumbnail_image?: SortOrder
    stock_status?: SortOrder
    store?: SortOrder
    verbosity?: SortOrder
  }

  export type FolioProductSumOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    price?: SortOrder
    stock_status?: SortOrder
    store?: SortOrder
    verbosity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FolioProductScalarRelationFilter = {
    is?: FolioProductWhereInput
    isNot?: FolioProductWhereInput
  }

  export type FolioStockCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    is_out_temp?: SortOrder
    quantity?: SortOrder
  }

  export type FolioStockAvgOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    quantity?: SortOrder
  }

  export type FolioStockMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    is_out_temp?: SortOrder
    quantity?: SortOrder
  }

  export type FolioStockMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    book_id?: SortOrder
    is_out_temp?: SortOrder
    quantity?: SortOrder
  }

  export type FolioStockSumOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    quantity?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FolioStockCreateNestedOneWithoutProductInput = {
    create?: XOR<FolioStockCreateWithoutProductInput, FolioStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: FolioStockCreateOrConnectWithoutProductInput
    connect?: FolioStockWhereUniqueInput
  }

  export type FolioStockUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<FolioStockCreateWithoutProductInput, FolioStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: FolioStockCreateOrConnectWithoutProductInput
    connect?: FolioStockWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FolioStockUpdateOneWithoutProductNestedInput = {
    create?: XOR<FolioStockCreateWithoutProductInput, FolioStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: FolioStockCreateOrConnectWithoutProductInput
    upsert?: FolioStockUpsertWithoutProductInput
    disconnect?: FolioStockWhereInput | boolean
    delete?: FolioStockWhereInput | boolean
    connect?: FolioStockWhereUniqueInput
    update?: XOR<XOR<FolioStockUpdateToOneWithWhereWithoutProductInput, FolioStockUpdateWithoutProductInput>, FolioStockUncheckedUpdateWithoutProductInput>
  }

  export type FolioStockUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<FolioStockCreateWithoutProductInput, FolioStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: FolioStockCreateOrConnectWithoutProductInput
    upsert?: FolioStockUpsertWithoutProductInput
    disconnect?: FolioStockWhereInput | boolean
    delete?: FolioStockWhereInput | boolean
    connect?: FolioStockWhereUniqueInput
    update?: XOR<XOR<FolioStockUpdateToOneWithWhereWithoutProductInput, FolioStockUpdateWithoutProductInput>, FolioStockUncheckedUpdateWithoutProductInput>
  }

  export type FolioProductCreateNestedOneWithoutStockInput = {
    create?: XOR<FolioProductCreateWithoutStockInput, FolioProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: FolioProductCreateOrConnectWithoutStockInput
    connect?: FolioProductWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FolioProductUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<FolioProductCreateWithoutStockInput, FolioProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: FolioProductCreateOrConnectWithoutStockInput
    upsert?: FolioProductUpsertWithoutStockInput
    connect?: FolioProductWhereUniqueInput
    update?: XOR<XOR<FolioProductUpdateToOneWithWhereWithoutStockInput, FolioProductUpdateWithoutStockInput>, FolioProductUncheckedUpdateWithoutStockInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FolioStockCreateWithoutProductInput = {
    type: string
    is_out_temp: boolean
    quantity: number
  }

  export type FolioStockUncheckedCreateWithoutProductInput = {
    id?: number
    type: string
    is_out_temp: boolean
    quantity: number
  }

  export type FolioStockCreateOrConnectWithoutProductInput = {
    where: FolioStockWhereUniqueInput
    create: XOR<FolioStockCreateWithoutProductInput, FolioStockUncheckedCreateWithoutProductInput>
  }

  export type FolioStockUpsertWithoutProductInput = {
    update: XOR<FolioStockUpdateWithoutProductInput, FolioStockUncheckedUpdateWithoutProductInput>
    create: XOR<FolioStockCreateWithoutProductInput, FolioStockUncheckedCreateWithoutProductInput>
    where?: FolioStockWhereInput
  }

  export type FolioStockUpdateToOneWithWhereWithoutProductInput = {
    where?: FolioStockWhereInput
    data: XOR<FolioStockUpdateWithoutProductInput, FolioStockUncheckedUpdateWithoutProductInput>
  }

  export type FolioStockUpdateWithoutProductInput = {
    type?: StringFieldUpdateOperationsInput | string
    is_out_temp?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FolioStockUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_out_temp?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FolioProductCreateWithoutStockInput = {
    type: string
    book_id: number
    sku: string
    title: string
    author: JsonNullValueInput | InputJsonValue
    illustrator: JsonNullValueInput | InputJsonValue
    introduced_by: JsonNullValueInput | InputJsonValue
    afterword_by: JsonNullValueInput | InputJsonValue
    pages: string
    short_description: string
    editor_note_description: string
    collection_text: string
    category: string
    publication_date?: Date | string | null
    price: number
    url: string
    main_image: string
    thumbnail_image: string
    media: JsonNullValueInput | InputJsonValue
    visibility: JsonNullValueInput | InputJsonValue
    stock_status: number
    store: number
    verbosity: number
  }

  export type FolioProductUncheckedCreateWithoutStockInput = {
    id?: number
    type: string
    book_id: number
    sku: string
    title: string
    author: JsonNullValueInput | InputJsonValue
    illustrator: JsonNullValueInput | InputJsonValue
    introduced_by: JsonNullValueInput | InputJsonValue
    afterword_by: JsonNullValueInput | InputJsonValue
    pages: string
    short_description: string
    editor_note_description: string
    collection_text: string
    category: string
    publication_date?: Date | string | null
    price: number
    url: string
    main_image: string
    thumbnail_image: string
    media: JsonNullValueInput | InputJsonValue
    visibility: JsonNullValueInput | InputJsonValue
    stock_status: number
    store: number
    verbosity: number
  }

  export type FolioProductCreateOrConnectWithoutStockInput = {
    where: FolioProductWhereUniqueInput
    create: XOR<FolioProductCreateWithoutStockInput, FolioProductUncheckedCreateWithoutStockInput>
  }

  export type FolioProductUpsertWithoutStockInput = {
    update: XOR<FolioProductUpdateWithoutStockInput, FolioProductUncheckedUpdateWithoutStockInput>
    create: XOR<FolioProductCreateWithoutStockInput, FolioProductUncheckedCreateWithoutStockInput>
    where?: FolioProductWhereInput
  }

  export type FolioProductUpdateToOneWithWhereWithoutStockInput = {
    where?: FolioProductWhereInput
    data: XOR<FolioProductUpdateWithoutStockInput, FolioProductUncheckedUpdateWithoutStockInput>
  }

  export type FolioProductUpdateWithoutStockInput = {
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: JsonNullValueInput | InputJsonValue
    illustrator?: JsonNullValueInput | InputJsonValue
    introduced_by?: JsonNullValueInput | InputJsonValue
    afterword_by?: JsonNullValueInput | InputJsonValue
    pages?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    editor_note_description?: StringFieldUpdateOperationsInput | string
    collection_text?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
    thumbnail_image?: StringFieldUpdateOperationsInput | string
    media?: JsonNullValueInput | InputJsonValue
    visibility?: JsonNullValueInput | InputJsonValue
    stock_status?: IntFieldUpdateOperationsInput | number
    store?: IntFieldUpdateOperationsInput | number
    verbosity?: IntFieldUpdateOperationsInput | number
  }

  export type FolioProductUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: JsonNullValueInput | InputJsonValue
    illustrator?: JsonNullValueInput | InputJsonValue
    introduced_by?: JsonNullValueInput | InputJsonValue
    afterword_by?: JsonNullValueInput | InputJsonValue
    pages?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    editor_note_description?: StringFieldUpdateOperationsInput | string
    collection_text?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
    thumbnail_image?: StringFieldUpdateOperationsInput | string
    media?: JsonNullValueInput | InputJsonValue
    visibility?: JsonNullValueInput | InputJsonValue
    stock_status?: IntFieldUpdateOperationsInput | number
    store?: IntFieldUpdateOperationsInput | number
    verbosity?: IntFieldUpdateOperationsInput | number
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