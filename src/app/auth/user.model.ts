export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  claims?: { admin: boolean };
}
