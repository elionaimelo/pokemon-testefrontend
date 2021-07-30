import React, { useState, useEffect } from 'react'

import * as S from 'components/Modal/styled'
import UploadFoto from 'assets/images/upload_foto.png'
import api from 'services/api'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//validation form
const schema = yup.object().shape({
  nome: yup.string().required(),
  hp: yup.number().required().positive().integer(),
  peso: yup.number().positive(),
  altura: yup.number().positive().integer(),
  tipo: yup.string().required(),
  habilidade1: yup.string().required(),
  habilidade2: yup.string().required(),
  habilidade3: yup.string().required(),
  habilidade4: yup.string().required()
})

const { register, handleSubmit, errors } = useForm({
  resolver: yupResolver(schema)
})

function FormCreatePokemon() {
  //getting types from the api
  const [tiposSelect, setTiposSelect] = useState([])

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
  const [pokemons, setPokemons] = useState([])

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

  const onSubmit = (data) => handleAddPokemon(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <img src={imagePokemon} className="uploadImage" alt="" />
        <input
          id="fileUp"
          type="file"
          name="imageUpload"
          accept="image/*"
          onChange={handleImage}
        />
      </div>
      <div className="form-row">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          {...register('nome')}
        />
        <p>{errors.nome.message}</p>
      </div>
      <div className="form-row">
        <label>HP</label>
        <input
          type="number"
          name="hp"
          placeholder="HP"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Peso</label>
        <input
          type="number"
          placeholder="Peso"
          name="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Altura</label>
        <input
          type="number"
          name="altura"
          placeholder="Altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>

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
          name="habilidade1"
          value={habilidade1}
          onChange={(e) => setHabilidade1(e.target.value)}
        />
        <input
          type="text"
          name="habilidade2"
          value={habilidade2}
          onChange={(e) => setHabilidade2(e.target.value)}
        />
        <input
          type="text"
          name="habilidade3"
          value={habilidade3}
          onChange={(e) => setHabilidade3(e.target.value)}
        />
        <input
          type="text"
          name="habilidade4"
          value={habilidade4}
          onChange={(e) => setHabilidade4(e.target.value)}
        />
      </div>
      <button>Criar pokemon</button>
    </form>
  )
}

export default FormCreatePokemon
