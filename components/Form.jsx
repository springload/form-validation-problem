import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: 'laur',
      password: '',
      colourSelected: false,
      animals: [],
      tigerType: '',
      emailValid: true
    }
  }

  render(){
    return (
      <div>
        <form method='post' action=''>
            <h1>Fill out this awesome form</h1>
            <fieldset>
                <h3>Your details</h3>
                <p className={this.state.email.length > 0 ? this.state.emailValid != true && 'error' : ''}>
                    <label className='label' htmlFor='email'>
                        Email
                    </label>
                    <input type='text' id='email' name='email'></input>
                </p>
                <p>
                    <label className='label' htmlFor='password'>
                        Password
                    </label>
                    <input type='password' id='password' name='username'></input>
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

export default Form
