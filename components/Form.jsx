import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      colour: '',
      animals: [],
      tigerType: '',
      errors: [],
      valid: false

    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.addErrorClass = this.addErrorClass.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleUserInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  validate = (e) => {
    e.preventDefault()
    const {email, errors} = this.state
    console.log('Validation happened!')
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) errors.push('email')

    
    this.setState({
      valid: errors.length == 0,
      errors
    })
  }

  addErrorClass = (error) => {
    return this.state.errors.includes(error)
      ? 'error'
      : ''
  }

  displayErrorMessage = (error) => {
    switch(error) {
      case 'email': return 'Please enter a valid email address.'
      default: return
    }
  }

  render(){
    return (
      <div>
        <form method='post' action='' onSubmit={this.validate}>
            <h1>Fill out this awesome form</h1>
            <fieldset>
                <h3>Your details</h3>
                <p className={this.addErrorClass('email')}>
                    <label className='label' htmlFor='email'>
                        Email
                    </label>
                    <input type='text' id='email' name='email' value={this.state.email} onChange={this.handleUserInput}></input>
                </p>
                <p>
                    <label className='label' htmlFor='password'>
                        Password
                    </label>
                    <input type='password' id='password' name='password'></input>
                </p>
            </fieldset>

            <fieldset>
                <h3>Your animal</h3>
                <p>
                    <label className='label' htmlFor='colour'>
                        Colour
                    </label>
                    <select name='colour' id='colour'>
                        <option value=''>Choose colour</option>
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                        <option value='red'>Red</option>
                        <option value='black'>Black</option>
                        <option value='brown'>Brown</option>
                    </select>
                </p>
                <p>
                    <span className="label">
                        Animal
                    </span>

                    <input type='checkbox' name='animal' value='bear' id='bear'></input>
                    <label htmlFor='bear'>
                         Bear
                    </label>

                    <input type='checkbox' name='animal' value='tiger' id='tiger'></input>
                    <label htmlFor='tiger'>
                        Tiger
                    </label>

                    <input type='checkbox' name='animal' value='snake' id='snake'></input>
                    <label htmlFor='snake'>
                         Snake
                    </label>

                    <input type='checkbox' name='animal' value='donkey' id='donkey'></input>
                    <label htmlFor='donkey'>
                         Donkey
                    </label>

                </p>
                <p>
                    <label className='label' htmlFor='tiger_type'>
                        Type of tiger
                    </label>
                    <input type='text' name='tiger_type' id='tiger_type'></input>
                </p>
            </fieldset>
            {this.state.errors.length > 0 && <span>{this.state.errors.map(error => <p className='error'>{this.displayErrorMessage(error)}</p>)}</span>}
            <fieldset>
                <p>
                    <input type='submit' value='Create account'></input>
                </p>
            </fieldset>
        </form>
      </div>
    )
  }

}

// className={this.state.email.length > 0 ? this.state.emailValid != true && 'error': ''}
export default Form
