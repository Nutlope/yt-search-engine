import { Heading } from "@chakra-ui/react";

const SearchResults = () => {
  return (
    <div className="App">
      <Heading as="h3">
        Times said: <b>{6}</b>
      </Heading>
      {/* Make this a seperate component */}
      <h4>
        <a href="https://www.youtube.com/watch?v=iONDebHX9qk&list=WL&index=2&t=2s&ab_channel=AliAbdaal">
          Ali Abdaal - How I manage my time
        </a>
      </h4>
      <p>
        <b>Transcription:</b>
      </p>
      {/* Show the last 15 seconds and the next 15 seconds after the word */}
      {/* Also, make sure to bold the word */}
      <p>
        welcome back to the tunnel in this video we're going to go over 10 cheap
        purchases that have improved my quality of life let's get into it coming
        in at number 10 on the list we have a physical alarm clock that is
        really cool because before I had one of these are used to use my phone
        as an alarm clock can I have the phone on my bedside table but
        inevitably it would mean that I would spend hours and hours scouring
        through 5th Rising Instagram and attempting to reply to messages on
        hinge at night when I should have been sleeping but ever since I got one
        of these physical alarm clock on my bedside table across the room away
        from my bed or even in the kitchen on charge if I really need to get up
        one morning and so for a relatively cheap investment of like between 5
        and 20 quit depending on have fun to get on for kids you can mess up the
        improve your quality of sleep if you get one of these the trustee
        electric toothbrush now the only thing that you need to have in an
        electric toothbrush if you have one it needs to have a 30-second timer
        to the cool thing about this one is that you go and then every 30
        seconds it does like a send it so it tells you when 30 seconds are up
        and it tells you when 2 minutes are up so you can
      </p>
    </div>
  );
};

export default SearchResults;
