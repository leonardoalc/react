// redux 
import { resetMessage } from "../slices/userSlice";

export const useResetComponentMessage = (dispatch)  => {
    return () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 3000);
    }
}