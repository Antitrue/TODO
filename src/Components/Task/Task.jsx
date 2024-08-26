import React, { useEffect, useRef, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer/Timer'
import './Task.css'

function Task({
  description,
  createdAt,
  edit,
  done,
  onDone,
  id,
  removeTask,
  changeTask,
  onSubmitTask,
  onPauseTimer,
  onPlayTimer,
  timeInSec,
  handleBlur,
}) {
  const [text, setText] = useState(description)
  const [flag, setFlag] = useState(false)
  const inpRef = useRef()

  useEffect(() => {}, [timeInSec])

  const getText = () => {
    if (inpRef.current.value.trim() !== '') {
      setText(inpRef.current.value)
    }
  }

  const saveTask = (e) => {
    changeTask(text, id)
    onSubmitTask(e, id)
    setFlag(false)
  }

  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleBlur(id, text, description, setText)
      setFlag(false)
    }
    if (e.code === 'Enter') {
      changeTask(text, id)
      setFlag(false)
    }
  }

  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => {
            onDone(id, done)
          }}
          checked={done}
        />
        <label>
          <span className="title">{text}</span>
          <Timer timeSec={timeInSec} onPlayTimer={onPlayTimer} onPauseTimer={onPauseTimer} id={id} done={done} />
          <span className="description">{`created ${formatDistanceToNow(createdAt, { includeSeconds: true })} ago`}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            changeTask(text, id)
            setFlag(true)
          }}
        />
        <button
          className="icon icon-destroy"
          onClick={() => {
            removeTask(id)
          }}
        />
      </div>
      {edit && (
        <form
          onSubmit={(e) => {
            saveTask(e)
          }}
        >
          <input
            type="text"
            className="edit"
            ref={inpRef}
            value={text}
            onChange={getText}
            autoFocus={flag}
            onKeyDown={(e) => onKeyDown(e)}
            onBlur={() => handleBlur(id, text, description, setText)}
          />
          <button type="sumbmit"></button>
        </form>
      )}
    </>
  )
}

export default Task
