import { useState, useEffect } from 'react'

function DemoCarregamento() {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    setCarregando(true)

    const timer = setTimeout(() => {
      setDados({
        mensagem: 'Dados chegaram!',
        hora: new Date().toLocaleTimeString(),
      })
      setCarregando(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="card p-3 mb-4">
      <h5>Demo 4 — Simulando carregamento</h5>
      <p className="text-muted">
        Esse era o padrão usado na Área de Trabalho antes de existir API —
        hoje ela já usa <code>apiFetch</code> de verdade, mas o
        <code> useState</code>/<code>useEffect</code> continuam iguais.
      </p>

      {carregando ? (
        <div className="alert alert-warning mb-0">⏳ Carregando dados...</div>
      ) : (
        <div className="alert alert-success mb-0">
          ✅ {dados.mensagem} (recebido às {dados.hora})
        </div>
      )}
    </div>
  )
}

export default DemoCarregamento
