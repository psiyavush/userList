import React from 'react';
import User from './User';

class Users extends React.Component {
    
    render() {
        if(this.props.users.length > 0)
            return (<div>
                {this.props.users.map(element => (
                    // перебирая массив, обращаемся к компоненту User 
                    // указываем текущий код и передаем в User текущего пользователя (user)
                    <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={element.id} user={element}/>
                ))}
            </div>)
        else
            return (<div className='user'>
                    <h3>Пользователей нет</h3>
            </div>)
    }
}

export default Users;