// src/componentes/HabitCard.jsx

// 1. Adicionamos 'onRemover' aqui dentro das chaves (as props)
function HabitCard({ nome, descricao = '', meta, ativo = true, diasFeitos = 0, onRemover }) {
  
  const metaAtingida = diasFeitos >= meta
  const mensagemMeta = metaAtingida
    ? '🏆 Meta da semana atingida!'
    :`${diasFeitos} de ${meta} dias concluídos`

  return (
    <div className="habit-card" style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <h3>{nome}</h3>
      {descricao && <p>{descricao}</p>}
      <p>{mensagemMeta}</p>
      <span>{ativo ? '✅ Ativo' : '⏸️ Pausado'}</span>

      {/* 2. Criamos o botão que usa a ferramenta 'onRemover' */}
      {onRemover && (
        <button 
          type="button" 
          onClick={onRemover} 
          style={{ display: 'block', marginTop: '10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '5px 10px' }}
        >
          Remover
        </button>
      )}
    </div>
  )
}

export default HabitCard