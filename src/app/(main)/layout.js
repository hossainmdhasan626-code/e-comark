import FooterComponent from "../components/ui(reusable)/Footer";
import Header from "../components/shared/header/Header";
import Navbar from "../components/shared/navbar/Navbar";
import NavbarAndSidbarSmItems from "../../../data/NavbarAndSidbarSmItems";
import SidbarForSm from "../../../data/SidbarForSm";
import SidbarAndMainContaint from "../components/shared/rootLayoutOfMainContaintSidbarAndContact/SidbarAndMainContaint";
import { Suspense } from "react";

const layout = async ({ children }) => {
  let dynamicSidbar = SidbarForSm;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000/api/v1";
    const res = await fetch(`${baseUrl}/product-category/`, { cache: 'no-store' });
    const data = await res.json();
    if (data?.results) {
      dynamicSidbar = data.results.map(cat => ({
        id: cat.id,
        name: cat.name,
        type: "CATEGORY",
        children: cat.sub_categories?.map(sub => ({
          id: sub.id,
          name: sub.name,
          type: "SUBCATEGORY",
          parentId: cat.id
        }))
      }));
    }
  } catch (error) {
    console.error("Failed to fetch categories for sidebar:", error);
  }

  return (
    <>
      <Header drawerItems={NavbarAndSidbarSmItems}/>
      <Navbar navbarItems={NavbarAndSidbarSmItems} />
      {/* sidbarAndMainContaintErModdeiMainContaintBaChildrenJacche
      KenoNaEiLayoutTaAroOnekSthaneiUseKoraHobe */}
      <Suspense fallback={<div>Loading Navigation...</div>}>
        <SidbarAndMainContaint
          breadcrumbs={[
            { label: "Home", link: "/" },
          ]}
          sidbarContaint={dynamicSidbar}
          mainContaint={children}
        />
      </Suspense>
      {/* footer */}
      <FooterComponent />
    </>
  );
};

export default layout;
