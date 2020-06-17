import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-default.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomePage from "./pages/authentication/WelcomePage";
import IndexPage from "./pages/home/IndexPage";
import SignInPage from "./pages/authentication/SignInPage";
import AccountPage from "./pages/account/AccountPage";
import AssessmentPage from "./pages/assessment/AssessmentPage";
import AssignmentsPage from "./pages/assignments/AssignmentsPage";
import ChangePasswordPage from "./pages/authentication/ChangePasswordPage";
import RecoverPasswordPage from "./pages/authentication/RecoverPasswordPage";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import QuizzesPage from "./pages/quizzes/QuizzesPage";
import QuizDetailPage from "./pages/quizzes/QuizDetailPage";
import FAQPage from "./pages/faq/FAQPage";
import TopicsPage from "./pages/forum/TopicsPage";
import ProfilePage from "./pages/profile/ProfilePage";
import CreateQuizPage from "./pages/quizzes/CreateQuizPage";
import QuestionsPage from "./pages/questions/QuestionsPage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import CreateCoursePage from "./pages/courses/CreateCoursePage";
import CreateAssignment from "./pages/assignments/CreateAssignmentPage";
import CreateQuestionPage from "./pages/questions/CreateQuestionPage";
import CreateTopicPage from "./pages/forum/CreateTopicPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/*<Route path="/" exact>*/}
                {/*    <IndexPage/>*/}
                {/*</Route>*/}

                <Route exact={true} path="/welcome">
                    <WelcomePage/>
                </Route>

                <Route exact={true} path="/login">
                    <SignInPage/>
                </Route>

                <Route exact={true} path="/account">
                    <AccountPage/>
                </Route>

                {/*<Route path="/assessment">*/}
                {/*    <AssessmentPage/>*/}
                {/*</Route>*/}

                <Route exact={true} path="/assignments">
                    <AssignmentsPage/>
                </Route>

                <Route exact={true} path="/change-password">
                    <ChangePasswordPage/>
                </Route>

                <Route exact={true} path="/recover-password">
                    <RecoverPasswordPage/>
                </Route>

                <Route exact={true} path="/courses/:courseID">
                    <CourseDetailPage/>
                </Route>

                <Route exact={true} path="/reviews">
                    <ReviewsPage/>
                </Route>

                <Route exact={true} path="/quizzes">
                    <QuizzesPage/>
                </Route>

                <Route exact={true} path="/quizzes/:quizID">
                    <QuizDetailPage/>
                </Route>

                <Route exact={true} path="/faqs">
                    <FAQPage/>
                </Route>

                <Route exact={true} path="/topics">
                    <TopicsPage/>
                </Route>

                {/*<Route path="/profile">*/}
                {/*    <ProfilePage/>*/}
                {/*</Route>*/}

                <Route exact={true} path="/new/quiz">
                    <CreateQuizPage/>
                </Route>

                <Route exact={true} path="/questions">
                    <QuestionsPage/>
                </Route>

                <Route exact={true} path="/edit-profile">
                    <EditProfilePage/>
                </Route>

                <Route path="/new/course" exact={true}>
                    <CreateCoursePage/>
                </Route>

                <Route path="/new/assignment" exact={true}>
                    <CreateAssignment/>
                </Route>

                <Route path="/new/question" exact={true}>
                    <CreateQuestionPage/>
                </Route>

                <Route exact={true} path="/new/topic">
                    <CreateTopicPage/>
                </Route>

                <Route exact={true} path="/">
                    <CoursesPage/>
                </Route>


                <Route exact={true} path="/courses/:courseID">
                    <CourseDetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
