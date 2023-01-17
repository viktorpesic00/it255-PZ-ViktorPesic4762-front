export interface Prodaja {
  kupac_id: number;
  prodavac_id: number | null;
  opis: string;
  cena: number;
}
