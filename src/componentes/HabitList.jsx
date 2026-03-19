// src/components/HabitList.jsx
import { useState } from 'react'
import HabitCard from './HabitCard'

function HabitList() {
  // Estado inicial com alguns hábitos
  const [habits, setHabits] = useState([
    { id: 1, nome: 'Exercício',  descricao: 'Treino de força',    meta: 5, ativo: true,  diasFeitos: 5 },
    { id: 2, nome: 'Leitura',    descricao: 'Livro ou artigo',    meta: 7, ativo: true,  diasFeitos: 3 },
    { id: 3, nome: 'Meditação',  descricao: 'Respiração e foco',  meta: 7, ativo: false, diasFeitos: 0 },
    { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água',   meta: 7, ativo: true,  diasFeitos: 6 },
  ])

  // Função para remover um hábito da lista
  const removerHabit = (id) => {
    const novaLista = habits.filter(habit => habit.id !== id)
    setHabits(novaLista)
  }

  return (
    <section>
      <h2>Meus Hábitos Atuais</h2>
      {/* Se a lista estiver vazia, mostra uma mensagem */}
      {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}
      
      <ul>
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
    </section>
  )
}

export default HabitList