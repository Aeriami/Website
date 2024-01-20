// auth.js

const redirectToLogin = () => {
    window.location.href = '/login';
};

const checkLoggedIn = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
        redirectToLogin();
    }
};

checkLoggedIn();
