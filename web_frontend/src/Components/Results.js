import { Link, Text, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "../App.css";

const Results = ({ video_url, title, text, quote }) => {
  const textArray = text.split(quote);
  return (
    <div className="Results">
      <Stack>
        <Link color="teal.600" href={video_url} isExternal>
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
            <>
              {item}
              {index !== textArray.length - 1 && <b>{quote}</b>}
            </>
          ))}
        </span>
        {'..."'}
      </Text>
    </div>
  );
};

export default Results;
