import React from 'react'
import TagModule from '../../common/TagModule'

const TreatmentMethods = ({TPProfile}) => {
  return (
    <div className='col gap-6 border-b border-zinc-400 py-6'>
    
        <h2 className='title-2'>Treatment methods</h2>
        <div className='flex gap-2 flex-wrap'>
        {TPProfile&&TPProfile?.therapeutic_approaches?.map(({title,id})=>  <TagModule key={id} title={title} />)}
        </div>
        
        </div>
  )
}

export default TreatmentMethods