export class LoginDetails {

  constructor(
    public user_name: string, public password: string, public remember_me: boolean
  ) {}
}

export interface authTkn {
  info: string;
  token: string;
}

export interface xToken {
  token: string;
}
