import React, { useState, useCallback, useEffect } from 'react'
import ImageUploading from 'react-images-uploading'

import * as S from 'components/Modal/styled'
import { useForm } from 'react-hook-form'

import { useLocalStorage } from 'hooks/useLocalStorage'
import api from 'services/api'

function FormCreatePokemon({ id = 'modal', onClose = () => {} }) {
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
  const [select, setSelect] = useState()
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

  const options = tipos.map((tipo) => {
    return {
      value: tipo.name,
      label: tipo.name
    }
  })

  const handleOutsiteModal = (e) => {
    if (e.target.id === id) onClose()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
      <ImageUploading
        value={image}
        onChange={onChangeImage}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button onClick={onImageUpload} {...dragProps}></button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="300" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageRemove(index)}>Remover</button>
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
        {errors.hp && <span className="helpTip">O campo {} é obrigatório</span>}
      </div>
      <div className="form-row">
        <label>Peso</label>
        <input
          type="number"
          placeholder="Peso"
          name="peso"
          {...register('peso', {
            required: 'Este campo é obrigatório',
            min: 1
          })}
        />
        {errors.peso && (
          <span className="helpTip">O campo {} é obrigatório</span>
        )}
      </div>
      <div className="form-row">
        <label>Altura</label>
        <input
          type="number"
          name="altura"
          placeholder="Altura"
          {...register('altura', {
            required: 'Este campo é obrigatório',
            min: 1,
            max: 220
          })}
        />
      </div>
      {errors.altura && (
        <span className="helpTip">O campo {} é obrigatório</span>
      )}
      <div className="form-row">
        <label className="divider">
          <span>Tipo</span>
        </label>
        <S.StyledSelect
          classNamePrefix="Select"
          name="tipo"
          onChange={(e) => setSelect(e.value)}
          options={options}
        />
      </div>
      <div className="form-row skills">
        <label className="divider">
          <span>Habilidades</span>
        </label>
        <input
          type="text"
          {...register('habilidade1', {
            required: 'Este campo é obrigatório'
          })}
        />
        <input
          type="text"
          {...register('habilidade2', {
            required: 'Este campo é obrigatório'
          })}
        />
        <input
          type="text"
          {...register('habilidade3', {
            required: 'Este campo é obrigatório'
          })}
        />
        <input
          type="text"
          {...register('habilidade4', {
            required: 'Este campo é obrigatório'
          })}
        />
      </div>
      <button disabled={!isValid} onClick={handleOutsiteModal}>
        Criar pokemon
      </button>
    </form>
  )
}

export default FormCreatePokemon
