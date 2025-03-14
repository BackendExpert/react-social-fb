import React from 'react'
import DefaultInput from '../../components/Forms/DefaultInput'
import DefaultTextArea from '../../components/Forms/DefaultTextArea'
import DefualtSelect from '../../components/Forms/DefualtSelect'

const Posts = () => {
    const inputoption = [
        {name: 'Option1', value: 'Option 1'},
        {name: 'Option2', value: 'Option 2'},
        {name: 'Option3', value: 'Option 3'},
        {name: 'Option4', value: 'Option 4'},
        {name: 'Option5', value: 'Option 5'},
    ]
  return (
    <div>
        <DefaultInput placeholder={"Placeholder"}/>
        <br /><br />
        <DefaultTextArea placeholder={"Text Area Placeholder"} />
        <br /><br />
        <DefualtSelect inputoption={inputoption} defultinput={"Select Option"}/>
    </div>
  )
}

export default Posts