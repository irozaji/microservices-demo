// product-service/src/product/product.controller.ts
import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  FindOneRequest,
  FindOneResponse,
  DecreaseQuantityRequest,
  DecreaseQuantityResponse,
  DeleteRequest,
  DeleteResponse,
  CreateRequest,
  CreateResponse,
  FindAllRequest,
  FindAllResponse,
  UpdateRequest,
  UpdateResponse,
  FindByIdsRequest,
  FindByIdsResponse,
} from '../proto/product.pb';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // gRPC Methods
  @GrpcMethod('ProductService', 'FindOne')
  async findOneGrpc(data: FindOneRequest): Promise<FindOneResponse> {
    const product = await this.productService.findOne(data.id);
    return { product };
  }

  @GrpcMethod('ProductService', 'DecreaseQuantity')
  async decreaseQuantity(
    data: DecreaseQuantityRequest,
  ): Promise<DecreaseQuantityResponse> {
    const success = await this.productService.decreaseQuantity(
      data.id,
      data.quantity,
    );
    return { success };
  }

  @GrpcMethod('ProductService', 'FindAll')
  async findAllGrpc(data: FindAllRequest): Promise<FindAllResponse> {
    const products = await this.productService.findAll();
    return { products };
  }

  @GrpcMethod('ProductService', 'Create')
  async createGrpc(data: CreateRequest): Promise<CreateResponse> {
    const product = await this.productService.create(data);
    return { product };
  }

  @GrpcMethod('ProductService', 'Update')
  async updateGrpc(data: UpdateRequest): Promise<UpdateResponse> {
    const product = await this.productService.update(data.id, data);
    return { product };
  }

  @GrpcMethod('ProductService', 'Delete')
  async removeGrpc(data: DeleteRequest): Promise<DeleteResponse> {
    await this.productService.remove(data.id);
    return { success: true };
  }

  @GrpcMethod('ProductService', 'FindByIds')
  async findByIds(data: FindByIdsRequest): Promise<FindByIdsResponse> {
    const products = await this.productService.findByIds(data.ids);
    return { products };
  }
}