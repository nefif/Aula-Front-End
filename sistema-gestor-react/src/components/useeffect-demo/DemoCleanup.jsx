import { useState, useEffect } from 'react'

function Cronometro() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    console.log('⏱️ Cronômetro iniciado')

    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1)
    }, 1000)

    // Função de limpeza: roda quando o componente for desmontado
    return () => {
      console.log('🧹 Cronômetro cancelado (cleanup)')
      clearInterval(intervalo)
    }
  }, [])

  return (
    <div className="alert alert-info">
      Cronômetro rodando: <strong>{segundos}s</strong>
    </div>
  )
}

function DemoCleanup() {
  const [mostrarCronometro, setMostrarCronometro] = useState(true)

  return (
    <div className="card p-3 mb-4">
      <h5>Demo 3 — Cleanup (função de limpeza)</h5>
      <p className="text-muted">
        Abra o console (F12) antes de clicar. Observe as mensagens
        "iniciado" e "cancelado".
      </p>

      <button
        className="btn btn-danger btn-sm mb-3"
        style={{ width: 'fit-content' }}
        onClick={() => setMostrarCronometro(!mostrarCronometro)}
      >
        {mostrarCronometro ? 'Esconder cronômetro' : 'Mostrar cronômetro'}
      </button>

      {mostrarCronometro && <Cronometro />}
    </div>
  )
}

export default DemoCleanup
