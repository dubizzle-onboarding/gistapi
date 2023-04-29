import styled from "styled-components";
import Octicon from "react-octicon";

const Gist = ({ gist }) => {
	return (
		<GistWrapper>
			<GistHeader>
				<HeaderSection>
					<OwnerImage src={gist?.owner?.avatar_url} />
					<OwnerName>{gist?.owner?.login}</OwnerName>
				</HeaderSection>
				<HeaderSection>
					<ExtraInfo>
						<Octicon name="code" />
						<ExtraInfoText>
							{Object.entries(gist?.files).length}{" "}
							{Object.entries(gist?.files).length > 1 ? "Files" : "File"}{" "}
						</ExtraInfoText>
					</ExtraInfo>
					<ExtraInfo>
						<Octicon name="repo-forked" />
						<ExtraInfoText>Forks</ExtraInfoText>
					</ExtraInfo>
					<ExtraInfo>
						<Octicon name="comment" /> <ExtraInfoText>Comments</ExtraInfoText>
					</ExtraInfo>
					<ExtraInfo>
						<Octicon name="star" />
						<ExtraInfoText>Stars</ExtraInfoText>
					</ExtraInfo>
				</HeaderSection>
			</GistHeader>
			<Timestamps>
				<Timestamp>
					Created at: {new Date(gist?.created_at).toLocaleDateString("en-US")}
				</Timestamp>
				<Timestamp>
					Last updated: {new Date(gist?.updated_at).toLocaleDateString("en-US")}
				</Timestamp>
			</Timestamps>
			<DescriptionDiv>{gist?.description}</DescriptionDiv>
			<FilesDiv>
				{Object.keys(gist?.files).map((el) => (
					<File>
						<Octicon name="file-text" />
						{el}
					</File>
				))}
			</FilesDiv>
		</GistWrapper>
	);
};

const GistWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 0px 30px 0px;
	border-bottom: 1px solid #eef0f1;
`;
const GistHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const OwnerImage = styled.img.attrs((props) => ({
	src: props.src,
}))`
	border-radius: 50%;
	width: 40px;
	height: fit-content;
`;
const OwnerName = styled.p`
	color: #0265d6;
	font-size: 12px;
	padding-left: 10px;
`;

const ExtraInfo = styled.div`
	color: #0265d6;
	padding-left: 20px;
	align-items: center;
	display: flex;
`;
const ExtraInfoText = styled.div`
	margin: 0px;
	font-size: 12px;

	padding-left: 5px;
	min-width: 46px;
`;

const HeaderSection = styled.div`
	display: flex;
`;

const Timestamps = styled.div`
	padding-top: 5px;
	display: flex;
`;
const Timestamp = styled.p`
	font-size: 10px;
	margin: 0px;
	&:nth-child(2) {
		padding-left: 10px;
	}
`;
const DescriptionDiv = styled.div`
	padding-top: 10px;
	line-break: anywhere;
`;

const FilesDiv = styled.div`
	padding-top: 10px;
	display: flex;
`;
const File = styled.div`
	color: #0265d6;
	font-size: 11px;
	padding-left: 10px;
	display: flex;
`;

export default Gist;
