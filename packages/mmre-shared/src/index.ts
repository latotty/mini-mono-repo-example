export interface User {
  name: string;
}

export const createUser = (user: Partial<User>): User => ({ name: 'Example', ...user });
