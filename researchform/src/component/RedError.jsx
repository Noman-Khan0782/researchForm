
import { ErrorMessage } from 'formik'
import React from 'react'

const RedError = (name) => {
  return (
    <div style={{color:'red'}}>
        <ErrorMessage name={name} />
    </div>
  )
}

export default RedError