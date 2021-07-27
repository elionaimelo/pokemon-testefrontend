import React, { useState } from 'react'

import iconClose from 'assets/images/close.png'
import * as S from './styled'
import { ButtonInitial } from 'pages/Home/styled'
import { useForm } from 'react-hook-form'

function Modal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }

  const imageUpload = (e) => {
    const file = e.target.files[0]
    getBase64(file).then((base64) => {
      localStorage['fileBase64'] = base64
      console.debug('file stored', base64)
    })
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <S.ModalContainer>
      <div className="container">
        <header>
          <button className="close">
            <img src={iconClose} alt="" />
          </button>
        </header>
        <S.BodyModal>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="upload">
              <label className="customLabelFile" htmlFor="file"></label>
              <input
                id="file"
                type="file"
                {...register('picture', { required: true })}
                name="picture"
                onChange={imageUpload}
                className="fileInput"
              />
            </div>
            <div className="form-row">
              <label>Nome</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="form-row">
              <label>HP</label>
              <input type="number" placeholder="HP" />
            </div>
            <div className="form-row">
              <label>Peso</label>
              <input type="number" placeholder="Peso" />
            </div>
            <div className="form-row">
              <label>Altura</label>
              <input type="number" placeholder="Altura" />
            </div>
            <div className="form-row">
              <label className="divider">
                <span>Tipo</span>
              </label>
              <S.StyledSelect
                classNamePrefix="Select"
                options={options}
                value={{
                  value: 'vazio',
                  label: 'Selecione o(s) tipo(s)'
                }}
              />
            </div>
            <div className="form-row skills">
              <label className="divider">
                <span>Habilidades</span>
              </label>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <ButtonInitial to="/map">CRIAR POKEMON</ButtonInitial>
          </form>
        </S.BodyModal>
      </div>
    </S.ModalContainer>
  )
}

export default Modal
