import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        // Remove the token from local storage
        localStorage.removeItem('token');

        // Show toast message for successful logout
        toast.success('Successfully logged out', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => {
                // Redirect to login page and reload after toast is closed
                history.push('/login');
                window.location.reload();
            }
        });
    }, [history]);

    return <ToastContainer />;
};

export default Logout;
