import React, { useRef, useState } from 'react'

import './NewTaskForm.css'

function NewTaskForm({ onAdd }) {
  const inpRef = useRef()
  const [text, setText] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const onSubmit = (e) => {
    const timeInSec = Number(minutes) * 60 + Number(seconds)

    e.preventDefault()
    if (!text || text.replace(/ +/g, ' ') === ' ') {
      setText('')
      setMinutes('')
      setSeconds('')
      return
    }
    if (!minutes && !seconds) {
      return
    }

    onAdd(text, timeInSec, e)
    setText('')
    setMinutes('')
    setSeconds('')
  }

  return (
    <form className="new-todo-form" onSubmit={(e) => onSubmit(e)}>
      <input
        className="new-todo"
        value={text}
        autoFocus
        ref={inpRef}
        onChange={() => setText(inpRef.current.value)}
        placeholder="What needs to be done?"
      />
      <input
        className="new-todo-form__timer"
        type="number"
        placeholder="Min"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <input
        className="new-todo-form__timer"
        type="number"
        placeholder="Sec"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        required
      />
      <button type="submit"></button>
    </form>
  )
}

export default NewTaskForm
