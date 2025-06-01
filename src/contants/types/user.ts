export type LoginRequestType = {
  email: string;
  password: string;
};

export interface LoginResponseType {
  message: string;
  statusCode: number;
  data: {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
  };
}

export type SignUpRequestType = {
  email: string;
  password: string;
  fistName: string;
  lastName: string;
  confirmPassword?: string;
};

export type SignUpResponseType = {
  message: string;
};