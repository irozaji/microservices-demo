import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

describe('ProductService', () => {
  let service: ProductService;
  let repository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new product', async () => {
    const product = {
      name: 'Test Product',
      description: 'Test Description',
      price: 100,
      availableQuantity: 10,
    };
    jest.spyOn(repository, 'create').mockReturnValue(product as Product);
    jest.spyOn(repository, 'save').mockResolvedValue(product as Product);

    expect(await service.create(product)).toEqual(product);
  });

  it('should retrieve all products', async () => {
    const products = [
      {
        id: 1,
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        availableQuantity: 10,
      },
    ];
    jest.spyOn(repository, 'find').mockResolvedValue(products as Product[]);

    expect(await service.findAll()).toEqual(products);
  });

  it('should retrieve a single product by ID', async () => {
    const product = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price: 100,
      availableQuantity: 10,
    };
    jest.spyOn(repository, 'findOne').mockResolvedValue(product as Product);

    expect(await service.findOne(1)).toEqual(product);
  });

  it('should update a product', async () => {
    const product = {
      id: 1,
      name: 'Updated Product',
      description: 'Updated Description',
      price: 150,
      availableQuantity: 5,
    };
    jest.spyOn(repository, 'update').mockResolvedValue(undefined);
    jest.spyOn(service, 'findOne').mockResolvedValue(product as Product);

    expect(await service.update(1, product)).toEqual(product);
  });

  it('should delete a product', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

    await expect(service.remove(1)).resolves.toBeUndefined();
  });

  it('should decrease product quantity', async () => {
    const product = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price: 100,
      availableQuantity: 10,
    };
    jest.spyOn(service, 'findOne').mockResolvedValue(product as Product);
    jest
      .spyOn(repository, 'save')
      .mockResolvedValue({ ...product, availableQuantity: 5 } as Product);

    expect(await service.decreaseQuantity(1, 5)).toBe(true);
    expect(await service.decreaseQuantity(1, 15)).toBe(false);
  });
});
