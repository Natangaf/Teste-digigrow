import { PrincipalImage } from "../../assets/img";
import {
  BoxShadowCart,
  BoxShadowStoreItems,
  Cards,
  Containerimage,
  FigurePrincipal,
  ImageCards,
  MainDashboard,
  NavCards,
  PrincipalImg,
} from "./_home";
import ContainerComponent from "./../../components/ContainerComponent/ContainerComponent";
import Search from "../../components/Search/Search";

import StoreItemsList from "../../components/StoreItems/StoreItems";
import Cart from "../../components/Cart/Cart";
import { useStoreInfo } from "../../context/StoreInfo";
import { ISection } from "../../types/MenuInfoTypes";

const Home = () => {
  const { storeInfo, storeMenu } = useStoreInfo();

  return (
    <>
      <FigurePrincipal data-com="FigurePrincipal">
        <PrincipalImg
          data-com="PrincipalImg"
          src={storeInfo.webSettings.bannerImage}
          alt=""
        />
      </FigurePrincipal>
      <ContainerComponent gap={0}>
        <Search />
        <MainDashboard data-com="MainDashboard">
          <BoxShadowStoreItems>
            <NavCards>
              {storeMenu.sections.map(({ id, images, name }) => {
                return (
                  <Cards key={id}>
                    <Containerimage>
                      <ImageCards src={images[0].image} alt={name} />
                    </Containerimage>
                    <p>{name}</p>
                  </Cards>
                );
              })}
            </NavCards>
            {storeMenu.sections.map((section) => (
              <StoreItemsList {...section} key={section.id} />
            ))}
          </BoxShadowStoreItems>
          <BoxShadowCart>
            <Cart />
          </BoxShadowCart>
        </MainDashboard>
      </ContainerComponent>
    </>
  );
};

export default Home;
