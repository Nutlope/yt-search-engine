import { Link, Text, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "../App.css";

const Results = ({ video_url, title, text, quote }) => {
  const textArray = text.toLowerCase().split(quote);
  return (
    <div className="Results">
      <Stack>
        <Link color="#DE5833" href={video_url} isExternal>
          {title} <ExternalLinkIcon mx="2px" />
        </Link>
        <Text fontSize="md" as="b">
          Transcription:
        </Text>
      </Stack>
      <Text>
        {'"...'}
        <span>
          {textArray.map((item, index) => (
            <span key={index}>
              {item}
              {index !== textArray.length - 1 && <b>{quote}</b>}
            </span>
          ))}
        </span>
        {'..."'}
      </Text>
    </div>
  );
};

export default Results;
