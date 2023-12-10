import {configureStore} from "@reduxjs/toolkit";

import {todoReducer} from "./slices";

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});

export {store};