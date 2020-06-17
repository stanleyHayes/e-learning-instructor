import React from "react";
import Layout from "../../components/layout/Layout";
import {Container} from "react-bootstrap";
import {Panel} from "rsuite";
import {connect} from "react-redux";

function CourseDetailPage({selectedCourse}) {
    return (
        <Layout>
            <Container className="py-5">
                <Panel bordered={true}>
                    <div>
                        <img
                            style={{width: "100%"}}
                            src={selectedCourse ? selectedCourse.image : ``}
                            alt={`${selectedCourse && selectedCourse.name} Cover`}
                        />
                    </div>
                    <div>
                        <h1>{selectedCourse && selectedCourse.name}</h1>
                        <h4>{selectedCourse && selectedCourse.description}</h4>
                        <p>Course Objective</p>
                        <p>{selectedCourse && selectedCourse.objectives}</p>
                        <p>Course Objective</p>
                        <p>{selectedCourse && selectedCourse.prerequisites}</p>
                    </div>
                </Panel>
            </Container>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.courses.loading,
        selectedCourse: state.courses.selectedCourse
    }
}
export default connect(mapStateToProps) (CourseDetailPage);
