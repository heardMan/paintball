import React, { Component } from "react";

class AddTicket extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <h3>Submit a Service Ticket</h3>
                    </div>
                </div>
                <div className="row">
                <div className="col-12">
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
                        <button name="newTicket" onClick={this.props.handleFormSubmit} type="button" className="btn btn-primary">Submit</button>
                </form>
                </div>
                </div>
            </div>
                );
            }
        }
        
export default AddTicket;