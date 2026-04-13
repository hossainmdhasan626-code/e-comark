import FooterComponent from "@/app/components/ui(reusable)/Footer";
import ProfileNavbar from "@/app/components/shared/header/ProfileNavbar";
import Header from "@/app/components/shared/header/Header";
import Breadcrumbs from "@/app/components/ui(reusable)/Breadcrumbs";

const layout = ({ children }) => {
  return (
    <>
      {/* heaerRendarKoreWithProfileOrSignInOrSignOut */}
      <Header />
      {/* navbarRendarKoreWithABackBtnJaHomeENiyeJay */}
      <ProfileNavbar />
      {/* addToCartPageErBreadcrumbsErJonno */}
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Add To Cart", link: null },
        ]}
      />
      {children}
      <FooterComponent />
    </>
  );
};

export default layout;
