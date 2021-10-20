import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import {mapStateToPropsType} from "../../ProfileContainer";


type StatusType = {
    status: string
}

class ProfileStatus extends React.Component <StatusType> {

    state = {
        editMode: false
    }

    activateMode() {
        this.setState({
            editMode: true
        })
    }
        deactivateMode() {
            this.setState({
                editMode: false
            })
    }


render() {

    return (
        <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input  autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.props.status}/>
            </div>
            }
        </div>)
}
}

export default ProfileStatus;