// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: order.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "order";

export interface PlaceOrderRequest {
  products: Product[];
  customerName: string;
  customerAddress: string;
}

export interface PlaceOrderResponse {
  order: Order | undefined;
}

export interface GetOrderRequest {
  orderId: number;
}

export interface GetOrderResponse {
  order: Order | undefined;
}

export interface GetOrdersRequest {
  customerName: string;
}

export interface GetOrdersResponse {
  orders: Order[];
}

export interface Order {
  id: number;
  products: Product[];
  total: number;
}

export interface Product {
  productId: number;
  quantity: number;
}

function createBasePlaceOrderRequest(): PlaceOrderRequest {
  return { products: [], customerName: "", customerAddress: "" };
}

export const PlaceOrderRequest: MessageFns<PlaceOrderRequest> = {
  encode(message: PlaceOrderRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.customerName !== "") {
      writer.uint32(18).string(message.customerName);
    }
    if (message.customerAddress !== "") {
      writer.uint32(26).string(message.customerAddress);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlaceOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaceOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.customerName = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.customerAddress = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaceOrderRequest {
    return {
      products: globalThis.Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      customerName: isSet(object.customerName) ? globalThis.String(object.customerName) : "",
      customerAddress: isSet(object.customerAddress) ? globalThis.String(object.customerAddress) : "",
    };
  },

  toJSON(message: PlaceOrderRequest): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => Product.toJSON(e));
    }
    if (message.customerName !== "") {
      obj.customerName = message.customerName;
    }
    if (message.customerAddress !== "") {
      obj.customerAddress = message.customerAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaceOrderRequest>, I>>(base?: I): PlaceOrderRequest {
    return PlaceOrderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaceOrderRequest>, I>>(object: I): PlaceOrderRequest {
    const message = createBasePlaceOrderRequest();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.customerName = object.customerName ?? "";
    message.customerAddress = object.customerAddress ?? "";
    return message;
  },
};

function createBasePlaceOrderResponse(): PlaceOrderResponse {
  return { order: undefined };
}

export const PlaceOrderResponse: MessageFns<PlaceOrderResponse> = {
  encode(message: PlaceOrderResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlaceOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaceOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaceOrderResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: PlaceOrderResponse): unknown {
    const obj: any = {};
    if (message.order !== undefined) {
      obj.order = Order.toJSON(message.order);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaceOrderResponse>, I>>(base?: I): PlaceOrderResponse {
    return PlaceOrderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaceOrderResponse>, I>>(object: I): PlaceOrderResponse {
    const message = createBasePlaceOrderResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseGetOrderRequest(): GetOrderRequest {
  return { orderId: 0 };
}

export const GetOrderRequest: MessageFns<GetOrderRequest> = {
  encode(message: GetOrderRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.orderId !== 0) {
      writer.uint32(8).int32(message.orderId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.orderId = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrderRequest {
    return { orderId: isSet(object.orderId) ? globalThis.Number(object.orderId) : 0 };
  },

  toJSON(message: GetOrderRequest): unknown {
    const obj: any = {};
    if (message.orderId !== 0) {
      obj.orderId = Math.round(message.orderId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrderRequest>, I>>(base?: I): GetOrderRequest {
    return GetOrderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrderRequest>, I>>(object: I): GetOrderRequest {
    const message = createBaseGetOrderRequest();
    message.orderId = object.orderId ?? 0;
    return message;
  },
};

function createBaseGetOrderResponse(): GetOrderResponse {
  return { order: undefined };
}

export const GetOrderResponse: MessageFns<GetOrderResponse> = {
  encode(message: GetOrderResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrderResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: GetOrderResponse): unknown {
    const obj: any = {};
    if (message.order !== undefined) {
      obj.order = Order.toJSON(message.order);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrderResponse>, I>>(base?: I): GetOrderResponse {
    return GetOrderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrderResponse>, I>>(object: I): GetOrderResponse {
    const message = createBaseGetOrderResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseGetOrdersRequest(): GetOrdersRequest {
  return { customerName: "" };
}

export const GetOrdersRequest: MessageFns<GetOrdersRequest> = {
  encode(message: GetOrdersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerName !== "") {
      writer.uint32(10).string(message.customerName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.customerName = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrdersRequest {
    return { customerName: isSet(object.customerName) ? globalThis.String(object.customerName) : "" };
  },

  toJSON(message: GetOrdersRequest): unknown {
    const obj: any = {};
    if (message.customerName !== "") {
      obj.customerName = message.customerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrdersRequest>, I>>(base?: I): GetOrdersRequest {
    return GetOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrdersRequest>, I>>(object: I): GetOrdersRequest {
    const message = createBaseGetOrdersRequest();
    message.customerName = object.customerName ?? "";
    return message;
  },
};

function createBaseGetOrdersResponse(): GetOrdersResponse {
  return { orders: [] };
}

export const GetOrdersResponse: MessageFns<GetOrdersResponse> = {
  encode(message: GetOrdersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrdersResponse {
    return { orders: globalThis.Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [] };
  },

  toJSON(message: GetOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => Order.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrdersResponse>, I>>(base?: I): GetOrdersResponse {
    return GetOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrdersResponse>, I>>(object: I): GetOrdersResponse {
    const message = createBaseGetOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrder(): Order {
  return { id: 0, products: [], total: 0 };
}

export const Order: MessageFns<Order> = {
  encode(message: Order, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.total !== 0) {
      writer.uint32(25).double(message.total);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 25) {
            break;
          }

          message.total = reader.double();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      products: globalThis.Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.products?.length) {
      obj.products = message.products.map((e) => Product.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = message.total;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Order>, I>>(base?: I): Order {
    return Order.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.id = object.id ?? 0;
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseProduct(): Product {
  return { productId: 0, quantity: 0 };
}

export const Product: MessageFns<Product> = {
  encode(message: Product, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.productId !== 0) {
      writer.uint32(8).int32(message.productId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Product {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.productId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      productId: isSet(object.productId) ? globalThis.Number(object.productId) : 0,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    if (message.productId !== 0) {
      obj.productId = Math.round(message.productId);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Product>, I>>(base?: I): Product {
    return Product.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.productId = object.productId ?? 0;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

export interface OrderService {
  PlaceOrder(request: PlaceOrderRequest): Promise<PlaceOrderResponse>;
  GetOrder(request: GetOrderRequest): Promise<GetOrderResponse>;
  GetOrders(request: GetOrdersRequest): Promise<GetOrdersResponse>;
}

export const OrderServiceServiceName = "order.OrderService";
export class OrderServiceClientImpl implements OrderService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || OrderServiceServiceName;
    this.rpc = rpc;
    this.PlaceOrder = this.PlaceOrder.bind(this);
    this.GetOrder = this.GetOrder.bind(this);
    this.GetOrders = this.GetOrders.bind(this);
  }
  PlaceOrder(request: PlaceOrderRequest): Promise<PlaceOrderResponse> {
    const data = PlaceOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlaceOrder", data);
    return promise.then((data) => PlaceOrderResponse.decode(new BinaryReader(data)));
  }

  GetOrder(request: GetOrderRequest): Promise<GetOrderResponse> {
    const data = GetOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOrder", data);
    return promise.then((data) => GetOrderResponse.decode(new BinaryReader(data)));
  }

  GetOrders(request: GetOrdersRequest): Promise<GetOrdersResponse> {
    const data = GetOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOrders", data);
    return promise.then((data) => GetOrdersResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}