import { relativeTime } from 'human-date'
import styled from 'styled-components'
import { IGist } from '../interfaces/IGist'
import { colors, zipFormats } from '../utils/constants'

// tslint:disable-next-line: no-var-requires
const Octicon = require('react-octicon') // Types unavailable for Octicon, hence used CJS module import

const GistCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); ;
`

const HeadingIcon = styled(Octicon)`
  margin-right: 0.5rem;
  text-decoration: none;
`

const FilesIcon = styled(Octicon)`
  color: ${colors.linkColor};
`

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;
`

// Additional props for link
interface StyledLinkProperties {
  center: boolean
  bold: boolean
  overflow: boolean
}
const StyledLink = styled.a.attrs((props: StyledLinkProperties) => ({
  center: props.center,
  bold: props.bold,
  overflow: props.overflow,
}))`
  color: ${colors.linkColor};
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.center
      ? `
        display: flex; 
        align-items: center;
        `
      : ''}

  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${(props) =>
    props.overflow
      ? `
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;`
      : ''}

  :hover {
    text-decoration: underline;
  }
`

const GistMetrics = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`

const GistMetricItem = styled.a`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  color: ${colors.linkColor};
  cursor: pointer;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const FilesList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

/**
 * Displays the data for the gist
 * @param props Gist provided as props
 * @returns React component
 */
const Gist = ({ gist }: { gist: IGist }) => {
  const files = Object.keys(gist.files).map((fileId) => {
    const fileObj = gist.files[fileId]
    let fileIconType = 'file'

    // Show icon according to input type
    if (fileObj.type === 'text/plain') {
      fileIconType = 'file-text'
    } else if (zipFormats.includes(fileObj.type)) {
      fileIconType = 'file-zip'
    } else if (fileObj.type.startsWith('image')) {
      fileIconType = 'file-media'
    } else if (fileObj.type === 'application/octet-stream') {
      fileIconType = 'file-binary'
    } else {
      fileIconType = 'file-code'
    }

    return {
      fileIconType,
      ...fileObj,
    }
  })
  const filesCount = files.length

  return (
    <GistCard>
      <div className="heading" style={{ display: 'flex' }}>
        <div className="left" style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <StyledLink center={true} bold={true} href={gist.owner?.html_url}>
              <Avatar src={gist.owner?.avatar_url} />
              {gist.owner?.login}
            </StyledLink>
            {files.length !== 0 && (
              <>
                <span style={{ margin: '0 0.2rem' }}>{'/'}</span>
                <StyledLink center={true} bold={true} href={files[0].raw_url}>
                  {files[0].filename}
                </StyledLink>
              </>
            )}
          </span>
        </div>
        <GistMetrics>
          <GistMetricItem title="Code" href={gist.html_url}>
            <HeadingIcon name="code" />
            {filesCount === 1 ? '1 File' : `${filesCount} Files`}
          </GistMetricItem>
          <GistMetricItem title="Forks" href={gist.forks_url}>
            <HeadingIcon name="repo-forked" />
            Forks
          </GistMetricItem>
          <GistMetricItem title="Comments" href={gist.comments_url}>
            <HeadingIcon name="comment" />
            Comments
          </GistMetricItem>
          <GistMetricItem title="Stars" href={gist.html_url}>
            <HeadingIcon name="star" />
            Stars
          </GistMetricItem>
        </GistMetrics>
      </div>
      <div
        className="subheading"
        style={{ display: 'flex', fontSize: '12px', marginTop: '0.5rem' }}
      >
        <div style={{ marginRight: '1rem' }}>
          Created - <span title={gist.created_at}>{relativeTime(gist.created_at)}</span>
        </div>
        <div>
          Last Updated - <span title={gist.updated_at}>{relativeTime(gist.updated_at)}</span>
        </div>
      </div>
      <div className="description" style={{ margin: '1rem 0' }}>
        {gist.description || '-'}
      </div>
      <FilesList>
        {files.length > 1 &&
          files.map((file) => (
            <div key={file.filename} style={{ marginRight: '1rem', width: '33%', display: 'flex' }}>
              <FilesIcon name={file.fileIconType} />
              <StyledLink href={file.raw_url} overflow={true}>
                {file.filename}
              </StyledLink>
            </div>
          ))}
      </FilesList>
    </GistCard>
  )
}

export default Gist
