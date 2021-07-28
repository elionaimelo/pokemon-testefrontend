import React, { useState, useCallback, useEffect } from 'react'
import ImageUploading from 'react-images-uploading'

import iconClose from 'assets/images/close.png'
import * as S from './styled'
import { useForm } from 'react-hook-form'

import { useLocalStorage } from 'hooks/useLocalStorage'
import api from 'services/api'

function Modal() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid }
  // } = useForm()
  // const onSubmit = (data) => console.log(data)

  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = (error) => reject(error)
  //     reader.readAsDataURL(file)
  //   })
  // }

  // const imageUpload = (e) => {
  //   const file = e.target.files[0]
  //   getBase64(file).then((base64) => {
  //     localStorage['fileBase64'] = base64
  //     console.debug('file stored', base64)
  //   })
  // }

  const [loaded, setLoaded] = useState(false)
  const [storage, setStorage] = useLocalStorage('formValues')
  const [image, setImage] = useState()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm()
  const onSubmit = useCallback(() => alert('submited'), [])
  const formData = watch()

  useEffect(() => {
    if (!loaded) {
      reset(storage)
      setLoaded(true)
    }
  }, [storage, reset, loaded])

  const onChangeImage = (image) => {
    console.log(image)
    setImage(image)
    // imageUpload(image)
  }

  const onChange = () => {
    setStorage(formData)
  }

  const [tipos, setTipos] = useState([])

  useEffect(() => {
    api.get('type').then(({ data }) => {
      setTipos(data.results)
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(tipos)

  const options = tipos.map((tipo) => {
    return {
      value: tipo.name,
      label: tipo.name
    }
  })

  return (
    <S.ModalContainer>
      <div className="container">
        <header>
          <button className="close">
            <img src={iconClose} alt="" />
          </button>
        </header>
        <S.BodyModal>
          <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
            <ImageUploading
              value={image}
              onChange={onChangeImage}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button onClick={onImageUpload} {...dragProps}></button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image.data_url} alt="" width="300" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageRemove(index)}>
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            <div className="form-row">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome"
                name="namePoke"
                {...register('namePoke', {
                  required: 'Este campo é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O campo precisa ter mais de 3 letras'
                  }
                })}
              />
              {errors.namePoke && (
                <span className="helpTip">{errors.namePoke.message}</span>
              )}
            </div>
            <div className="form-row">
              <label>HP</label>
              <input
                type="number"
                name="hp"
                placeholder="HP"
                {...register('hp', {
                  required: 'Este campo é obrigatório',
                  min: 1,
                  max: 99
                })}
              />
              {errors.hp && (
                <span className="helpTip">O campo {} é obrigatório</span>
              )}
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
            <button disabled={!isValid}>Criar pokemon</button>
          </form>
        </S.BodyModal>
      </div>
    </S.ModalContainer>
  )
}

export default Modal
