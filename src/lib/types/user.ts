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