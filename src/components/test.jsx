import React, { Component } from 'react'
import './test.css'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { userAns, startTest, resultTest} from "../store/actions/index.js"


class Test extends Component {
    constructor() {
        super()
        this.state = {
            quesIndex: 0,
            pickedAns: [],
            options: "",
            show: ""
        }
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.selectNo = this.selectNo.bind(this)        
        this.submitAns = this.submitAns.bind(this)
    }

    componentDidUpdate(previousProps, previousState) {
        let data = {
            _id: this.props.test[this.state.quesIndex]._id,
            userAns: this.state.options
        }

        if (previousState.options !== this.state.options){
            this.props.userAns(data).then(()=>{
                this.props.startTest().then(()=>{
                    this.setState({
                    options: this.props.test[this.state.quesIndex].userAns                        
            })
                })
            })
        }
        if (previousState.quesIndex !== this.state.quesIndex) {
             this.setState({
                    options: this.props.test[this.state.quesIndex].userAns                        
            })
        }
    }

    selectNo(data){
        console.log(data)
        this.setState((prevState) => {
            return {
                quesIndex: data
            }
        })
    }

    addOne() {
        this.setState((prevState) => {
            return {
                quesIndex: prevState.quesIndex + 1,
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                quesIndex: prevState.quesIndex - 1
            }
        })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ 
            [name]: value,
         })
    }

    submitAns(){
        this.props.resultTest()
        this.setState({
            show: "none"
        })
    }

    render() {
        console.log(this.state.options)
        let questions = this.props.test
        let quesLength
        let show = 'none'
        let prev = "none"
        if (questions) {
            console.log(questions)
            quesLength = questions.length
            console.log(questions[this.state.quesIndex].userAns)
            show = "block"
        } else {
            console.log('it is null')
        }

        if (this.state.quesIndex > 0){
            prev = "block"
        }
       
        return (
            <div style={{display: show}}>
                <div style={{display: this.state.show}} >


                <div className="container">
                    <div className="twrapper">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="details">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="licon">
                                                        <i className="fa fa-grav" aria-hidden="true"></i>
                                                    </div>
                                                </td>
                                                <td className='tleft'>
                                                    <p className="t1">Exam Details</p>
                                                    <p className="t2"><b> JAMB CBT</b></p>
                                                    <p className="t3">{this.state.quesIndex + 1} / {quesLength} </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="details">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>

                                                    <div className="licon">
                                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                    </div>
                                                </td>
                                                <td className='tleft'>
                                                    <p className="t1">Timer</p>
                                                    <p className="t2" style={{ color: "#8AAB1B" }}><b> 3:13 SECS</b></p>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 ">
                                <div className="details">
                                    <table>
                                        <tbody>

                                            <tr>
                                                <td>

                                                    <div className="licon">
                                                        <i className="fa fa-grav" aria-hidden="true"></i>
                                                    </div>
                                                </td>
                                                <td className='tleft'>
                                                    <p className="t1">Exam Details</p>
                                                    <p className="t2"><b> JAMB CBT</b></p>
                                                    <p className="t3">{this.state.quesIndex + 1} / {quesLength} </p>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* boddy */}
                <div className="container">
                    <div className="tbody">
                        <div className="row">


                            {/* questions section */}
                            <div>
                                <div className="col-lg-8">
                                    <div className="question">
                                        <div className="qhead">
                                            <p>{(questions) ? questions[this.state.quesIndex].question : ""}</p>
                                        </div>

                                        <div className="choices">
                                            <table>
                                                <tbody>
                                                    {(questions) ? questions[this.state.quesIndex].choices.map((choice, index) =>
                                                        (<tr key={index} >
                                                            <td><input type="radio" checked={ this.state.options === index }  onChange={this.handleChange} name="options" value={index} /></td>
                                                            <td><span style={{ marginLeft: 20 }}>{choice}</span></td>
                                                        </tr>)
                                                    ) : ""}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* question list section */}
                            <div className="col-lg-4">
                                <div className="item">
                                    <div className="card cd">
                                        <div className="ihead">
                                            Account
                                            <hr />
                                        </div>
                                        <div className="keys">
                                            <div className="row">
                                                {(questions) ? questions.map((ques, index) =>
                                                    (
                                                        <button style={{ borderColor: (typeof ques.userAns === 'number') ? "red" : "lightblue" }} onClick={()=>this.selectNo(index)} key={index} className="btn btn-light key">{index +1}</button>

                                                    )
                                                ) : "waiting"}
                                            </div>
                                        </div>
                                        <div className="rep">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><button className="btn btn-danger"></button></td>
                                                        <td>signifies Answered question</td>
                                                    </tr>
                                                    <tr>
                                                        <td><button className="btn" style={{ backgroundColor: "lightblue", color: "white" }}></button></td>
                                                        <td>signifies Skipped question</td>
                                                    </tr>

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* footer */}
                <div className="container">
                    <div className="footer">
                        <div className="row">
                            <div className="col-lg-4">
                                <button onClick={this.minusOne} style={{display: prev}} className="fbtn">Prevoius</button>
                            </div>
                            <div className="col-lg-4">
                                <button onClick={this.addOne} style={{display: (this.state.quesIndex === quesLength-1) ? 'none' : 'block' }} className="fbtn">Next</button>
                            </div>
                            <div className="col-lg-4">
                                <button className="fbtn" onClick={this.submitAns}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                                                            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.test
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ userAns, startTest, resultTest }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Test)