export type Pokemon = {
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
};

export type User = {
  user: any;
  token: string;
}


export type LoginFormState = {
  email: string;
  password: string;
  showPassword: boolean;
}

export type RegisterFormState = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  accountType: 'REFUGEE' | 'HOST'
}