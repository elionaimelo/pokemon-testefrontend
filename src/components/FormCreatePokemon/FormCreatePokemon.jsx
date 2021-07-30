import React, { useState, useEffect } from 'react'

import * as S from './styled'
import UploadFoto from 'assets/images/upload_foto.png'
import api from 'services/api'

function FormCreatePokemon({
  id = 'modal',
  onClose = () => {},
  setStoragePokemons
}) {
  // getting the values of local storage
  const getDatafromLS = () => {
    const data = localStorage.getItem('pokemons')
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }

  //getting types from the api
  const [tiposSelect, setTiposSelect] = useState(getDatafromLS)

  useEffect(() => {
    api.get('type').then(({ data }) => {
      setTiposSelect(data.results)
    })
  }, [])

  const options = tiposSelect.map((tipo) => {
    return {
      value: tipo.name,
      label: tipo.name
    }
  })
  //end getting types from the api

  // array of objects state
  const [pokemons, setPokemons] = useState(getDatafromLS)

  // input field states
  const [nome, setNome] = useState('')
  const [hp, setHp] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [tipo, setTipo] = useState('')
  const [habilidade1, setHabilidade1] = useState('')
  const [habilidade2, setHabilidade2] = useState('')
  const [habilidade3, setHabilidade3] = useState('')
  const [habilidade4, setHabilidade4] = useState('')

  // states for option select
  const [text, setText] = useState(options[0])

  // form submit event
  const handleAddPokemon = (e) => {
    e.preventDefault()

    let pokemon = {
      imagePokemon,
      nome,
      hp,
      peso,
      altura,
      tipo,
      habilidade1,
      habilidade2,
      habilidade3,
      habilidade4
    }
    setPokemons([...pokemons, pokemon])
  }

  //saving data to localstorage
  useEffect(() => {
    setStoragePokemons(pokemons)
    localStorage.setItem('pokemons', JSON.stringify(pokemons))
  }, [pokemons])

  //When selecting option change text and save storage
  const onChangeSelect = (selectedOption) => {
    setText(selectedOption)
    setTipo(selectedOption.value)
    console.log(`Option selected:`, selectedOption)
  }

  //imageUpload
  const [imagePokemon, setImagePokemon] = useState(UploadFoto)

  const handleImage = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePokemon(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <S.FormCreatePokemon onSubmit={handleAddPokemon}>
      <div className="form-row">
        <label htmlFor="fileUp">
          <img src={imagePokemon} className="uploadImage" alt="" />
        </label>
        <input
          id="fileUp"
          type="file"
          name="image-upload"
          accept="image/*"
          onChange={handleImage}
        />
      </div>
      <div className="form-row">
        {/* {pokemons.length > 0 && (
          <>
            <div>
              Nome do pokemon q pegou do localStorage:{' '}
              {pokemons.map((pokemons) => pokemons.nome)}
            </div>
          </>
        )}{' '}
        {pokemons.length < 1 && <div>Não há nenhum pokemon cadastrado</div>} */}
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome"
          name="namePoke"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          // {...register('namePoke', {
          //   required: 'Este campo é obrigatório',
          //   minLength: {
          //     value: 3,
          //     message: 'O campo precisa ter mais de 3 letras'
          //   }
          // })}
        />
        {/* {errors.namePoke && (
          <span className="helpTip">{errors.namePoke.message}</span>
        )} */}
      </div>
      <div className="form-row">
        <label>HP</label>
        <input
          type="number"
          name="hp"
          placeholder="HP"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          // {...register('hp', {
          //   required: 'Este campo é obrigatório',
          //   min: 1,
          //   max: 99
          // })}
        />
        {/* {errors.hp && <span className="helpTip">O campo {} é obrigatório</span>} */}
      </div>
      <div className="form-row">
        <label>Peso</label>
        <input
          type="number"
          placeholder="Peso"
          name="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          // {...register('peso', {
          //   required: 'Este campo é obrigatório',
          //   min: 1
          // })}
        />
        {/* {errors.peso && (
          <span className="helpTip">O campo {} é obrigatório</span>
        )} */}
      </div>
      <div className="form-row">
        <label>Altura</label>
        <input
          type="number"
          name="altura"
          placeholder="Altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          // {...register('altura', {
          //   required: 'Este campo é obrigatório',
          //   min: 1,
          //   max: 220
          // })}
        />
      </div>
      {/* {errors.altura && (
        <span className="helpTip">O campo {} é obrigatório</span>
      )} */}
      <div className="form-row">
        <label className="divider">
          <span>Tipo</span>
        </label>
        <S.StyledSelect
          classNamePrefix="Select"
          name="tipo"
          options={options}
          onChange={onChangeSelect}
          value={text}
        />
      </div>
      <div className="form-row skills">
        <label className="divider">
          <span>Habilidades</span>
        </label>
        <input
          type="text"
          value={habilidade1}
          onChange={(e) => setHabilidade1(e.target.value)}
          // {...register('habilidade1', {
          //   required: 'Este campo é obrigatório'
          // })}
        />
        <input
          type="text"
          value={habilidade2}
          onChange={(e) => setHabilidade2(e.target.value)}
          // {...register('habilidade2', {
          //   required: 'Este campo é obrigatório'
          // })}
        />
        <input
          type="text"
          value={habilidade3}
          onChange={(e) => setHabilidade3(e.target.value)}
          // {...register('habilidade3', {
          //   required: 'Este campo é obrigatório'
          // })}
        />
        <input
          type="text"
          value={habilidade4}
          onChange={(e) => setHabilidade4(e.target.value)}
          // {...register('habilidade4', {
          //   required: 'Este campo é obrigatório'
          // })}
        />
      </div>
      <button>Criar pokemon</button>
    </S.FormCreatePokemon>
  )
}

export default FormCreatePokemon
