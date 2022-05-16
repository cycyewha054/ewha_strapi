export interface Paginated<T> {
  items: T[];
  total: number;
}

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  role: Role;
  name: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
