import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IInfo } from '../common/types';
import { getAddress } from '../services/get-address';
import { AxiosError } from 'axios';

interface IMapInfoState {
  ipAddress: string;
  info: IInfo | undefined;
  isPending: boolean;
  error: string | null;
}

export const getMapInfo = createAsyncThunk(
  'mapInfo/getAddress',
  async (ip: string, { rejectWithValue }) => {
    try {
      const info: IInfo = await getAddress(ip);

      return info;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.status);
      }

      throw error;
    }
  }
);

const initialState: IMapInfoState = {
  ipAddress: '8.8.8.8',
  info: undefined,
  isPending: false,
  error: null,
};

const mapInfoSlice = createSlice({
  name: 'mapInfo',
  initialState,
  reducers: {
    setIpAddress(state, action: PayloadAction<string>) {
      state.ipAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMapInfo.pending, (state) => {
        state.isPending = true;
        state.error = null;
      })
      .addCase(getMapInfo.fulfilled, (state, action) => {
        state.isPending = false;
        state.info = action.payload;
        console.log('state.info: ', state.info);
      })
      .addCase(getMapInfo.rejected, (state) => {
        state.isPending = true;
      });
  },
});

export default mapInfoSlice.reducer;
export const { setIpAddress } = mapInfoSlice.actions;
