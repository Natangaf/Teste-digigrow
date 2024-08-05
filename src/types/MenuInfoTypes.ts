export interface IImage {
  id: number;
  image: string;
}

export interface IModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

export interface IModifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: IModifierItem[];
}

export interface IItem {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  modifiers?: IModifier[];
  images?: IImage[];
  available: boolean;
}

export interface ISection {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible?: number;
  images: IImage[];
  items: IItem[];
}

export interface IDatabase {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: ISection[];
}

export interface IItemCart extends IItem {
  quantity: number;
  selectedModifiers: selectedModifiers[];
}

export interface selectedModifiers {
  modifierId: number;
  items: IModifierItem[];
}
[];
