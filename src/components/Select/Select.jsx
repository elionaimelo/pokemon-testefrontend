import React, { useState } from 'react'
import * as S from './styled'

const SelectComponent = (props) => {
  const [text, setText] = useState(props.options[0])

  const onChange = (selectedOption) => {
    setText(selectedOption)
    console.log(`Option selected:`, selectedOption)
  }

  return (
    <S.StyledSelect
      classNamePrefix="Select"
      name="tipo"
      options={props.options}
      onChange={onChange}
      value={text}
    />
  )
}

export default SelectComponent
