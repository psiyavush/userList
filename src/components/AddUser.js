import React from 'react';

class AddUser extends React.Component {
  userAdd = {}
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.user ? this.props.user.first_name : '',
      last_name: this.props.user ? this.props.user.last_name : '',
      email: this.props.user ? this.props.user.email : '',
      avatar: this.props.user ? this.props.user.avatar : ''
      // bio: this.props.bio ? this.props.user.bio : '',
      // age: this.props.user ? this.props.user.age : '',
      // isHappy: this.props.user ? this.props.user.isHappy : false
    }
  }
  render() {
    return <form ref={(el) => this.myForm = el}>
            <input placeholder='Имя' value={this.state.first_name}  onChange={(e) => this.setState({first_name: e.target.value})}/>
            <input placeholder='Фамилия' value={this.state.last_name} onChange={(e) => this.setState({last_name: e.target.value})}/>
            <input placeholder='email' value={this.state.email}  onChange={(e) => this.setState({email: e.target.value})}/>
            <input placeholder='Ссылка на аватар' value={this.state.avatar}  onChange={(e) => this.setState({avatar: e.target.value})}/>
            {/* <textarea placeholder='Биография' value={this.state.bio}  onChange={(e) => this.setState({bio: e.target.value})}/> */}
            {/* <input placeholder='Возраст' value={this.state.age}  onChange={(e) => this.setState({age: +e.target.value})}/> */}
            {/* <label htmlFor="isHappy">Счастлив?</label>
            <input type='checkbox' value={this.state.isHappy}  id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/> */}
            <button type="button" onClick={() => {
                this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                avatar: this.state.avatar
                // bio: this.state.bio,
                // age: this.state.age,
                // isHappy: this.state.isHappy
              }
              if(this.props.user){
                this.userAdd.id = this.props.user.id
              }
              this.props.onAdd(this.userAdd)
              // this.myForm.reset()
              // т.к. на каком то этапе reset() перестал работать, ввожу ручную форму очистки полей
              this.setState({
                first_name: '',
                last_name: '',
                email: '',
                avatar: ''
              });
              
            }}>Добавить</button>
        </form>
  }
}

export default AddUser;