export const validateData = (email, password) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex =  /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    return {
        email: {
            isValid: emailRegex.test(email),
            message: emailRegex.test(email)
                ? ""
                : "Please enter a valid email address."
        },

        password: {
            isValid: passwordRegex.test(password),
            message: passwordRegex.test(password)
                ? ""
                : "Password must be at least 8 characters long and contain both letters and numbers."
        }
    };
};