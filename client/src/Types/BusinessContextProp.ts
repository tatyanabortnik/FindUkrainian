import { BusinessType } from "./BusinessType";
import { CategoryType } from "./CategoryType";

export interface BusinessContextProp {
  businesses: BusinessType[];
  setBusinesses: React.Dispatch<React.SetStateAction<BusinessType[]>>;
  filteredBusinesses: BusinessType[];
  setFilteredBusinesses: React.Dispatch<React.SetStateAction<BusinessType[]>>;
  businessId: string | undefined;
  setBusinessId: React.Dispatch<React.SetStateAction<string | undefined>>;
  categories: CategoryType[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  fetchBusinesses?: () => Promise<void>;
  fetchCategories?: () => Promise<void>;
}
