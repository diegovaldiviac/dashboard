import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getTags } from 'redux/tags'



export default function AISamples() {

  const dispatch = useDispatch()
  const tags = useSelector((store) => store.tags)

  const handleGetTags = () => {
    dispatch(getTags())
  }

  console.log(tags)

  return (
    <div>
			AISamples
      <Button
        variant="outlined"
        onClick={handleGetTags}
      >
        GET TAGS
      </Button>
    </div>
  )
}