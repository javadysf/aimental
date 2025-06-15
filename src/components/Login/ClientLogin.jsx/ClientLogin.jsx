import { useEffect, useState } from "react";
import AiLogo from "../../../assets/img/aimental.svg";
import darkailogo from "../../../assets/img/header/darkailogo.svg";
import DatePickerInput from "./ClientLoginModule/DatePickerInput";
import {
  getAddictionHistory,
  getClientEducation,
  getClientOccupation,
  getClientSex,
  getEconomicStatus,
  getMedicalHistory,
  getMeritalStatus,
  getPhysicalStatus,
} from "@/core/services/api/BaseInfo/BaseInfo";
import { ClientRegister } from "@/core/services/api/Auth/auth";
import { uploadCover } from "@/core/services/api/Questionnaire/questionnaire";
import Link from "next/link"
import { Backdrop } from "@mui/material";
import { useTheme } from 'next-themes';
import { useDispatch } from "react-redux";
import { setCLAvatar } from "@/redux/features/UserProfile/CLProfile";
import { getDocuments } from "@/core/services/api/Documents/documents";
import Image from "next/image";

const ClientLogin = () => {
  const [ClientSex, setClientSex] = useState([]);
  const [ClientEducation, setClientEducation] = useState([]);
  const [ClientOccupation, setClientOccupation] = useState([]);
  const [EconomicStatus, setEconomicStatus] = useState([]);
  const [AddictionHistory, setAddictionHistory] = useState([]);
  const [MedicalHistory, setMedicalHistory] = useState([]);
  const [PhysicalStatus, setPhysicalStatus] = useState([]);
  const [MeritalStatus, setMeritalStatus] = useState([]);


  const dispatch = useDispatch()
  useEffect(() => {
    const getUserInfo = async () => {
      setClientSex(await getClientSex());
      setClientEducation(await getClientEducation());
      setClientOccupation(await getClientOccupation());
      setEconomicStatus(await getEconomicStatus());
      setAddictionHistory(await getAddictionHistory());
      setMedicalHistory(await getMedicalHistory());
      setPhysicalStatus(await getPhysicalStatus());
      setMeritalStatus(await getMeritalStatus());
    };
    getUserInfo();
  }, []);

  const [open, setopen] = useState(false);

  const handleOpen = () => {
    setopen(true);
  };
  const [avatar, setavatar] = useState("");
  const [ClientDetail, setClientDetail] = useState({
    education: "",
    job: "",
    medical_history:"",
    economic_situation_status: "",
    drug_use_status: "",
    drug_used_description: "",
    addiction_status: "No",
    addiction_description: "",
    physical_condition: "",
    disability_type: "",
    marital_status: "",
    sexual_orientation: "",
    avatar: "",
    gender: "",
    birth_date: "",
    first_name: "",
    last_name: "",
  });
  const setValues = (e) => {
    setClientDetail({ ...ClientDetail, [e.target.name]: e.target.value });
  };

  const uploadAvatar = async (e) => {
    const res = await uploadCover({
      name: e.target.files[0].name,
      file: e.target.files[0],
      description: "ok",
      is_public: true,
    });
    setavatar(res.file);
    setClientDetail({ ...setClientDetail, avatar: res.id });
  };

  const handleRegister = async () => {
    const res =  await ClientRegister(ClientDetail);
    dispatch(setCLAvatar(await getDocuments(res?.avatar)))
  };
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full dark:bg-neutral-800 center flex center">
      <div className="flex flex-col items-center p-4 py-5  bg-zinc-50 rounded-3xl dark:bg-zinc-800 dark:text-neutral-300 w-[450px]">
        <Image width={96} height={96} alt="ai-logo" className="w-24" src={theme=='dark' ? darkailogo : AiLogo} />
        <h3 className="text-md font-normal">Therapist information</h3>
        <div className="col gap-2 w-full">
          <h4 className="font-medium text-xs">fill your information</h4>
          <div className="w-48 text-neutral-800 rounded-full col self-center items-center">
            {avatar ? (
              <Image width={80} height={80} alt="cl-avatar" src={avatar} className="rounded-full w-20 h-20" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill={theme=='dark' ? "#454545" : "#e7e7e7"}
                className=" bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            )}
            <input
              type="file"
              onChange={(e) => uploadAvatar(e)}
              accept="image/*"
              className="hidden"
              id="image-input"
            />
            <label
              htmlFor="image-input"
              className=" dark:text-blue-300 max-lg:text-xs  self-center font-medium text-sm text-blue px-4 rounded cursor-pointer"
            >
              Add profile picture
            </label>
          </div>
          <p className="cursor-pointer text-sm text-[#B3261E] dark:text-[#FBABA6]">
            {" "}
            *All fields must be filled
          </p>
          <input
            onChange={(e) => setValues(e)}
            name="first_name"
            value={ClientDetail.first_name}
            required={true}
            className="register-input"
            placeholder="First Name *  "
          />
          <input
            onChange={(e) => setValues(e)}
            name="last_name"
            value={ClientDetail.last_name}
            className="register-input"
            placeholder="Last Name *  "
          />
          <DatePickerInput
            setClientDetail={setClientDetail}
            ClientDetail={ClientDetail}
          />
          <select
            onChange={(e) => setValues(e)}
            name="gander"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={ClientDetail.gender} defaultValue={"country"}>
              Sex{" "}
            </option>
            {ClientSex?.map((item) => (
              <option key={item.id}>{item.title}</option>
            ))}
          </select>
          <select
            onChange={(e) => setValues(e)}
            name="education"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={"country"}>Education </option>
            {ClientEducation?.map((item) => (
              <option  key={item.id} value={item.id}>{item.title}</option>
            ))}
          </select>
          <select
        onChange={e=>setValues(e)}
        name="job"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={"country"}>Occupation</option>
            {ClientOccupation?.map((item) => (
              <option  key={item.id} value={item.id} >{item.title}</option>
            ))}
          </select>
          <select
                onChange={e=>setValues(e)}
        name="economic_situation_status"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={"Normal"}>Economic status</option>
            <option >Good</option>
            <option >Bad</option>
            <option >Normal</option>
            {/* {EconomicStatus?.map((item) => (
              <option >{item.title}</option>
            ))} */}
          </select>
          <select
              
        name="addiction_status"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option disabled value={"country"}>History of Addiction</option>
            <option >Yes</option>
            <option >No</option>
            {/* {AddictionHistory?.map((item) => (
              <option  >{item.title}</option>
            ))} */}
          </select>
          <select
                onChange={e=>setValues(e)}
        name="medical_history"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={"country"}>Medical history</option>
            {MedicalHistory?.map((item) => (
              <option  key={item.id} >{item.title}</option>
            ))}
          </select>
          <select
                onChange={e=>setValues(e)}
        name="physical_condition"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={"country"}>Physical condition</option>
            {PhysicalStatus?.map((item) => (
              <option  key={item.id} >{item.title}</option>
            ))}
          </select>
          <select
          onChange={e=>setValues(e)}
           name="marital_status"
          defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={"country"}>Marital status</option>
            {MeritalStatus?.map((item) => (
              <option  key={item.id} >{item.title}</option>
            ))}
          </select>
          <select
                onChange={e=>setValues(e)}
        name="sexual_orientation"
            defaultValue={"country"}
            className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
          >
            <option value={"country"}>Sexual orientation</option>
            {ClientSex?.map((item) => (
              <option  key={item.id} value={item.id} >{item.title}</option>
            ))}
          </select>
          <button
            onClick={() => {
              handleRegister();
              handleOpen();
            }}
            className="blue-button w-full "
          >
            Done
          </button>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <span className="bg-zinc-50 text-center col w-[500px] rounded-3xl center text-neutral-800 gp8">
              <Image width={200} height={200} src={AiLogo} alt="aimental-logo" />
              Thank you for your patience.
              <br />
              Your account will be verified by admin.
              <Link className="blue-button" href={"/client/dashboard"}>
                Back to home
              </Link>
            </span>
          </Backdrop>
          <p className="text-xs text-center">
            You can also change it from Profile{`>`}Edit profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
