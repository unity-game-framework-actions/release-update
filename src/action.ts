import * as utility from './utility'

export async function updateRelease(owner: string, repo: string, idOrTag: string, name: string, body: string): Promise<void> {
  const release = await utility.getRelease(owner, repo, idOrTag)

  if (name !== '') {
    release.name = name
  }

  if (body !== '') {
    release.body = body
  }

  await utility.updateRelease(owner, repo, release)
}
