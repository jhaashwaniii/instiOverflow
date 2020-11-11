import React, { Component } from 'react';
import "./main.scss";
import { useLocation } from 'react-router-dom';
import Card from "react-bootstrap/Card";
class Main extends Component {
    courses = { 
        CS744: "this is system course",
        CS725: "this is machine Learning course",
        CS601: "this is algorithms course",
        CS699: "this is Lab course"
      }
    goToForum(id) {
          console.log(id);
        
        // window.location =  "/dashboard/"+id;
        this.props.history.push({
            pathname: `/dashboard/${id}`,
            courseId:id
          });
    }
    render() {
        return (
            <div className="custom-main-container">
        {/* <Navbar
        //   {...this.props}
        //   tabs={[...this.state.tabs]}
        //   set_tabs={this.setTabs.bind(this)}
                        /> */}
                               
                {
                    Object.keys(this.courses).map((keyName, keyIndex) => <div>
                        <div onClick={() => this.goToForum(keyName)}>
                    <Card style={{ width: '180rem' }}>
                    {/* <CardActionArea component={SideBar} to="/questions"> */}
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{keyName}</Card.Title>
                                        <Card.Text>
                                        {this.courses[keyName]}
                                        </Card.Text>
                                    </Card.Body>
                                    
                                    </Card>
                                    </div>
                    </div>)
                      }
        </div>
        );
    }
}

export default Main;