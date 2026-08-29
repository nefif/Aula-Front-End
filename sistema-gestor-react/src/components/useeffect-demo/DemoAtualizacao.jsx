import { useState, useEffect } from 'react'

function DemoAtualizacao() {
  const [contadorA, setContadorA] = useState(0)
  const [contadorB, setContadorB] = useState(0)
  const [logSemArray, setLogSemArray] = useState(0)
  const [logArrayVazio, setLogArrayVazio] = useState(0)
  const [logComDependencia, setLogComDependencia] = useState(0)

  // Sem array — roda depois de TODA renderização
  useEffect(() => {
    setLogSemArray((n) => n + 1)
  })

  // Array vazio — roda só na montagem
  useEffect(() => {
    setLogArrayVazio((n) => n + 1)
  }, [])

  // Com dependência — roda na montagem e sempre que contadorA mudar
  useEffect(() => {
    setLogComDependencia((n) => n + 1)
  }, [contadorA])

  return (
    <div className="card p-3 mb-4">
      <h5>Demo 2 — Comparando os 3 comportamentos</h5>

      <div className="row text-center mb-3">
        <div className="col">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setContadorA(contadorA + 1)}
          >
            Mudar contador A
          </button>
          <p className="mt-1 mb-0">A = {contadorA}</p>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setContadorB(contadorB + 1)}
          >
            Mudar contador B (não é dependência de ninguém)
          </button>
          <p className="mt-1 mb-0">B = {contadorB}</p>
        </div>
      </div>

      <table className="table table-sm text-center">
        <thead>
          <tr>
            <th>useEffect(fn) — sem array</th>
            <th>useEffect(fn, []) — vazio</th>
            <th>useEffect(fn, [contadorA])</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fs-4">{logSemArray}</td>
            <td className="fs-4">{logArrayVazio}</td>
            <td className="fs-4">{logComDependencia}</td>
          </tr>
          <tr>
            <td>
              <small className="text-muted">vezes que rodou</small>
            </td>
            <td>
              <small className="text-muted">vezes que rodou</small>
            </td>
            <td>
              <small className="text-muted">vezes que rodou</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DemoAtualizacao
