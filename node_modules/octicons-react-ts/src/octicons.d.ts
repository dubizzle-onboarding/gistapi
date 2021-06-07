type _Octicons = {
    [k in _OptionalIcons]: _Octicon
}

type _IconOptions = {
    version: string
    width?: number
    height?: number
    viewbox?: number[]
    class: string[]
    'aria-hidden': boolean
    'aria-label': string
}

type _Octicon = {
    readonly path: string
    // readonly symbol: string
    // readonly keywords: string[]
    width: number
    height: number
    options: _IconOptions
}

type _OptionalIcons =
    'alert' |
    'arrow-down' |
    'arrow-left' |
    'arrow-right' |
    'arrow-up' |
    'arrow-both' |
    'arrow-small-down' |
    'arrow-small-left' |
    'arrow-small-right' |
    'arrow-small-up' |
    'beaker' |
    'bell' |
    'bold' |
    'book' |
    'bookmark' |
    'briefcase' |
    'broadcast' |
    'browser' |
    'bug' |
    'calendar' |
    'check' |
    'checklist' |
    'chevron-down' |
    'chevron-left' |
    'chevron-right' |
    'chevron-up' |
    'circle-slash' |
    'circuit-board' |
    'clippy' |
    'clock' |
    'cloud-download' |
    'cloud-upload' |
    'code' |
    'comment-discussion' |
    'comment' |
    'credit-card' |
    'dash' |
    'dashboard' |
    'database' |
    'desktop-download' |
    'device-camera-video' |
    'device-camera' |
    'device-desktop' |
    'device-mobile' |
    'diff-added' |
    'diff-ignored' |
    'diff-modified' |
    'diff-removed' |
    'diff-renamed' |
    'diff' |
    'ellipsis' |
    'eye' |
    'file-binary' |
    'file-code' |
    'file-directory' |
    'file-media' |
    'file-pdf' |
    'file-submodule' |
    'file-symlink-directory' |
    'file-symlink-file' |
    'file' |
    'file-zip' |
    'flame' |
    'fold' |
    'gear' |
    'gift' |
    'gist-secret' |
    'gist' |
    'git-branch' |
    'git-commit' |
    'git-compare' |
    'git-merge' |
    'git-pull-request' |
    'globe' |
    'graph' |
    'heart' |
    'history' |
    'home' |
    'horizontal-rule' |
    'hubot' |
    'inbox' |
    'info' |
    'issue-closed' |
    'issue-opened' |
    'issue-reopened' |
    'italic' |
    'jersey' |
    'keyboard' |
    'law' |
    'link' |
    'list-ordered' |
    'list-unordered' |
    'location' |
    'lock' |
    'logo-gist' |
    'logo-github' |
    'mail-read' |
    'reply' |
    'mail' |
    'mark-github' |
    'markdown' |
    'megaphone' |
    'mention' |
    'milestone' |
    'mirror' |
    'mortar-board' |
    'mute' |
    'no-newline' |
    'octoface' |
    'organization' |
    'package' |
    'paintcan' |
    'pencil' |
    'person' |
    'pin' |
    'plug' |
    'plus' |
    'primitive-dot' |
    'primitive-square' |
    'pulse' |
    'question' |
    'quote' |
    'radio-tower' |
    'repo-clone' |
    'repo-force-push' |
    'repo-forked' |
    'repo-pull' |
    'repo-push' |
    'repo' |
    'rocket' |
    'rss' |
    'ruby' |
    'search' |
    'server' |
    'settings' |
    'shield' |
    'sign-in' |
    'sign-out' |
    'smiley' |
    'squirrel' |
    'star' |
    'stop' |
    'sync' |
    'tag' |
    'tasklist' |
    'telescope' |
    'terminal' |
    'text-size' |
    'three-bars' |
    'thumbsdown' |
    'thumbsup' |
    'tools' |
    'trashcan' |
    'triangle-down' |
    'triangle-left' |
    'triangle-right' |
    'triangle-up' |
    'unfold' |
    'unmute' |
    'project' |
    'kebab-horizontal' |
    'kebab-vertical' |
    'report' |
    'note' |
    'screen-full' |
    'screen-normal' |
    'unverified' |
    'verified' |
    'versions' |
    'watch' |
    'x' |
    'zap' |
    'key' |
    'grabber' |
    'plus-small' |
    'light-bulb' |
    'link-external' |
    'archive'

declare module 'octicons' {
    const octicons: Octicons
    export default octicons

    export type Octicon = _Octicon

    export type Octicons = _Octicons

    export type IconOptions = _IconOptions

    export type OptionalIcons = _OptionalIcons
}

declare module "*/data.json" {
    const v: _Octicons
    export default v
}
