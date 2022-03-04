import Checkbox from '@Components/elements/checkbox/Checkbox'
import TextInput from '@Components/elements/input/TextInput'
import React from 'react'

function LogInSection() {
  return (
    <form className=''>
      <div className='grid-2-column-responsive-7'>
        <TextInput label='E-mail or Username' />
        <TextInput label='Password' />
      </div>

      <div className='mar-bot-2'>
        <Checkbox
          name='save'
          label='Keep me signed in'
          updateValue={() => { }}
        />
      </div>

      <button className='btn-primary'>Sign In</button>
    </form>
  )
}

export default LogInSection