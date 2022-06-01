const messages = {
  isEmpty: 'o atributo não pode vir vazio'
}

export abstract class Validations {
  public errors: string[] = []

  isEmpty(value: number | string) {
    const _ = String(value)
    if (_.length <= 0) this.errors.push(messages.isEmpty)
  }
}
