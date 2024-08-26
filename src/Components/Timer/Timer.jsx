import './Timer.css'

const Timer = ({ timeSec, id, onPlayTimer, onPauseTimer, done }) => {
  const mins = Math.floor(timeSec / 60)
  const secs = String(timeSec - mins * 60).padStart(2, '0')
  const time = timeSec > 0 ? `${mins}:${secs} ` : '2:00'
  const classTitle = done ? 'description timer done' : 'description timer'

  return (
    <span className={classTitle}>
      <button className="icon icon-play" onClick={() => onPlayTimer(id)} disabled={done}></button>
      <button className="icon icon-pause" onClick={() => onPauseTimer(id)} disabled={done}></button>
      <span>{time}</span>
    </span>
  )
}

export default Timer
