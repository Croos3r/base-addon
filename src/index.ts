import { BaseAddon } from '@discord-factory/core-next'

export default class Index extends BaseAddon<Index> {
  public addonName: string = 'my-addon'
  public async init (): Promise<Index> {
    return this
  }

  public registerHooks () {
    return []
  }

  public registerCLI () {
    return []
  }

  public registerCommands () {
    return []
  }

  public registerEvents () {
    return [
    ]
  }

  public defineKeys () {
    return []
  }
}

/**
 * Export your public elements
 */
export {

}
