import * as React from 'react'
import octicons from './index'

type OptionalIcons =
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

interface IconOptions {
    version: string
    ratio?: number
    width?: number
    height?: number
    viewbox?: number[]
    class: string[]
    'aria-hidden': boolean
    'aria-label': string
}

const constDefaultProps: IconOptions = {
    version: '1.1',
    class: [],
    'aria-hidden': false,
    'aria-label': 'icon'
}

type Props = {
    name: OptionalIcons
} & IconOptions


const Octicon: React.SFC<Props> = ({
    name, // required
    ratio, width, height, // optional
    version, viewbox,
    class: classNames,
    'aria-hidden': ariaInvisible,
    'aria-label': ariaLabel
}) => {
    const w = octicons[name].width
    const h = octicons[name].height
    const vbox = viewbox || [0, 0, w, h]
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version={version}
            width={width || (ratio ? ratio * w : w)}
            height={height || (ratio ? ratio * h : h)}
            viewBox={vbox.join(' ')}
            className={'octicon' + ' ' + 'octicon-' + 'name' + ' ' + classNames.join(' ')}
            aria-hidden={ariaInvisible}
            aria-label={ariaLabel}
        >
            <path fillRule="evenodd" d={octicons[name].path} />
        </svg>
    )
}

const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>> (
    defaultProps: DP, component: React.ComponentType<P>
) => {
    type RequiredProps = Pick<P, Exclude<keyof P, keyof DP>>
    type TrueProps = Partial<DP> & Required<RequiredProps>
    component.defaultProps = defaultProps

    return (component as React.ComponentType<any>) as React.ComponentType<TrueProps>
}

export default withDefaultProps(constDefaultProps, Octicon)
