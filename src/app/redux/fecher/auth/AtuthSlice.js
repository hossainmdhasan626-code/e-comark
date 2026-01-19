const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  fullName: null,
  gmail: null,
  password: null,
  number: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authData: (state, action) => {
      const { firstName, lastName, gmail, password, number } = action.payload;

      state.fullName = `${firstName} ${lastName}`;
      state.gmail = gmail;
      state.password = password;
      state.number = number;
    },
  },
});

export const { authData } = authSlice.actions;
export default authSlice?.reducer;
