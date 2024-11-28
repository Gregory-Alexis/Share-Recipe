import { create } from 'zustand';
import axios from 'axios';
import { RecipeStore } from '../models/RecipeStore';

const API_URL = 'http://localhost:5000/api';

axios.defaults.withCredentials = true;

export const useRecipeStore = create<RecipeStore>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signUp: async (firstname: string, lastname: string, email: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        firstname,
        lastname,
        email,
        password,
      });

      set({ user: response.data.user, isAuthenticated: true, isLoading: false, error: null });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Error signing up';
      set({ error: errorMessage, isLoading: false });
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    set({
      isAuthenticated: true,
      isLoading: true,
      error: null,
      user: null,
    });

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      set({
        isAuthenticated: true,
        user: response.data.user,
        error: null,
        isLoading: false,
      });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Error logging in';
      set({ error: errorMessage, isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ isAuthenticated: false, isLoading: true, error: null, user: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({ user: null, isAuthenticated: false, error: null, isLoading: false });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Error logging out';
      set({ error: errorMessage, isLoading: false });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
    } catch (error: any) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },
}));
