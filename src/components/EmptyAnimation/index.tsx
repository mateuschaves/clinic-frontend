import Lottie, { Options } from 'react-lottie';
import animation from '~/assets/animations/empty.json';

import { Container, Label, AddButton } from './styles';

const animationOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animation,
}

interface onPressProps {
  (): void;
}

interface EmptyAnimationProps {
  message?: string;
  showAddButton?: boolean;
  onPress?: onPressProps;
}

const EmptyAnimation = ({ message = 'Nenhum paciente cadastrado !', onPress, showAddButton = false,  }: EmptyAnimationProps) => {


  function renderAddButton() {
    return (
          <AddButton
            colorScheme="blue"
            onClick={onPress}
          >
            Adicionar
          </AddButton>
    )
  }

  return (
    <Container>
        <Lottie 
            options={animationOptions}
            height={200}
            width={200}
        />
        <Label>{message}</Label>
        {
          showAddButton && renderAddButton()
        }
    </Container>
  );
}

export default EmptyAnimation;