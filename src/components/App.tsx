import React from 'react'
import store from '../store'
import { getSnapshot } from 'mobx-state-tree'

store.addSpell('ct', 'Chill Touch', 10)
store.addWizard('pu', 'Paula Undergun', 100)
console.log(getSnapshot(store))

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
