import { OrderItem } from './order-item.model';

export interface Order {
  id?: number;
  products?: OrderItem[];
  status?: string;
  date?: Date;
  value?: number;
}
