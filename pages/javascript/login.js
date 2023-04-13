const form = document.getElementById("loginform");

    const log_email = document.getElementById("emailid");

    const log_password = document.getElementById("password");

    const user_records = JSON.parse(localStorage.getItem("user_list"));

    loginvalidation = () => {

        const emailvalue = log_email.value.trim();
        const passwordvalue = log_password.value.trim();

        let success = false;

        for (let i = 0; i < user_records.length; i++) {

            if ((user_records[i].emailid == emailvalue) && (user_records[i].password == passwordvalue)) {

                success = true;

                break;
            }
        }

        if (success) {

            const logged_in = emailvalue;

            localStorage.setItem("logged_in", logged_in);

            alert("Login Success");

            window.location.href = "userprofile.html";
        }

        else {

            alert("Invalid User Credentials");

        }

    }

    form.addEventListener('submit', e => {

        e.preventDefault();

        loginvalidation();
    })