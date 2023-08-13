import React,{useRef,useState} from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
export const UpdatePwd=()=>{
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const oldPassword=useRef()
    const newPassword=useRef()
    const confirmPassword=useRef()
    const navigate=useNavigate()

    const updatePwd= async(e)=>{
        e.preventDefault()
        const payload={
            old_password :oldPassword.current.value,
            new_password :newPassword.current.value,
            confirm_password :confirmPassword.current.value
        }
        console.log(payload);
        try {
            const { data } = await axiosClient.put('/updatePwdStd', payload);

            if (data === 'true') {
                setSubmissionMessage("Password Updated");
                setSubmitted(true);

            }
        } catch (err) {
            const response = err.response;
            if (response && response.status === 422) {
                console.log(response.data.errors);
                setSubmissionMessage("Error Occured");
            }
        }
    }
    return(
        <div>
            <form onSubmit={updatePwd}>
                <label htmlFor="oldPassword" id="old_pwd"> Old Password :{' '}</label>
                <input type="password" ref={oldPassword} /><br /><br />
                <label htmlFor="newPassword" id="new_pwd"> New Password :{' '}</label>
                <input type="password" ref={newPassword} /><br /><br />
                <label htmlFor="confirmPassword" id="confirm_pwd">Confirm Password :{' '}</label>
                <input type="password" ref={confirmPassword} /><br /><br />
                <input type="submit" value="Update" />
            </form>
            {submitted  && (
            <p>{submissionMessage}</p>
            )}
        </div>
    )
}
