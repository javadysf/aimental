import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import QuestionBox from "./CreateFormModules/QuestionBox";
import Image from "next/image";

const CreateForm = ({
  setquestions,
  questions,
  questionnaire,
  setquestionnaire,
  displaycover,
  setEditMode,
  Existedquestions,
  questionnaireId
}) => {

  const setValues = (e) => {
    setquestionnaire({ ...questionnaire, [e.target.name]: e.target.value });
    setEditMode && setEditMode(true);
  };


  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.index === destination.index) return;

    const newQuestions = [...questions];
    const [removed] = newQuestions.splice(source.index, 1);
    newQuestions.splice(destination.index, 0, removed);

    setquestions(newQuestions);
  };

  useEffect(() => {
    questionnaire?.questions &&
      setquestions(
        questionnaire?.questions?.map((question) => ({
          question: question,
          id: question.id,
        }))
      );
  }, [questionnaire]);

  const handleQuestionChange = (id, content, name) => {
    setquestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, question: { ...question.question, [name]: content } }
          : question
      )
    );
    setEditMode && setEditMode(true);
  };
  return (
    <div className="col self-end w-[90%] gap-4 h-[calc(100vh-220px)] max-lg:p-2">
      {displaycover && <Image alt="cover" width={768} height={128} className="w-full h-32" src={displaycover} />}
      <div className="border border-zinc-400 rounded-3xl p-4 dark:text-neutral-300 col gap-2">
        <input
          value={questionnaire.title}
          name="title"
          placeholder="Title"
          className=" placeholder-zinc-600 dark:placeholder-zinc-400  p-2 border border-zinc-600 rounded-xl dark:bg-neutral-800"
          type="text"
          onChange={(e) => setValues(e)}
        />
        <input
          name="description"
          value={questionnaire.description}
          placeholder="Forms description"
          className=" placeholder-zinc-600 p-2 dark:placeholder-zinc-400 border border-zinc-600 rounded-xl dark:bg-neutral-800"
          type="text"
          onChange={(e) => setValues(e)}
        />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
<Droppable droppableId="droppable-1">
  {(provided) => (
    <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      className="bg-gray-100 rounded-md"
    >
      {questions.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="bg-white mb-2 rounded-md shadow-md"
            >
        <QuestionBox
          displayAns={false}
          key={item.id}
          handleQuestionChange={handleQuestionChange}
          content={item.question}
          id={item.id}
          setquestions={setquestions}
          questions={questions}
          Existedquestions={Existedquestions}
          questionnaireId={questionnaireId}
        />
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  )}
</Droppable>
</DragDropContext>
    </div>
  );
};

export default CreateForm;



