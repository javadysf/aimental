import QuestionnaireDataGrid from './PationQuestionnairesModules/QuestionnaireDataGrid'

const PationQuestionnaires = () => {
  return (
    <div className="w-full col m-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl gap-6 h-[calc(100vh-96px)]  ">
    <div className='flex justify-between items-center gap-8 '>
    <h2 className='title-2 '>Questionnaires</h2>
    </div>
           <QuestionnaireDataGrid/>
        </div>
  )
}

export default PationQuestionnaires