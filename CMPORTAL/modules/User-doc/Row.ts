// Row.ts

export interface IPeople {
  name: string;
  AuthorId: number;
}

export interface Row {
  id: number;
  label: string;
  content: string;
  modified: string;
  AuthorId?: number;
}
