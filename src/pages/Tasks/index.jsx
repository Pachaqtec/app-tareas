import { useState } from 'react'
import './App.css';
import Card from 'components/Card/index'
import Button from 'components/Button/index'

function App() {
  const [tasks, setTasks] = useState([])

  const onChange = (e, index) => {
    const { value, name } = e.target
    const newsTasks = tasks.map((task, i) => {
      if (index === i) {
        return {
          ...task,
          [name]: value
        }
      }
      return task
    })
    setTasks(newsTasks)
  }

  const addCard = () => {
    const newTask = {
      title: '',
      description: ''
    }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <Button
        value="Agregar tarea"
        onClick={addCard}
      />
      <div style={{ display: 'flex', margin: '0px 15px', flexWrap: 'wrap' }}>
        {
          tasks.map(({ title, description }, index) => {
            return (
              <Card
                key={index}
                onChange={(e) => onChange(e, index)}
                valueTitle={title}
                nameTitle="title"
                nameDescription="description"
                valueDescription={description}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App;
