import React, { useState } from "react";
import PasswordInput from "../PasswordInput";  
import { ChangeUserPassword } from "@/core/services/api/Users/Users";
import { getItem } from "@/core/services/common/storage.services";
import { toast } from "react-toastify";
import { KeyboardArrowLeft } from "@mui/icons-material";
const ChangePassword = ({setShowMenu}) => {

  const refresh_token = getItem("refresh_token");
  const ChangePasswordHandler = async () => {
      await ChangeUserPassword({
          password: Passwords.New_Password,
          refresh_token: refresh_token,
        });
        toast.success("Your Password Changed Successfully", {
            position: "top-left",
            autoClose: 3000,
            type: "success",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
  };
  const [Passwords, setPasswords] = useState({
    current_password: "",
    New_Password: "",
    Set_new_Password: "",
  });

  return (
    <div className="rounded-xl h-full w-full col gap-4 bg-white p-8 lg:px-36">
      <span className="col gap-4">
        <KeyboardArrowLeft onClick={()=>setShowMenu(false)}  className="lg:!hidden !cursor-pointer" />
        <PasswordInput
          Passwords={Passwords}
          setPasswords={setPasswords}
          name={"current_password"}
          placeholder={"current password"}
          title={" Please Enter your current password"}
        />
        <PasswordInput
          Passwords={Passwords}
          setPasswords={setPasswords}
          name={"New_Password"}
          placeholder={"New Password"}
          title={"Please Enter new password"}
        />
        <PasswordInput
          Passwords={Passwords}
          setPasswords={setPasswords}
          name={"Set_new_Password"}
          placeholder={"Set new Password"}
          title={"Please Enter new password"}
        />
      </span>
      <button
        onClick={() => ChangePasswordHandler()}
        className="blue-button flex text-base self-end w-fit "
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
