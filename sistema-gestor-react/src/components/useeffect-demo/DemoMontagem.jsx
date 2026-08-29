import { useState, useEffect } from 'react'

function DemoMontagem() {
  const [contador, setContador] = useState(0)
  const [log, setLog] = useState([])

  useEffect(() => {
    setLog((logAnterior) => [...logAnterior, '🟢 Efeito rodou (montagem)'])
  }, [])

  return (
    <div className="card p-3 mb-4">
      <h5>Demo 1 — Rodar só uma vez</h5>
      <p className="text-muted">
        Clique em "Re-renderizar" várias vezes. O efeito só aparece no log
        <strong> uma vez</strong>, mesmo com vários cliques.
      </p>

      <p>
        Contador (só para forçar redesenho): <strong>{contador}</strong>
      </p>
      <button
        className="btn btn-primary btn-sm mb-3"
        style={{ width: 'fit-content' }}
        onClick={() => setContador(contador + 1)}
      >
        Re-renderizar
      </button>

      <div
        className="bg-light p-2 rounded"
        style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
      >
        {log.map((linha, index) => (
          <div key={index}>{linha}</div>
        ))}
      </div>
    </div>
  )
}

export default DemoMontagem
