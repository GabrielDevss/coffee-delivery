import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer, Localization } from './styles'

import logoSvg from '../../assets/logo-coffee.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} alt="" />

      <div>
        <Localization>
          <MapPin weight="fill" size={20} />
          Porto Alegre, RS
        </Localization>
        <button>
          <ShoppingCart weight="fill" size={20} />
        </button>
      </div>
    </HeaderContainer>
  )
}
