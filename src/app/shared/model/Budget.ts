import { Customer } from "./Customer";
import { Supplier } from "./Supplier";
import { Product } from "./Product";
import { Status } from "./Status";

export interface Budget{
  id: number;
  quantity: number;
  finalPrice: number;
  customer: Customer;
  supplier: Supplier;
  product: Product;
  status: Status;
}
