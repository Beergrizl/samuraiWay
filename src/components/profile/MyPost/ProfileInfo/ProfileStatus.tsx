import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import {mapStateToPropsType} from "../../ProfileContainer";


type StatusType = {
    status: string,
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component <StatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode=()=> {
        this.setState({
            editMode: true
        })
    }
        deactivateMode=()=> {
            this.setState({
                editMode: false
            })

            this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }


render() {

    return (
        <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateMode}>{this.props.status || '_____'}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode}
                        value={this.state.status}/>
            </div>
            }
        </div>)
}
}

export default ProfileStatus;