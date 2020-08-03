import * as utility from './utility'

export async function updateRelease(owner: string, repo: string, idOrTag: string, change: any): Promise<void> {
  const release = await utility.getRelease(owner, repo, idOrTag)
  const updated = update(release, change)

  await utility.updateRelease(owner, repo, updated)
}

function update(release: any, change: any): any {
  const keys = Object.keys(change)

  for (const key of keys) {
    const value = change[key]

    if (value !== '' && value !== false) {
      release[key] = value
    }
  }

  return release
}
