import React, { Component } from "react";
import "./AddAnnounce.css";

class AddAnnounce extends Component {
    render() {
        return (
            <div className="col mx-auto universal_card shadow">
                
                    <div className="card-title">
                        <h3>Add an Announcement</h3>
                    </div>
                
                <div className="card-body">
                
                <form className="col">
                    <div className="form-group">
                        <label >Title</label>
                        <input name="announceTitle"  onChange={this.props.handleInputChange} value={this.props.state.announceTitle} type="text" className="form-control" id="announceTitle" aria-describedby="title" placeholder="Title"/>       
                    </div>
                    <div className="form-group">
                        <small >Announcement Description</small>
                        <textarea name="announceDescription"  onChange={this.props.handleInputChange} value={this.props.state.announceDescription} className="form-control" id="annouceDescription" rows="3"></textarea>
                    </div> 
                    <button name="newAnnounce" onClick={this.props.handleFormSubmit} type="button" className="btn manageProperties_btn">Submit</button>
                </form>
                
                </div>
            </div>
                );
            }
        }
        
export default AddAnnounce;