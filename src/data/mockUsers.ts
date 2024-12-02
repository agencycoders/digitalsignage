export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  company: string;
  role: 'Super Admin' | 'Admin' | 'User';
  permissions: string[];
  plan: string;
  createdAt: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Super Administrador',
    email: 'admin@digitalsignage.com',
    password: 'Admin@2024',
    company: 'Digital Signage Platform',
    role: 'Super Admin',
    permissions: [
      'manage_payments',
      'manage_transactions',
      'manage_products',
      'manage_customers',
      'manage_subscriptions',
      'view_analytics',
      'manage_settings',
      'manage_users',
      'manage_roles',
      'manage_billing'
    ],
    plan: 'enterprise',
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    name: 'Usuário Demo',
    email: 'demo@exemplo.com',
    password: 'Demo@123',
    company: 'Empresa Demo LTDA',
    role: 'Admin',
    permissions: ['manage_users', 'view_analytics'],
    plan: 'pro',
    createdAt: '2024-02-01'
  }
];
