import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../state/store";
import { userLogin } from "../../state/session/userLogin";

const useSignInAction = () => {
    const dispatch = useDispatch<AppDispatch>();

    const onClickSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        dispatch(userLogin({
            email: "faroos1996@gmail.com",
            password: "FaRoOs-123"
        }))
    }

    return { onClickSignIn };
}

export default useSignInAction;