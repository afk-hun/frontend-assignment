import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ProductType = {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
};

type ProductResponseType = {
  total_count: number;
  page_count: number | null;
  page: number | null;
  data: ProductType[];
};

type ProductState = {
  totalCount: number;
  productsOrigin: ProductType[];
  separatedProducts: Array<Array<ProductType>>;
};

const initialState: ProductState = {
  totalCount: 0,
  productsOrigin: [],
  separatedProducts: [[]],
};

function splitEveryNthItem(array: any[], n: number) {
  let result: Array<Array<ProductType>> = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array.slice(i, i + n));
  }
  return result;
}

export const fetchProducts = createAsyncThunk("product/fetchItem", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/data");
    return response.data as ProductResponseType;
  } catch {}
});

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<{ filter: string }>) {},

    removeProduct(state, action: PayloadAction<{ filter: string }>) {},
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.totalCount = action.payload!.total_count;
      state.productsOrigin = action.payload!.data;
      state.separatedProducts = splitEveryNthItem(action.payload!.data, 30);
    });
  },
});
export const { addProduct, removeProduct } = productsSlice.actions;
