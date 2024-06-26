export interface Database {
  public: {
    Tables: {
      Vaga: {
        Row: {
          id: number;
          local: string; // nome do estacionamento
          tipo: 'Especial' | 'Normal';
          status: boolean; // True = Disponível | False = Ocupada
          plano: number;
        };
        Insert: {
          local: string;
          tipo: 'Especial' | 'Normal';
          status: boolean;
          plano: number;
        };
        Update: {
          local?: string;
          tipo?: 'Especial' | 'Normal';
          status?: boolean;
          plano?: number;
        };
      };
      Perfil: {
        Row: {
          id: number;
          email: string;
          password: string;
        };
        Insert: {
          email: string;
          password: string;
        };
        Update: {
          email?: string;
          password?: string;
        };
      };
      Estacionamento: {
        Row: {
          id: number;
          nome: string;
        };
        Insert: {
          nome: string;
        };
        Update: {
          nome?: string;
        };
      };
      Reserva: {
        Row: {
          id: number;
          idUser: number;
          idVaga: number;
          horaInicial: string; // 'HH:mm'
          horaFim: string;     // 'HH:mm'
          local: string;
        };
        Insert: {
          idUser: number;
          idVaga: number;
          horaInicial: string; // 'HH:mm'
          horaFim: string;     // 'HH:mm'
          local: string;
        };
        Update: {
          idUser?: number;
          idVaga?: number;
          horaInicial?: string; // 'HH:mm'
          horaFim?: string;     // 'HH:mm'
          local?: string;
        };
        Delete: {
          id: number;
        };
      };
    };
    Enums: {
      tipoVaga: ['Especial', 'Normal'];
    };
  };
}
