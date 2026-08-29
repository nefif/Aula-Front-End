import DemoMontagem from '../components/useeffect-demo/DemoMontagem'
import DemoAtualizacao from '../components/useeffect-demo/DemoAtualizacao'
import DemoCleanup from '../components/useeffect-demo/DemoCleanup'
import DemoCarregamento from '../components/useeffect-demo/DemoCarregamento'

function UseEffectPlayground() {
  return (
    <div className="container my-5">
      <h2 className="mb-1">Playground do useEffect</h2>
      <p className="text-muted mb-4">
        Material de apoio — cada card abaixo isola uma regra do useEffect.
      </p>
      <DemoCarregamento />
    </div>
  )
}

export default UseEffectPlayground
