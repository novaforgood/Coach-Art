export interface Admin {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  approved: string;
}

interface UserData {
  city: string;
  date: string;
  email: string;
  id: string;
  name: string;
  state: string;
  streetAddress: string;
  zipCode: string;
}
export interface Reimbursement {
  userData: UserData;
  completed: boolean;
}

export type FilteredData = Record<string, Admin | Reimbursement>;
