import React from 'react';
import styles from "./../Profile/ProfileInfo/ProfileInfo.module.css";


class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode () {
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {

        return (
            <div>
                {!this.state.editMode && <span
                    className={styles.status}
                    onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
                {this.state.editMode && <input
                    onBlur={this.deactivateEditMode}
                    autoFocus={true}
                    type="text"
                    value={this.props.status}/>}
            </div>
        )
    }
}

export default ProfileStatus

