import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useSearchParams } from "react-router-dom";
import Layout from "../../components/layout";
import LandingPage from "../../components/landing/Index";
import TherapistsListPage from "../../components/therapistsList";
import TherapistsInfoPage from "../../components/therapistInfo";
import TherapistsCalenderPage from "../../components/therapistCalender/Index";
import TPLayout from "../../components/therapistPanel/therapistPanelModules/TPLayout/TPLayout";
import DashBoard from "../../components/therapistPanel/DashBoard";
import Messenger from "../../components/therapistPanel/Messenger";
import Blog from "../../components/Blog/Index";
import Article from "../../components/Article/Article";
import EventManager from "../../components/therapistPanel/EventManager";
import Profile from "../../components/therapistPanel/Profile";
import Questionnaires from "../../components/therapistPanel/Questionnaires";
import NewForm from "../../components/therapistPanel/QuestionnairesModules/NewForm";
import TreatmentFiles from "../../components/therapistPanel/TreatmentFiles";
import PationReport from "../../components/therapistPanel/TreatmentFilesModule/PationReport";
import EditReport from "../../components/therapistPanel/TreatmentFilesModule/PationReportModule/EditReport";
import MeetingList from "../../components/therapistPanel/TreatmentFilesModule/MeetingList";
import MeetingReport from "../../components/therapistPanel/TreatmentFilesModule/MeetingListModules/MeetingReport";
import ClientTasks from "../../components/therapistPanel/TreatmentFilesModule/MeetingListModules/MeetingReportModules/ClientTasks";
import PationQuestionnaires from "../../components/therapistPanel/TreatmentFilesModule/PationQuestionnaires";
import PationQuestionForm from "../../components/therapistPanel/TreatmentFilesModule/PationQuestionnairesModules/PationQuestionForm";
import ClientLayout from "../../components/ClientPanel/ClientPanelModules/ClientLayout/ClientLayout";
import { ClientDashBoard } from "../../components/ClientPanel/ClientDashboard";
import ClientProfile from "../../components/ClientPanel/ClientProfile";
import ClientExplore from "../../components/ClientPanel/Explore";
import ClientQuestionnaires from "../../components/ClientPanel/ClientQuestionnaires";
import ClientSetting from "../../components/ClientPanel/ClientSetting";
import ClientTicket from "../../components/ClientPanel/ClientTicket";
import ClientHistory from "../../components/ClientPanel/ClientHistory";
import ClientMeetingList from "../../components/ClientPanel/ClientHistoryModules/ClientMeetingList";
import Payments from "../../components/therapistPanel/Payments";
import Login from "../../components/Login/Login";
import QuestionnairesDetails from "../../components/therapistPanel/QuestionnairesModules/QuestionnairesDetails";
import QuestionnairePage from "../../components/ClientPanel/ClientQuestionnairesModules/QuestionnairePage";
import QuestionnairesEdit from "../../components/therapistPanel/QuestionnairesModules/QuestionnairesEdit";
import TherapistLogin from "../../components/Login/Therapistlogin/TherapistLogin";
import ClientLogin from "../../components/Login/ClientLogin.jsx/ClientLogin";
import { setItem } from "../services/common/storage.services";
import { getProfile } from "../services/api/Auth/auth";
import NavigationConfig from "./NavigationConfig";


const RouterConfig = () => {
  // const [searchParams] = useSearchParams();




  const pageUrls = [
    {
           path:"/",
           element: <NavigationConfig/>,
           children:[
            {
              path: "/login",
              children:[
                {
                  path:"/login",
                  element:<Login/>
                },
                {
                  path:"/login/therapist",
                  element:<TherapistLogin/>
                },
                {
                  path:"/login/client",
                  element:<ClientLogin/>
                }
              ]
            },
            {
              path: "/",
              element: <Layout />,
              children: [
                {
                  path: "/",
                  element: <LandingPage />,
                },
                {
                  path: "/therapists",
                  element: <TherapistsListPage />,
                },
                {
                  path: "/therapist-info",
                  element: <TherapistsInfoPage />,
                },
                {
                  path: "/therapist-calendar",
                  element: <TherapistsCalenderPage />,
                },
                {
                  path: "/blogs",
                  element: <Blog/>,
                },
                {
                  path: "/blogs/:slug",
                  element: <Article/>,
                },
              ],
            },
            {
              path: "/therapist-dashboard",
              element: <TPLayout />,
              children: [
                {
                  path: "/therapist-dashboard",
                  element: <DashBoard/>,
                },
                {
                  path: "/therapist-dashboard/messenger",
                  element: <Messenger/>,
                },
                {
                  path: "/therapist-dashboard/eventmanager",
                  element: <EventManager/>,
                },
                {
                  path: "/therapist-dashboard/profile",
                  element: <Profile/>,
                },
                {
                  path: "/therapist-dashboard/questionnaires",
                  element: <Questionnaires/>,
                },
                {
                  path: "/therapist-dashboard/questionnaires/:id/details",
                  element: <QuestionnairesDetails/>,
                },
                {
                  path: "/therapist-dashboard/questionnaires/:id/edit",
                  element: <QuestionnairesEdit/>,
                },
                {
                  path: "/therapist-dashboard/questionnaires/newform",
                  element: <NewForm/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles",
                  element: <TreatmentFiles/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles/pationreport",
                  element: <PationReport/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles/editpationreport",
                  element: <EditReport/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles/meetinglist",
                  element: <MeetingList/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles/meetingreport",
                  element: <MeetingReport/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles/clienttasks",
                  element: <ClientTasks/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles/pationquestionnaires",
                  element: <PationQuestionnaires/>,
                },
                {
                  path: "/therapist-dashboard/TreatmentFiles/pationquestionform",
                  element: <PationQuestionForm/>,
                },
                {
                  path: "/therapist-dashboard/payments",
                  element: <Payments/>,
                },
              ],
            },
            {
              path: "/client",
              element: <ClientLayout/>,
              children: [
                {
                  path: "/client/dashboard",
                  element: <ClientDashBoard/>,
                },
                {
                  path: "/client/profile",
                  element: <ClientProfile/>,
                },
                {
                  path: "/client/explore",
                  element: <ClientExplore/>,
                },
                {
                  path: "/client/questionnaires",
                  element: <ClientQuestionnaires/>,
                },
                {
                  path: "/client/questionnaires/:id",
                  element: <QuestionnairePage/>,
                },
                {
                  path: "/client/setting",
                  element: <ClientSetting/>,
                },
                {
                  path: "/client/ticket",
                  element: <ClientTicket/>,
                },
                {
                  path: "/client/ticket/:id",
                  element: <ClientTicket/>,
                },
                {
                  path: "/client/history",
                  element: <ClientHistory/>,
                },
                {
                  path: "/client/history/meetinglist",
                  element: <ClientMeetingList/>,
                },
              ],
            },
           ]
  
    }
  ];

  const router = createBrowserRouter(pageUrls);

  return <RouterProvider router={router} />;
};
export default RouterConfig;
