import { Link, Text, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "../App.css";

const Results = ({ video_url, title, text }) => {
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
      {/* TODO: Show the last & first 15 seconds before/after the word and bold it instead of showing whole transcript */}
      <Text>{text}</Text>
    </div>
  );
};

export default Results;
