import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';

const UserButton = ({ login }) => {

    const { logout, loginWithRedirect } = useAuth0();

    if (login) {
        return (
            <Button variant="contained" color="primary" onClick={() => loginWithRedirect()} className="login-btn">
                Log In
            </Button>
        )
    }

    return (
        <Button variant="contained" color="primary" onClick={() => logout({ returnTo: window.location.origin })}>
            Logout 
        </Button>
    )

}

export default UserButton;