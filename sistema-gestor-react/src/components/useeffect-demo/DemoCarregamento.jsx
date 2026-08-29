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
        Isso é exatamente o padrão usado na Área de Trabalho. O{' '}
        <code>setTimeout</code> aqui está no lugar de uma chamada de API real
        — na aula de consumo de API, essa parte muda, o resto (estado +
        condicional) continua igual.
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
