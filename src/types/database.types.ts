export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          address: string | null;
          city: string | null;
          country: string | null;
          created_at: string;
          email: string | null;
          id: number;
          name: string | null;
          phone: string | null;
          surname: string | null;
          VAT: string | null;
          zipcode: string | null;
        };
        Insert: {
          address?: string | null;
          city?: string | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          phone?: string | null;
          surname?: string | null;
          VAT?: string | null;
          zipcode?: string | null;
        };
        Update: {
          address?: string | null;
          city?: string | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          phone?: string | null;
          surname?: string | null;
          VAT?: string | null;
          zipcode?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
