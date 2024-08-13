import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import notyf from "../../utils/notyf";

function LoginPage(): JSX.Element {
    const navigate = useNavigate();
    
    type userCred = {
        userName:string;
        userPass:string;
    }
    
    const {register, handleSubmit, formState: {errors}} = useForm<userCred>(); 

    const makeLogin: SubmitHandler<userCred> = (data) => {
        axios.post("http://localhost:8080/api/v1/login/loginUser", {
            userName: data.userName,
            userPass: data.userPass,
        }).then((res) => {
            const jwt = res.headers["Authorization"];
            notyf.success(`welcome ${data.userName}`);
        }).catch((err) => {notyf.error(err);});
    }

    return (
        <div className="loginPage Box">
			<h1>Please log in</h1>
            <hr/>
            <form onSubmit={handleSubmit(makeLogin)}>
                <input type="text" placeholder="user name" {...register("userName",{required:true})}/><br/><br/>
                <input type="password" placeholder="password" {...register("userPass",{required:true})}/><br/><br/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default LoginPage;
