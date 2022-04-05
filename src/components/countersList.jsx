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

  const onIncrement = (id) => {
    let item = counters.find((count) => count.id === id)
    if (item) {
      ++item.value
      const newCounters = [...counters]
      setCounters(newCounters)
    }
  }

  const onDecrement = (id) => {
    let item = counters.find((count) => count.id === id)
    if (item && item.value > 0) {
      --item.value
      const newCounters = [...counters]
      setCounters(newCounters)
    }
  }

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} {...count} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={handleDelete} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  )
}

export default CountersList
