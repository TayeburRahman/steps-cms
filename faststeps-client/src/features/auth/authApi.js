import { apiSlice } from "../apiSlice";
import {
  setAboutContent,
  setAllEvents,
  setConsultationContent,
  setContactContent,
  setFinancialContent,
  setFoodContent,
  setHomeContent,
  setJoinContent,
  setOfficeContent,
  setPeopleContent,
  setUserInfo,
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



    getAllEvents: builder.query({
      query: () => ({
        url: `api/v1/event/find`,
        method: "GET",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setAllEvents(result.data.event));
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
  useGetHomeContentQuery, 
  useGetAboutContentQuery, 
  useGetJoinContentQuery, 
  useGetContactContentQuery, 
  useGetOfficeContentQuery,
  useGetFoodContentQuery,
  useGetConsultationContentQuery,
  useGetPeopleContentQuery,
  useGetFinancialContentQuery,

   

  useGetUserInfoQuery, 
  useGetAllEventsQuery,
} = authApi;
