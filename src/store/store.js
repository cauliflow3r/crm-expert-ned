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
import {searchParametersSlice} from "../features/searchParametres/searchParametersSlice";
import {buttonLockSlice} from "../features/buttonLock/buttonLockSlice";
import {alertMUISlice} from "../features/alertMUI/alertMUISlice";
import {counterSlice} from "../features/counter/counterSlice";
import {dialogSlice} from "../features/dialogModal/dialogSlice";
import {planModalSlice} from "../features/planModal/planModal";
import {addNewTicketSlice} from "../features/addNewTicket/addNewTicketSlice";
import {ticketLoadingSlice} from "../features/addNewTicket/isLoadingSlice";
import {showTicketModalSlice} from "../features/showTicketModal/showTicketModal";
import {ticketDataSlice} from "../features/ticketData/ticketDataSlice";
import {statisticsSlice} from "../features/statistics/statisticsSlice";


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
      isSelectModalType: isSelectModalTypeSlice.reducer,
      searchParameters: searchParametersSlice.reducer,
      buttonLock: buttonLockSlice.reducer,
      alertMUI: alertMUISlice.reducer,
      counter: counterSlice.reducer,
      dialog: dialogSlice.reducer,
      planModal: planModalSlice.reducer,
      addNewTicket: addNewTicketSlice.reducer,
      ticketLoading: ticketLoadingSlice.reducer,
      showTicketModal: showTicketModalSlice.reducer,
      ticketData: ticketDataSlice.reducer,
      statistics: statisticsSlice.reducer
    }
})