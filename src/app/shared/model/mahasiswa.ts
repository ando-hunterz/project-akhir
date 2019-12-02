export interface Mahasiswa {
  info: string;
  result: {
    count: number,
    mahasiswa: []
  };
}

export interface MahasiswaDetail {
  info: string;
  results: {
    alamat: string,
    angkatan: string,
    created_at: string,
    email: string,
    foto: string,
    id: number,
    nama_lengkap: string,
    nim: string,
    prodi: string,
    tanggal_lahir: string,
    telepon: string,
    updated_at: any
  };
}
