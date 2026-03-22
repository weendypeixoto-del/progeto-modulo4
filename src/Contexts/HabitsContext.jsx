import { createContext, useContext, useState, useEffect } from 'react'

export const HabitsContext = createContext(null)

export function HabitsProvider({ children }) {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem('my-daily-habits')

    if (!stored) {
      return [
        { id: 1, nome: 'Exercício', descricao: 'Treino', categoria: 'Saúde', meta: 5, ativo: true, diasFeitos: 5 },
        { id: 2, nome: 'Leitura', descricao: 'Livro', categoria: 'Estudo', meta: 7, ativo: true, diasFeitos: 3 }
      ]
    }

    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('my-daily-habits', JSON.stringify(habits))
  }, [habits])

  const adicionarHabit = (novoHabit) => {
    setHabits(prev => [...prev, novoHabit])
  }

  const removerHabit = (id) => {
    setHabits(prev => prev.filter(h => h.id !== id))
  }

  return (
    <HabitsContext.Provider value={{ habits, adicionarHabit, removerHabit }}>
      {children}
    </HabitsContext.Provider>
  )
}

export function useHabits() {
  return useContext(HabitsContext)
}