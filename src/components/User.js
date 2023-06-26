import React from 'react';
import AddUser from './AddUser';
import { IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }
    // внутри этого компонента, мы получаем пользователя от Users
    // записываем его в собственную переменную 
    user = this.props.user;
    render() {
        return(
            <div className='user'>
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='delete-icon'/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className='edit-icon'/>
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <p>email: {this.user.email}</p>
                {/* <p>{this.user.bio}</p> */}
                <img src={this.user.avatar} alt={this.user.first_name} />
                {/* <p>Возраст: {this.user.age}</p> */}
                {/* <p><b>{this.user.isHappy ? 'Счастлив :)' : "Не особо :("}</b></p> */}
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default User;