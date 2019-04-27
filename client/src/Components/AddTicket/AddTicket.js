import React, { Component } from "react";
import "./AddTicket.css";

class AddTicket extends Component {
    render() {
        return (
            <div className="universal_card shadow">
            <div className="card-title">
            <h5>Submit a Service Ticket</h5>
            </div>
                
                
                <div className="card-body">
                <form>
                    <div className="form-group">
                        <label >Subject</label>
                        <input name="ticketSubject"  onChange={this.props.handleInputChange} value={this.props.state.ticketSubject} type="text" className="form-control" id="ticketSubject" aria-describedby="subject" placeholder="Subject"/>       
                    </div>
                        <div className="form-group">
                        <label >Where is the problem?</label>
                            <select name="ticketLocation"  onChange={this.props.handleInputChange} value={this.props.state.ticketLocation} className="form-control" id="ticketLocation">
                                <option>General Grounds</option>
                                <option>Another Residence</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <small >Please provide a brief description of the problem you need resolved and we will get back to you as soon  as possible.</small>
                            <textarea name="ticketDescription"  onChange={this.props.handleInputChange} value={this.props.state.ticketDescription} className="form-control" id="ticketDescription" rows="3"></textarea>
                        </div> 
                        <button name="newTicket" onClick={this.props.handleFormSubmit} type="button" className="btn AddTicket_btn">Submit</button>
                </form>
                </div>
                
            </div>
                );
            }
        }
        
export default AddTicket;