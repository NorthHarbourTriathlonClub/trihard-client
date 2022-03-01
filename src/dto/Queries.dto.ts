// INCOME_BY_BLAHBLAH
export interface QueryResponse {
  data: [];
}

interface SystemFields {
  id?: number;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  createdBy?: User;
  updatedBy?: User;
  deletedBy?: User;
}

export interface Session extends SystemFields {
  sessionDate?: Date;
  attendees?: User[];
  sessionType?: SessionType;
}

export interface Payment extends SystemFields {
  paidBy?: User;
  amount?: number;
  verified?: boolean;
  verifiedBy?: User;
  verifiedAt?: Date;
  sessions?: Session[];
}

export interface User extends SystemFields {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: Role;
  sessions?: Session[];
  payments?: Payment[];
}

export type SessionType = 'Swim' | 'Bike' | 'Run' | 'Swim & Bike & Run';

export type Role = 'member' | 'coach' | 'admin';
