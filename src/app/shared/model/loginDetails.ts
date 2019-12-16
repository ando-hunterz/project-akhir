import { EmailValidator } from '@angular/forms';

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

export interface user{
  info: string;
  result: {
    alamat: string;
    email: string;
    foto: string;
    tanggal_lahir: string;
    telepon: string;
    nama_lengkap: string;
<<<<<<< HEAD
=======
    user_name: string;
>>>>>>> 2bb816d9cdee51d699a8a0790470f84fee99ceda
  }
}

export interface uData {
  info: string;
  result: {
    aud: string;
    exp: any;
    iat: any;
    iss: string;
    user: {
      alamat: string;
      created_at: any;
      email: string;
      foto: string;
      id: string;
      nama_lengkap: string;
      tanggal_lahir: string;
      telepon: string;
      updated_at: any;
      user_name: any;
    }
  }
}
