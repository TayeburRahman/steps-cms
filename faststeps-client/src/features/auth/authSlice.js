import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  user: undefined,
  id: undefined,
  home_content: undefined,
  about_content: undefined,
  join_content: undefined,
  contact_content: undefined,
  office_content: undefined,
  food_content: undefined,
  consul_content: undefined,
  people_content: undefined,
  financial_content: undefined,
  lan_v: undefined, 
  shared_office: undefined, 
  view12_office: undefined,
  noView12_office: undefined,
  view18_office: undefined, 
  meeting_office: undefined, 
  explore_consul: undefined, 
  see_financial:undefined,
  human_people:undefined,
  recruitment_people:undefined,


  scanHistory: undefined,
  userInfo: undefined,
  likedEvent: undefined,
  allEvents: undefined,
};

const authSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.id = action.payload.id;
    },
    userLoggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
      state.id = undefined;
      state.friendList = null;
    },
    setHomeContent: (state, action) => {
      state.home_content = action.payload;
    },
    setAboutContent: (state, action) => {
      state.
      about_content = action.payload;
    }, 
    setJoinContent: (state, action) => {
      state.
      join_content = action.payload;
    }, 
    setContactContent: (state, action) => {
      state.
      contact_content = action.payload;
    }, 
    setLanguesNav: (state, action) => {
      state.
      lan_v = action.payload;
      console.log(action);
    }, 
    setOfficeContent: (state, action) => {
      state.office_content = action.payload;
    },
    setFoodContent: (state, action) => {
      state.food_content = action.payload;
    },
    setConsultationContent: (state, action) => {
      state.consul_content = action.payload;
    },
    setPeopleContent: (state, action) => {
      state.people_content = action.payload;
    },
    setFinancialContent: (state, action) => {
      state.financial_content = action.payload;
    },
    setSharedPackage: (state, action) => {
      state.shared_office = action.payload;
    },
    setMeetingPackage: (state, action) => {
      state.meeting_office = action.payload;
    },
    setView12Package: (state, action) => {
      state.view12_office = action.payload;
    },
    setNoView12Package: (state, action) => {
      state.noView12_office = action.payload;
    }, 
    setView18Package: (state, action) => {
      state.view18_office = action.payload;
    },
    setConsulPackage: (state, action) => {
      state.explore_consul = action.payload;
    }, 
    setFinancialPackage: (state, action) => {
      state.see_financial = action.payload;
    },
    setHumanPeoplePackage: (state, action) => {
      state.human_people = action.payload;
    },
    setRecuitmentPeoplePackage: (state, action) => {
      state.recruitment_people = action.payload;
    },

     
     
     
    



    setScanHistory: (state, action) => {
      state.scanHistory = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setLikedEvent: (state, action) => {
      state.likedEvent = action.payload;
    },
    setAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },
 

     
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  setHomeContent,
  setAboutContent,
  setContactContent,
  setJoinContent,
  setLanguesNav,
  setOfficeContent,
  setFoodContent,
  setConsultationContent,
  setPeopleContent,
  setFinancialContent, 
  setSharedPackage, 
  setMeetingPackage,
  setView12Package,
  setNoView12Package,
  setView18Package,
  setConsulPackage,
  setFinancialPackage,
  setHumanPeoplePackage, 
  setRecuitmentPeoplePackage,


  setScanHistory,
  setAllEvents,
  setLikedEvent,
  setUserInfo,
} = authSlice.actions;
export default authSlice.reducer;
