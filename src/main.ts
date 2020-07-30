import * as core from '@actions/core'
import * as utility from './utility'
import * as action from './action'

run()

async function run(): Promise<void> {
  try {
    const repository = utility.getRepository()
    const idOrTag = core.getInput('id', {required: true})
    const name = core.getInput('name')
    const body = core.getInput('body')

    await action.updateRelease(repository.owner, repository.repo, idOrTag, name, body)
  } catch (error) {
    core.setFailed(error.message)
  }
}
