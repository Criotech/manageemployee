import React, { Component } from 'react'
import { connect } from "react-redux";
import './result.css'

class RESULT extends Component {
    render() {
        let score = 0
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']    
        if (this.props.result) {
            for (var index = 0; index < this.props.result.length; index++) {
                if (this.props.result[index].right === this.props.result[index].userAns)
                score = score +1
            }
        }    
        return (
            <div>
                {(this.props.result) ? (<div className="container top">
                    You Scored <span style={{ color: '#8AAB1B' }}>{score}</span> / <span style={{ color: '#8AAB1B' }}>{this.props.result.length}</span> in Physics
                </div>) : "" }

                {(this.props.result) ? this.props.result.map((data, index)=>(
                     <div className="container solution">
                    <div className="res">
                        <p className="left">{data.question}</p>
                        <hr />
                        <div className="options">
                            {data.choices.map((choice, index)=>(
                                <tr >
                                <td>{letters[index]}.</td>
                                <td>{choice}</td>
                            </tr>
                            ))}
                            
                            
                        </div>
                        <div className="ans">
                            <h5>You Choice: <span style={{ color: '#8AAB1B' }}>{letters[data.userAns]} </span></h5>
                            <h5>Correct Anwser is <span style={{ color: '#8AAB1B' }}>{letters[data.right]}</span></h5>
                        </div>
                    </div>
                </div>
                )) : "" }  
                

               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.result
    }
}

export default connect(mapStateToProps)(RESULT)