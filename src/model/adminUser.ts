export interface Admin {
    username: string;
    password: string;
}
  
export const admin: Admin[] = [{
    username: process.env.ADMIN_USERNAME as string,
    password: process.env.ADMIN_PASSWORD as string,
}];