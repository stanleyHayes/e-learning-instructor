import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavigationBar(props) {
    return (
        <Navbar collapseOnSelect={true} expand="lg" sticky="top" variant="dark" bg="dark">
            <Navbar.Brand>e-Learning Instructor</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="ml-auto" activeKey="home"
                     defaultActiveKey="home" navbar={true}>

                    <Nav.Link>
                        <Link to="/" className="text-white">
                            Home
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/courses" className="text-white">
                            Courses
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/profile" className="text-white">
                            Profile
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/topics" className="text-white">
                            Forum
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/quizzes" className="text-white">
                            Quizzes
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/assignments" className="text-white">
                            Assignments
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/assessment" className="text-white">
                            Assessment
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/reviews" className="text-white">
                            Reviews
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/faqs" className="text-white">
                            FAQs
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/questions" className="text-white">
                            Questions
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/account" className="text-white">
                            Account
                        </Link>
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;
