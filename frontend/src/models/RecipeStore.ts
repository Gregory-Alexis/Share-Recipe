export type RecipeStore = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isCheckingAuth: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
};

export type User = {
  id: string;
  firstrname: string;
  lastname: string;
  email: string;
  password: string;
};
