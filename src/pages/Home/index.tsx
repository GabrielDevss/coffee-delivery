import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, Specifications } from './styles'

import coffeeImg from '../../assets/coffee.svg'
import styles from 'styled-components'

export function Home() {
  return (
    <HomeContainer>
      <header>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Specifications>
            <div>
              <span>
                <ShoppingCart />
              </span>
              <p>Compra simples e segura</p>
            </div>

            <div>
              <span>
                <Timer />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>

            <div>
              <span>
                <Package />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <span>
                <Coffee />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </Specifications>
        </div>

        <img src={coffeeImg} alt="" />
      </header>

      <main></main>
    </HomeContainer>
  )
}
