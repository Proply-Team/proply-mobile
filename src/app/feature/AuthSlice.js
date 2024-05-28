import AuthService from "../../service/AuthService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const {login} = AuthService()

export const loginAction = createAsyncThunk(
    "auth/login",
    async (payload, ThunkAPI) => {
        try {
            const res = await login(payload)
            if (res) {
                return res
            } else {
                throw new Error("Invalid response structure")
            }
        } catch (e) {
            const invalid = e.message.includes("403")
            const error = {
                error: true,
                message: invalid ? "Wrong email/password" : e.message
            }
        }
    }
)

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(loginAction.fulfilled, (state, {payload}) => {
            state.isLoading = false
        });
        builder.addCase(loginAction.rejected, (state) => {
            state.isLoading = false
        });
    }
})

export default AuthSlice