import React, { Component } from 'react'
import './subject.css'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {allQuestions, startTest, userAns} from "../store/actions/index.js"

class SUBJECT extends Component {
    constructor() {
        super();
        this.state = {
            count: "",
            btn: "block",
            card: 'none'
        }
        this.beginTest = this.beginTest.bind(this)
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.quesData !== this.props.quesData) {
            this.setState({
                count: this.props.quesData.count
            })
        }
    }

    updateCount() {
        this.props.allQuestions().then(()=>{
            for (var index = 0; index < this.props.quesData.question.length; index++) {
                let data = {
                    _id: this.props.quesData.question[index]._id,
                    user: this.props.quesData.question[index].userAns
                }
                this.props.userAns(data)
            }
        })
        this.setState({
            btn: "none",
            card: "block"
        })
    }
    
    beginTest(){
        this.props.startTest(this.props.quesData.question)
        this.setState({
            card: "none"
        })
    }

    

    render() {
        return (
            <div className="subject">

                <div className="container">
                    <div className="wrapper">
                        <div className="subject1">
                            <div className="row">
                                <div className="col-md-12 col-lg-3">
                                    <button className="btn btn-lg" style={{backgroundColor: '#8AAB1B', color: 'white', borderRadius: "0", display: this.state.btn}} onClick={() => this.updateCount()}>GO TO TEST</button>
                                    <div className="card scard" style={{display: this.state.card}}>
                                        <div className="shead">
                                            <h4 className="sh3">Physics</h4>
                                            <p className="sp">Test on the study of physics principles and mathematics</p>
                                        </div>
                                        <div className="sbody">
                                            <div className="row">
                                                <div className="col-4">
                                                    <span className="sbicon"><i className="fa fa-question-circle" aria-hidden="true"></i> </span>
                                                </div>
                                                <div className="col-4">
                                                    Question
                                                </div>
                                                <div className="col-4">
                                                    {this.state.count}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-4">
                                                    <span className="sbicon"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                                                </div>
                                                <div className="col-4">
                                                    Duration
                                                </div>
                                                <div className="col-4">
                                                    50min
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sfoot">
                                            <button onClick= {this.beginTest} className="sfbtn"><span className="mr-2"><i className="fa fa-power-off" aria-hidden="true"></i></span> Start now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({allQuestions, startTest, userAns}, dispatch)

}

const mapStateToProps = (state) => {
    return {
        quesData: state.questions
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SUBJECT)