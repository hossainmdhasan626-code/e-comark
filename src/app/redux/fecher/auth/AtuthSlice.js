const { createSlice } = require("@reduxjs/toolkit");

// const getTokenFormLocalStorage = localStorage.getItem("token");
// const convartToken = JSON.parse(getTokenFormLocalStorage);
// const initialState = {
//   access: convartToken?.access || null,
//   refresh: convartToken?.refresh || null,
// };
const initialState = {
  access:   null,
  refresh:  null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authData: (state, action) => {
      const { access, refresh } = action.payload;

      state.access = access;
      state.refresh = refresh;
      alert(access,refresh);
    },
  },
});

export const { authData } = authSlice.actions;
export default authSlice?.reducer;
