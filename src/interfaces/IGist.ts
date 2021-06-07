import { IGistOwner } from './IGistOwner'

/**
 * Interface to contain gist fields
 */
export interface IGist {
  comments: number
  comments_url: string
  commits_url: string
  created_at: string
  description: string | null
  files: any
  forks_url: string
  git_pull_url: string
  git_push_url: string
  html_url: string
  id: string
  node_id: string
  owner: IGistOwner | null | undefined
  public: boolean
  truncated: boolean | undefined
  updated_at: string
  url: string
  user: any
}
