export type Mood = "조용한" | "활기찬" | "감성적" | "아늑한" | "트렌디";

export interface Cafe {
  id: string;
  name: string;
  neighborhood: string;
  mood: Mood;
  signature_menu: string;
  description: string;
  has_wifi: boolean;
  has_outlets: boolean;
  pet_friendly: boolean;
  instagram_handle?: string;  // ? = optional (없을 수도)
}