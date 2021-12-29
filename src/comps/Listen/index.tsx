// Styling
import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';

// Comps
import AudioPlayer from 'react-h5-audio-player';

const StListen = styled.div`
  & h2 {
    margin: 0;
  }

  & .audio__player {
    background-color: #99c0c9;
    border-radius: 5px;
    margin: 0.75em 0;

    & button {
      color: #1e3c59;
    }

    & .rhap_progress-indicator,
    & .rhap_volume-indicator,
    & .rhap_progress-filled {
      background-color: #1e3c59;
    }
  }

  & details {
    max-height: 300px;
    overflow: auto;
    margin: 0;

    & summary {
      opacity: 0.75;
    }

    & p {
      font-size: 0.85em;
    }
  }
`;

export default function Listen({ ...props }) {
  return (
    <StListen>
      <h2>Listen</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
        reiciendis rem facilis, veniam labore laudantium voluptate sunt
        recusandae autem repellendus.
      </p>
      <h3>Episode 1: The End Is Near</h3>
      <AudioPlayer className="audio__player" src="/audio/ep1.mp3" />
      <details>
        <summary>View Transcript</summary>
        <p>
          John Donvan: Hello and welcome to my podcast. My name is John and my
          guest today is Russell Trandahl, President and CEO of Biodefense at
          Arlington BioLabs. If you're interested in our podcast, you should
          check out the Youtube channel and our Twitter. I'm a new contributor
          to it and really encourage you all to listen to the newest episodes.
          Last month was the anniversary of the 9/11 terrorist attack, and in
          celebration we talk about both, our feeling of patriotism and our
          advocacy and work for national security. So, Russell, welcome to the
          podcast.
        </p>
        <p>Russell Trandahl: Thank you, John. I'm honored to be here today.</p>
        <p>
          John Donvan: So, the world's coming to an end in, I think it's
          September 21st, but let's give it a week. Russell, what do we know
          about the world today?
        </p>
        <p>
          Russell Trandahl: Well, the world is about the same as it was
          yesterday. We're still running a war on terror that is failing, and
          we're still flooding the planet with both traditional and nuclear
          weapons. I'm excited, John, because you have put together such an
          exciting idea. You've got this four-armed predator to take down this
          one-armed predator. I want to ask you, what I call a great question,
          which is what if. What if we harnessed the power of this octopus and,
          instead of chasing it with this great octopus, you had a very fast
          speed boat that was using stealth and propelled by sunlight? We're in
          the basement of humanity's species. We have a nuclear arsenal that is
          unacceptably high, and we have now of a kind of three oceans on the
          planet that are dead to humans. How can we jumpstart the species, take
          ourselves to the next level, have fun doing it, create trillions of
          dollars in value, while we rebuild our cities? And not have a version
          of this next episode, which we have been playing out for almost -- for
          a century -- which is going to be nuclear apocalypse.
        </p>

        <p>
          John Donvan: So, you make the point that when you are talking about
          thinking about how we have to stop the nuclear arms race that, as
          Russell says, it's been going on for a century. And, you know, I think
          of, you know, the next episode of my life where we're all going to
          die, and my kids are going to be aghast and ask me what in God's name
          did I do, why didn't I intervene in that future? And that's why I
          think of nuclear Armageddon.
        </p>
        <p>
          Russell Trandahl: Now, there's no question that there's lots of very
          important work going on, and no one would argue that any of this is
          trivial. The challenge that we face is that in the last 25 years, we
          have made no progress at all, I think, in how we think about what
          we're trying to do. But, I do think that our current paradigm about
          war that is still being fought over 20-year periods that, you know, of
          the last ten years is really an anachronism that should be brought to
          a close. For me, the point is that I would look at how this fiscal
          year is being structured and if you are spending money from the
          defense budget in trying to build weapons that you don't have the
          ammunition for that is really a waste of a lot of money. And, so, I
          think we've got to embrace a much more technological way of doing
          things. And that's one of the things that Arlington BioLabs has been
          doing, is working on both old problems but also on new problems,
          working on technologies for the military to use that are actually
          meaningful. So, let me be more specific, because I know it's hard to
          explain, but it's actually very simple to look at our Defense
          Department today, which is trying to do a lot of stuff: we've got the
          military, which is trying to be forward deployed around the planet,
          we've got the Special Operations, which are the ones who have, you
          know, gone to the dark side, and we have lots and lots of military
          work. The big problem is that they have no place to test these
          technologies. If you went to the Pentagon and said, "I'm going to make
          a nuclear bomb that doesn't work," I don't think they would say, "That
          sounds exciting." So, what they're trying to do is build missiles.
          It's really hard to do that because, first, we don't really know how
          to make the right kind of missiles, and the right kind of missiles
          have to be safe. So, they have to go through a process that is
          extraordinary and is every bit as risky as it is successful, and can
          be failed.
        </p>
        <p>
          John Donvan: So, the traditional weapons testing process is sort of
          backwards. It's, if you get a missile and you fire it and it doesn't
          go where you want it to go, you redesign it; if you don't, you don't.
          So, the mission of missile testing is to get the missile where you
          want it to go. The point of your example is the mission of testing a
          new nuclear weapon is to make sure that it doesn't go where you don't
          want it to go. I don't think this is an intractable problem. And, part
          of the problem, I think, that we have right now in the nuclear
          deterrence architecture, is that we have got the United States and
          Russia and China, who have hundreds of thousands of warheads...
        </p>
        <p>
          Russell Trandahl: ...each trying to make sure that their bombs go
          where they are going, when they are supposed to...
        </p>
        <p>John Donvan: ...now, we had the Cold War...</p>
        <p>
          Russell Trandahl: ...which kind of solved this problem. So, that's the
          one it solved, which is not at all the problem we have today...
        </p>
        <p>
          John Donvan: It is a huge problem, and we should be asking questions
          about what we have to do to test them. Now, the question I asked at
          the beginning of our conversation is--that's the question we are
          facing today: What should we be doing to maintain a credible
          deterrent, and to do that we need a policy that is much better.
        </p>
      </details>
      <h3>Episode 2: Cupcakes Et Al.</h3>
      <AudioPlayer className="audio__player" src="/audio/ep2.mp3" />
      <details>
        <summary>View Transcript</summary>
        <p>
          I have something to share with you today. I got a call from the
          husband last night and he wanted me to make sure I told you about this
          delicious cupcake he made. It was originally only supposed to be for
          work, but it was a HUGE hit. He was worried that it wouldn't be enough
          for dinner, so he made a chocolate version. He also made another
          peanut butter cupcake, but didn't have any left over so it was the
          chocolate version of the peanut butter cupcake. Which is really an
          ugly name. I will be going back to pink soon. So the peanut butter
          cupcakes are a little funny looking because the peanut butter that
          makes up the cupcake isn't very "swirled." The first picture is the
          peanut butter cupcake with the chocolate glaze, the second is the
          chocolate version of the cupcake. I think both are so awesome that I'm
          having a hard time deciding which I like better. Aurella's first
          surgery was done on March 13. She had a g - tube placed so she would
          get nutrition. They were able to accomplish this with her prior to
          starting any type of oral stimulation, since she doesn't move her
          mouth. There was a lot that had to be done in order to get her a g -
          tube. When she was born, she was unable to breastfeed because she was
          so small. I attempted to nurse, but that didn't last long. We couldn't
          keep up with her tiny little body. So she was bottle fed. When she got
          to the hospital, the nurse at the time had taken care of us before and
          offered to continue taking care of Aurella. I don't remember how she
          went about finding out what was wrong with Aurella, but she wanted to
          know what would be the best way to feed her. The nurse asked if she
          had any oral stimulation and I said she could suck on a pacifier or a
          bottle, but no that's all she used. That was how she gained weight
          initially. I remember the nurse asking me how she got food into
          Aurella. I honestly didn't have an answer. I knew there had to be
          something, but I had no idea what. So the nurse took Aurella from my
          arms and put her on the scale. Sure enough she had a few ounces of
          food, so she put her back on my chest. A few minutes later I had a
          warm little pinkie in my mouth. I didn't even realize I was sucking on
          it, it just happened. That same nurse came back and reminded me I
          could try again and also wanted to let me know how to help Aurella
          eat. She asked me if she was on any meds to help her eat. When I told
          her she was being fed through her g - tube, she said that she may not
          even be hungry and that I needed to feed her every hour. I was to
          offer her at least 8 - 10 ounces of anything, whether it be formula or
          breast milk, or a bottle. She would start off at the smallest amount,
          then they would bump her up. So as soon as we got her home, I started
          waking her up every 3 hours.
        </p>
      </details>
      <h3>Episode 3: Today's News</h3>
      <AudioPlayer className="audio__player" src="/audio/ep3.mp3" />
      <details>
        <summary>View Transcript</summary>
        <p>
          Today's news: Recruiting doesn't always pay. Résumés, tests, getting
          out there – is this all even worthwhile? President Trump's first
          priority. The NCAA's answer? Better negotiate. Don't bother asking for
          a loan, then. How to speed up a credit recovery program. FCC must act
          on data collection requirements. College basketball: What happens
          next? The scandal has shocked the sport. Finals season: Are you
          confused by the new deadlines? Some free agents did what teams usually
          don't do – they waited until July to sign. My favorite dating app will
          move to the summer, too. Loveflutter may be adding a new feature.
          Colleges take a plunge on conference realignment. Partisan politics
          and NCAA rules are influencing decisions. College football's new early
          signing period offers more mystery. With a 30-day window and a slew of
          Power 5 recruits. Make your decision now, and your children will thank
          you. Go here to see what college needs to do to improve. Should you be
          friends with your child's college roommate? Your personal best. Want
          to better prepare for college? Talk to someone who has been there.
          Researchers at UCLA say most students need more money. Where to start
          paying off your college debt. See how much you'll be paying when you
          are done. Delay your college decision. The sooner you finish, the less
          you'll have to pay. Why many consumers feel overwhelmed. Financial-aid
          expert Todd Berger has advice for navigating the educational-loan
          maze. Why going to college is more expensive than ever. "Money is
          being funneled into marketing, not education." Elsewhere on
          MarketWatch. Trump's new top adviser is former Breitbart editor Steve
          Bannon. President Donald Trump announced on Friday he is appointing
          former Breitbart News editor Steve Bannon to be his chief strategist
          in the White House. Trump hasn't given up on TPP deal, despite his
          resistance. Trump talked up the Trans-Pacific Partnership deal on
          Friday as an example of how he will get tough on trade and
          globalization.
        </p>
      </details>
    </StListen>
  );
}
