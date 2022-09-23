import { Address } from './Address';
import { CreditCard } from './CreditCard';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  addresses: Address[];
  creditCards: CreditCard[];
}
