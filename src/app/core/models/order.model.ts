import { OrderItem } from './order-item.model';

export interface Order {
  id?: number;
  items?: OrderItem[];
  status?: string;
  date?: Date;
  value?: number;
}
