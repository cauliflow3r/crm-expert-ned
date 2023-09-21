import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/users/userSlice";
import {dataSlice} from "../features/data/dataSlice";
import {tokenSlice} from "../features/token/tokenSlice";
import {isLoadingSlice} from "../features/isLoading/isLoading";
import {typeOfBaseSlice} from "../features/typeOfBase/typeOfBaseSlice";
import {getOneClientSlice} from "../features/getOneClient/getOneClientSlice";
import {isCommentsSlice} from "../features/isComments/isCommentsSlice";
import {isLoadingDetailedInfoSlice} from "../features/isLoadingDetailedInfo/isLoadingDetailedInfoSlice";
import {baseModalSlice} from "../features/baseModal/baseModalSlice";
import {isSelectModalTypeSlice} from "../features/selectModalType/isSelectModalTypeSlice";


export const store = configureStore({
  reducer:
    {
      user:userSlice.reducer,
      data: dataSlice.reducer,
      token: tokenSlice.reducer,
      isLoading: isLoadingSlice.reducer,
      isLoadingDetailedInfo: isLoadingDetailedInfoSlice.reducer,
      typeOfBase: typeOfBaseSlice.reducer,
      getOneClient: getOneClientSlice.reducer,
      isComments: isCommentsSlice.reducer,
      baseModal: baseModalSlice.reducer,
      isSelectModalType: isSelectModalTypeSlice.reducer
    }
})