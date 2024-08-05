import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { StoreInfoService } from "../services/StoreInfoService";
import { IDatabase } from "../types/MenuInfoTypes";
import { StoreMenuService } from "../services/StoreMenuService";
import { Restaurant } from "../types/StoreInfoTypes";

interface ChildrenProps {
  children: ReactNode;
}

interface IuseStoreInfoProvider {
  storeInfo: Restaurant;
  storeMenu: IDatabase;
}

const StoreInfoContext = createContext({} as IuseStoreInfoProvider);

const StoreInfoProvider = ({ children }: ChildrenProps) => {
  const [storeInfo, setStoreInfo] = useState<Restaurant>({} as Restaurant);
  const [storeMenu, setStoreMenu] = useState<IDatabase>({} as IDatabase);
  const [loading, setLoading] = useState(true);

  const getInfoStore = async () => {
    try {
      const restaurant = await StoreInfoService();
      const menu = await StoreMenuService();

      setStoreMenu(menu);
      setStoreInfo(restaurant);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar as informações da loja:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfoStore();
  }, []);

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (!storeInfo || !storeMenu) {
    throw new Error("Erro ao carregar as informações da loja");
  }

  return (
    <StoreInfoContext.Provider value={{ storeInfo, storeMenu }}>
      {children}
    </StoreInfoContext.Provider>
  );
};

export default StoreInfoProvider;

export const useStoreInfo = () => {
  const context = useContext(StoreInfoContext);

  if (!context) {
    throw new Error(
      "useStoreInfo deve ser usado dentro de um StoreInfoProvider"
    );
  }

  return context;
};
