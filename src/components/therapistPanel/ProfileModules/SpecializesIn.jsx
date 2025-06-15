import TagModule from "../../common/TagModule"


const SpecializesIn = ({TPProfile}) => {

  return (
    <div className="col gap-6 border-b border-zinc-400 py-6">
        <h2 className="title-2">Specializes in</h2>
        <div className='flex gap-2 flex-wrap'>
          {TPProfile?.work_field?.map(({title,id})=>  <TagModule key={id} title={title} />)}
        </div>
    </div>
  )
}

export default SpecializesIn