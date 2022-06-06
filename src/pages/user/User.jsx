import React from 'react'

//Styles
import "./user.css"

//Libraries
import { 
    CalendarToday, 
    LocationSearching, 
    MailOutline, 
    PermIdentity, 
    PhoneAndroid, 
    Publish 
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className='userTitle'>Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                            alt="" 
                            className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">White Lion</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">whiteback10000</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.04.2030</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">960 785 952</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">whitelion@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Moscu || Rusia</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input 
                                    type="text" 
                                    placeholder="whiteback10000" 
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="White Lion" 
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input 
                                    type="text" 
                                    placeholder="whitelion@gmail.com" 
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input 
                                    type="text" 
                                    placeholder="960 785 952" 
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input 
                                    type="text" 
                                    placeholder="Moscu || Rusia" 
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img 
                                    src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                    alt=""
                                    className='userUpdateImg' 
                                />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{ display: "none" }}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
