"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import About from "./ProfileModules/About";
import TreatmentMethods from "./ProfileModules/TreatmentMethods";
import SpecializesIn from "./ProfileModules/SpecializesIn";
import Pricing from "./ProfileModules/Pricing";
import AboutEdit from "./ProfileModules/AboutEdit";
import TreatmentMethodsEdit from "./ProfileModules/TreatmentMethodsEdit";
import SpecializesInEdit from "./ProfileModules/SpecializesInEdit";
import { Edit } from "@mui/icons-material";
// import { useOutletContext } from "react-router-dom";
import { getProfile } from "../../core/services/api/Auth/auth";
import {
  editTPProfile,
  getMethods,
  getPrices,
  getSpecialization,
} from "../../core/services/api/TherapistProfile/TherapistProfile";
import { useSelector } from "react-redux";
import PersonalData from "./ProfileModules/PersonalData";
import PersonalDataEdit from "./ProfileModules/PersonalDataEdit";
import InboxFooter from "./MessengerModules/MessengerInboxModules/InboxFooter";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({});
  const [editedprofile, setEditedProfile] = useState({});
  const [prices, setprices] = useState([]);
  const [allworkfields, setallworkfields] = useState([]);
  const [allApproaches, setallApproaches] = useState([]);

  // const context  = useOutletContext();
  // const setshowFooter = context[1];
  //  const showFooter = context[0]
  const [editMode, setEditMode] = useState(false);
  const [displayComponent, setdisplayComponent] = useState("public");

  const TPProfile = useSelector((state) => state.TPProfileSlice).profile;
  const TPAvatar = useSelector((state) => state.TPProfileSlice).avatar;

  console.log(editedprofile);

  const getProfileHandler = async () => {
    const res = await getProfile();
    setProfileDetails(res);
    setEditedProfile();
    const mres = await getMethods();
    const sres = await getSpecialization();
    setallApproaches(mres);
    setallworkfields(sres);
    // const priceres = await getPrices();
    // setprices(priceres)
  };

  const editProfileHandler = async () => {
    const res = await editTPProfile(editedprofile);
    res.status===200&&setdisplayComponent("public")
  };

  console.log(TPProfile, profileDetails);
  useEffect(() => {
    setEditedProfile({
      ...editTPProfile,
      first_name: TPProfile?.first_name,
      last_name: TPProfile?.last_name,
      birth_date: TPProfile?.birth_date,
      gender: TPProfile?.gender,
      therapeutic_approaches: TPProfile?.therapeutic_approaches,
      work_field: TPProfile?.work_field,
      about_me: TPProfile?.about_me,
      credit_card_number:TPProfile?.credit_card_number,
      city:TPProfile?.city,
      country:TPProfile?.country,
      medical_record:TPProfile?.medical_record

    });
  }, [TPProfile]);
  useEffect(() => {
    getProfileHandler();
  }, []);
  return (
    <div className="col max-lg:p-0 p-6 gap-6 w-full h-[calc(100vh-96px)] max-lg:h-auto  overflow-auto">
      <div className="flex w-full p-2 justify-between border-b border-zinc-400">
        <h2 className="title-2 ">Profile</h2>
        {editMode ? (
          <>
            <div className="flex gap-2 max-lg:hidden">
              <span
                onClick={() => setEditMode(false)}
                className="white-button cursor-pointer !w-fit"
              >
                Cancel
              </span>
              <Button
                onClick={() => editProfileHandler()}
                className="!bg-blue dark:!bg-blue-300 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white"
              >
                Save
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Button
                onClick={() => setEditMode(true)}
                className=" max-lg:!hidden !bg-blue dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white"
              >
                Edit Profile
              </Button>{" "}
              <Edit
                className=" lg:!hidden !w-5 !h-5 dark:text-neutral-300"
                onClick={() => {
                  setEditMode(true);
                 
                }}
              />
            </div>
          </>
        )}
      </div>
      <div className="col gap-6 px-32 max-lg:p-2 max-lg:mb-16">
        <div className="flex dark:text-neutral-300 gap-4">
          <span
            onClick={() => setdisplayComponent("public")}
            className={` ${
              displayComponent == "public" && "border-b-2 border-blue"
            } cursor-pointer transition duration-300 ease-in-out `}
          >
            Public Data
          </span>
          <span
            onClick={() => setdisplayComponent("personal")}
            className={` ${
              displayComponent == "personal" && "border-b-2 border-blue"
            } transition duration-300 ease-in-out cursor-pointer `}
          >
            Personal Data
          </span>
        </div>
        <hr className="mt-[-24px] text-zinc-400" />
        {displayComponent == "public" ? (
          editMode ? (
            <>
              <AboutEdit
                avatar={TPAvatar}
                editedprofile={editedprofile}
                setEditedProfile={setEditedProfile}
              />
              <TreatmentMethodsEdit
                allApproaches={allApproaches}
                setallApproaches={setallApproaches}
                editedprofile={editedprofile}
                setEditedProfile={setEditedProfile}
              />
              <SpecializesInEdit
                editedprofile={editedprofile}
                setEditedProfile={setEditedProfile}
                allworkfields={allworkfields}
                setallworkfields={setallworkfields}
              />
            </>
          ) : (
            <>
              <About
                TPProfile={TPProfile}
                profileDetails={profileDetails}
                avatar={TPAvatar}
              />
              <TreatmentMethods TPProfile={TPProfile} />
              <SpecializesIn TPProfile={TPProfile} />
              <Pricing prices={prices} />
            </>
          )
        ) : editMode ? (
          <PersonalDataEdit
            editedprofile={editedprofile}
            setEditedProfile={setEditedProfile}
          />
        ) : (
          <PersonalData TPProfile={TPProfile} />
        )}
      </div>
      {
        editMode?
        <span className="lg:hidden bg-white w-full fixed bottom-0">
          <div className="flex justify-evenly w-full p-2">
          <button onClick={() => setEditMode(false)} className="white-button max-lg:w-24">Cancel</button>
          <button onClick={() => editProfileHandler()} className="blue-button max-lg:w-24">Save</button>
          </div>
           </span>:<InboxFooter/>
      }
    </div>
  );
};

export default Profile;
