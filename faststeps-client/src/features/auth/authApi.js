import { apiSlice } from "../apiSlice";
import {
  setAboutContent,
  setConsulPackage,
  setConsultationContent,
  setContactContent,
  setFinancialContent,
  setFinancialPackage,
  setFoodContent,
  setHomeContent,
  setHumanPeoplePackage,
  setJoinContent,
  setMeetingPackage,
  setNoView12Package,
  setOfficeContent,
  setPeopleContent,
  setRecuitmentPeoplePackage,
  setSharedPackage,
  setUserInfo,
  setView12Package,
  setView18Package,
  userLoggedIn
} from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.data.token,
              user: result.data.user,
              id: result.data._id,
            })
          );

          dispatch(
            userLoggedIn({
              token: result.data.token,
              user: result.data.user,
              id: result.data._id,
            })
          );

          //   dispatch(
          //     addMessage({
          //       message: "Registration successful",
          //       type: "success",
          //     })
          //   );
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    registration: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/signup",
        method: "POST",
        body: data,
      }),
    }),
  
    getUserInfo: builder.query({
      query: (email) => ({
        url: `/api/v1/user/find/${email}`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUserInfo(result.data));
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getHomeContent: builder.query({
      query: (email) => ({
        url: `api/v1/home/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setHomeContent(result.data[0]));
        
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }), 
    getAboutContent: builder.query({
      query: () => ({
        url: `api/v1/about/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setAboutContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    getJoinContent: builder.query({
      query: () => ({
        url: `api/v1/join/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setJoinContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    getContactContent: builder.query({
      query: () => ({
        url: `api/v1/contact/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setContactContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    getOfficeContent: builder.query({
      query: () => ({
        url: `api/v1/office/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setOfficeContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getFoodContent: builder.query({
      query: () => ({
        url: `api/v1/food/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setFoodContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    getConsultationContent: builder.query({
      query: () => ({
        url: `api/v1/consultation/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setConsultationContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    getPeopleContent: builder.query({
      query: () => ({
        url: `api/v1/people/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setPeopleContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    getFinancialContent: builder.query({
      query: () => ({
        url: `api/v1/financial/get/all`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setFinancialContent(result.data[0]));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),

    postContactForm: builder.mutation({
      query: (data) => ({
        url: "/api/v1/form/contact/add",
        method: "POST",
        body: data,
      }),
    }),

    addJoinForm: builder.mutation({
      query: (data) => ({
        url: "/api/v1/form/join/add",
        method: "POST",
        body: data,
      }),
    }), 
    getMeetingPackage: builder.query({
      query: () => ({
        url: `api/v1/service/find/office/meeting_office`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setMeetingPackage(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getSharedPackage: builder.query({
      query: () => ({
        url: `api/v1/service/find/office/shared_office`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setSharedPackage(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getView12Package: builder.query({
      query: () => ({
        url: `api/v1/service/find/office/view12_office`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setView12Package(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getNoView12Package: builder.query({
      query: () => ({
        url: `api/v1/service/find/office/noView12_office`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setNoView12Package(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getView18Package: builder.query({
      query: () => ({
        url: `api/v1/service/find/office/view18_office`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setView18Package(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getConsulPackage: builder.query({
      query: () => ({
        url: `api/v1/service/find/consul/explore_consul`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setConsulPackage(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getFinancialPackage: builder.query({
      query: () => ({
        url: `api/v1/service/find/financial/see_financial`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setFinancialPackage(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getHumanPeoplePackage: builder.query({
      query: () => ({
        url: `api/v1/service/find/people/human_people`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
 
        try {
          const result = await queryFulfilled;
          dispatch(setHumanPeoplePackage(result.data.package)); 
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
    getRecuitmentPeoplePackage: builder.query({
      query: () => ({
        url: `api/v1/service/find/people/recruitment_people`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setRecuitmentPeoplePackage(result.data.package));
         
        } catch (error) {
          console.log("redux store error", error);
        }
      },
    }),
   
  }),
});

export const {
  useLoginUserMutation,
  useRegistrationMutation, 
  useAddJoinFormMutation, 
  usePostContactFormMutation,
  useGetHomeContentQuery, 
  useGetAboutContentQuery, 
  useGetJoinContentQuery, 
  useGetContactContentQuery, 
  useGetOfficeContentQuery,
  useGetFoodContentQuery,
  useGetConsultationContentQuery,
  useGetPeopleContentQuery,
  useGetMeetingPackageQuery,
  useGetSharedPackageQuery,
  useGetView12PackageQuery,
  useGetNoView12PackageQuery,
  useGetView18PackageQuery,
  useGetFinancialContentQuery,
  useGetConsulPackageQuery,
  useGetFinancialPackageQuery, 
  useGetHumanPeoplePackageQuery, 
  useGetRecuitmentPeoplePackageQuery,  

  useGetUserInfoQuery,  
} = authApi;
