import React from 'react'

import { Table } from '../../components'
import { useFetch } from '../../hooks'

export const CoursesContainer = () => { 
  const { data: { virtualLabs: data }, status } = useFetch(process.env.REACT_APP_VIRTUAL_LABS_ENDPOINT)

  if(status === 'fetching' || status === 'idle') { 
    return <> Loading... </>
  }

  return ( 
     <Table data={data} /> 
  )
}