export type TUser = {
    id:string;
    password: string;
    needPasswordChange: boolean;
    status:'in-progress' | 'blocked';
    role: 'admin'|'faculty'|'student';
    isDeleted: boolean
}

