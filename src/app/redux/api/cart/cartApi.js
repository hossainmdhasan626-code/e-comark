import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CardData from "../../../../../data/CardData";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecomark-django.onrender.com/api/v1",
  }),
  tagTypes: ["Default", "Filtar", "Search", "Details"],
  endpoints: (builder) => ({
    // etaSobCardErDataProvidKore
    getProducts: builder.query({
      queryFn: async (args) => {
        const { categoryId, subcategoryId, searchQuery } = args || {};
        try {
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000/api/v1";
          let url = `${baseUrl}/product-category/`;
          
          if (searchQuery) {
            url = `${baseUrl}/products/?search=${encodeURIComponent(searchQuery)}`;
          } else if (categoryId && subcategoryId) {
            url = `${baseUrl}/product-category/${categoryId}/sub-category/${subcategoryId}/products/`;
          } else if (categoryId) {
            url = `${baseUrl}/product-category/${categoryId}/`;
          }

          const allProducts = [];
          
          while (url) {
            const response = await fetch(url);
            const data = await response.json();
            
            const extractProducts = (obj) => {
              if (!obj) return;
              if (obj.products && Array.isArray(obj.products)) {
                obj.products.forEach(p => allProducts.push(p));
              }
              if (obj.sub_categories && Array.isArray(obj.sub_categories)) {
                obj.sub_categories.forEach(extractProducts);
              }
            };

            if (searchQuery || (categoryId && subcategoryId)) {
              // specific subcategory products endpoint returns a list of products
              if (data?.results && Array.isArray(data.results)) {
                data.results.forEach((product) => allProducts.push(product));
                url = data.next;
              } else if (Array.isArray(data)) {
                data.forEach((product) => allProducts.push(product));
                url = null;
              } else {
                url = null;
              }
            } else if (categoryId) {
              // single category endpoint returns a category object
              extractProducts(data);
              url = null; // not paginated
            } else {
              // all categories endpoint is paginated
              if (data?.results) {
                data.results.forEach(extractProducts);
                url = data.next;
              } else {
                url = null;
              }
            }
          }

          if (allProducts.length > 0) {
            return { data: allProducts };
          } else {
            // Fallback to local data if API returns empty structure
            return { data: CardData };
          }
        } catch (error) {
          // Fallback to local data if API fails
          return { data: CardData };
        }
      },
    }),

    // cardDetailsPageThekeParamsErIdTaNewThanOiIdOnuJaiCardErDataReturnKore
    getFilterProducts: builder.query({
      queryFn: async (id) => {
        try {
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000/api/v1";
          let url = `${baseUrl}/product-category/`;
          let filtered = null;
          
          while (url && !filtered) {
            const response = await fetch(url);
            const data = await response.json();
            
            if (data?.results) {
              data.results.forEach((category) => {
                category.sub_categories?.forEach((subCategory) => {
                  subCategory.products?.forEach((product) => {
                    if (product.id === Number(id)) {
                      filtered = { 
                        ...product, 
                        categoryInfo: { id: category.id, name: category.name },
                        subCategoryInfo: { id: subCategory.id, name: subCategory.name }
                      };
                    }
                  });
                });
              });
              url = data.next;
            } else {
              url = null; // Break loop if results format is unexpected
            }
          }

          // Fallback to local data if not found in API
          if (!filtered) {
            filtered = CardData.find((product) => product.id === Number(id));
          }

    getProductsBySubCategory: builder.query({
      query: ({ cat_Id, sub_Id }) =>
        `/product-category/${cat_Id}/sub-category/${sub_Id}/products/`,
      providesTags: ["Filtar"],
    }),

          return { data: filtered };
        } catch (error) {
          // Fallback to local data if API fails
          const fallbackProduct = CardData.find(
            (product) => product.id === Number(id)
          );
          if (!fallbackProduct) {
            return { error: { status: 404, data: "Product not found" } };
          }
          return { data: fallbackProduct };
        }
      },
    }),

    // reviewAddKorleEkhanThekeCardDataTeAddKoraHoy
    addReview: builder.mutation({
      queryFn: (newReview, id) => {
        const updatedReview = CardData.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              reviews: [newReview, ...product.reviews],
            };
          }
          return product;
        });
        alert(JSON.stringify(updatedReview));
        return { data: updatedReview };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetFilterProductsDetailsQuery,
  useAddReviewMutation,
  useGetProductsBySearchQuery,
  useGetProductsBySubCategoryQuery,
} = productApi;
