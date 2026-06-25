import { createApi } from '@reduxjs/toolkit/query/react'
import query from './query'
import { BASE_URL } from '../constance/secret'

export const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: query.baseQuery({baseUrl:BASE_URL}),
  tagTypes:[],
  endpoints: () => ({}),
})