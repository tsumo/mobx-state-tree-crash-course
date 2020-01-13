import React from 'react'
import store from '../store'

store.addSpell('ct', 'Chill Touch', 10)
store.addWizard('pu', 'Paula Undergun', 100)

const App: React.FC = () => {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
