import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'

export function ConfirmStep() {
  function handleConfirmScheduling() {
    return null
  }

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          24 de Janeiro de 2025
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" />
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="johndoe@example.com" />
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
