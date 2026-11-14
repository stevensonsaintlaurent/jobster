import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    let url = `/jobs`;

    try {
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,

  extraReducers: (builder) => {
    builder
      // Get All Jobs - Pending
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })

      // Get All Jobs - Fulfilled
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        const { jobs, totalJobs, numOfPages } = payload;

        state.jobs = jobs;
        state.totalJobs = totalJobs;
        state.numOfPages = numOfPages;
      })

      // Get All Jobs - Rejected
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload || "Failed to fetch jobs");
      });
  },
});

export default allJobsSlice.reducer;
