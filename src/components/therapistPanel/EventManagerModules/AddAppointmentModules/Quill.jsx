
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = ({value,setValue,quillRef,getText}) => {


  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'},'link', 'image', 'video']
    ],
  };

  return (
    <div >
      <ReactQuill ref={quillRef}  className='placeholder-blue'  placeholder='Add descriptions' onChange={getText} modules={modules} />
    </div>
  );
};

export default Quill;