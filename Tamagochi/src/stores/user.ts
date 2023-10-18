import {create} from 'zustand';

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
};

const user = create<AuthState>(set => ({
  token: null,
  setToken: token => set(() => ({token})),
}));

export default user;