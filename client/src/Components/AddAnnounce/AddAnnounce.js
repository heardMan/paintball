import React, { Component } from "react";
import "./AddAnnounce.css";

class AddAnnounce extends Component {
    render() {
        return (
            <div>
                <div className="col col-md-6 mx-auto announcement_card book shadow">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="announcement_title">Add an Announcement</h3>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                    <form>
                        <div className="form-group">
                            <label >Title</label>
                            <input name="announceTitle"  onChange={this.props.handleInputChange} value={this.props.state.announceTitle} type="text" className="form-control" id="announceTitle" aria-describedby="title"/>       
                        </div>
                        <div className="form-group">
                            <label>Announcement Description</label>
                            <textarea name="announceDescription"  onChange={this.props.handleInputChange} value={this.props.state.announceDescription} className="form-control" id="annouceDescription" rows="3"></textarea>
                        </div> 
                        <button name="newAnnounce" onClick={this.props.handleFormSubmit} type="button" className="btn announcement_btn">Submit</button>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
                );
            }
        }
        
export default AddAnnounce;