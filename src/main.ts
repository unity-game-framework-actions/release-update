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
    const commitish = core.getInput('commitish')
    const draft = core.getInput('draft') === 'true'
    const prerelease = core.getInput('prerelease') === 'true'

    const change = {
      name: name,
      body: body,
      commitish: commitish,
      draft: draft,
      prerelease: prerelease
    }

    await action.updateRelease(repository.owner, repository.repo, idOrTag, change)
  } catch (error) {
    core.setFailed(error.message)
  }
}
