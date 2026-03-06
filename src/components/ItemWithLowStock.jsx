import { withLowStock } from '../hoc/WithLowStock';
import Item from './Item';

export const ItemWithLowStock = withLowStock(Item);

