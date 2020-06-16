import React from "react";
import Layout from "../../components/layout/Layout";
import {Grid} from "rsuite";

function ProfilePage(props) {
    return (
        <Layout>
            <div className="py-5" style={{backgroundColor: "#ddd", minHeight: "100vh"}}>
                <Grid fluid={false}>
                    <h1>Profile Page</h1>
                </Grid>
            </div>
        </Layout>
    )
}

export default ProfilePage;
