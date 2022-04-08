import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь', price: '200' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ]
  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id)
    setCounters(newCounters)
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (id) => {
    let itemIndex = counters.findIndex((count) => count.id === id)
    if (itemIndex > -1) {
      const newCounters = [...counters]
      newCounters[itemIndex].value++
      setCounters(newCounters)
    }
  }

  const handleDecrement = (id) => {
    let itemIndex = counters.findIndex((count) => count.id === id)
    if (itemIndex > -1) {
      const newCounters = [...counters]
      newCounters[itemIndex].value--
      setCounters(newCounters)
    }
  }

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} {...count} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  )
}

export default CountersList
