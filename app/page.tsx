import type { Metadata } from "next";

import Link from "next/link";
import { FetchHighScore, HighScoreRecord } from "./components/highscore";

export const metadata: Metadata = {
  title: "Snag App",
  description: "Snags",
};

const LocationLink = ({ name }: { name: string }) => {
  return (
    <>
      <button
        type="button"
        className=" p-2  text-lg font-bold text-gray-900 rounded-s-lg"
      >
        {name}
      </button>
    </>
  );
};

const BlackBoard = ({ children }: { children: any }) => {
  return (
    <>
      <div
        className="bg-black-100 text-4xl  p-5 text-center uppercase font-stretch-ultra-condensed"
        style={{
          fontFamily: "mogra",
        }}
      >
        {children}
      </div>
    </>
  );
};

const Leaderboard = ({
  location,
  children,
}: {
  location: string;
  children: any;
}) => {
  return (
    <>
      <span>{location} Leaderboard</span>
      <div className="grid">{children}</div>
    </>
  );
};


const LeaderUI = async ({location} :{location:string}) => { 
  const locationScores = await FetchHighScore(location);
  return (
    <>
      {locationScores.map((group: HighScoreRecord, index: number ) => (
        <Leader position={index+1} name={group.group_name} rating={group.rating} votes={group.votes} />
      ))}
      </>
  )
}

const Leader = ({
  name,
  position,
  rating,
  votes,
}: {
  name: string;
  position: number;
  rating: number;
  votes: number;
}) => {
  /* Convert 1 into st, etc */
  let lastDigit: number = position % 10;
  var positionSuffix = "??";
  switch (lastDigit) {
    case 1:
      positionSuffix = "st";
      break;
    case 2:
      positionSuffix = "nd";
      break;
    case 3:
      positionSuffix = "rd";
      break;
    default:
      positionSuffix = "th";
  }

  return (
    <>
      <div className="col-1 m-5 grid">
        <span>
          {position}
          {positionSuffix} {name}
        </span>
        <span className="text-xl">
          rating({rating.toFixed(1)}) votes({votes})
        </span>
      </div>
    </>
  );
};



const ImageHeroLogo = "/images/sausage_logo_art.png";



export default function Page() {

  const hs = LeaderUI({location: "vic"});

  return (
    <>
      <div className="w-full   bg-red-100">
        <div className="grid">
          <div className="relative sm:rounded-lg"></div>

          <img
            src={ImageHeroLogo}
            alt=""
            className="flex-shrink-0 max-w-sm mx-auto -mb-10 "
          />

          <h2 className="  text-xl font-bold text-center  p-3 -mb-3">
            WHO MAKES THE BEST HARDWARE STORE SNAGS?
          </h2>
        </div>

        <div className="text-center ">
          <div className="">
            <LocationLink name="VIC" />
            <LocationLink name="NSW/ACT" />
           
            <LocationLink name="QLD" />
            <LocationLink name="SA" />
            <LocationLink name="WA" />
            <LocationLink name="TAS" />
            <LocationLink name="NT" />
            <LocationLink name="NZ" />
          </div>
        </div>
      </div>

  

      <BlackBoard>





        
        <Leaderboard location="VIC">
          {hs}
          {/* 
            <Leader position={1} name="Cricket Clubs" rating={4.5} votes={104} />
            <Leader position={2} name="Mens Shed" rating={4.3} votes={56} />
            <Leader position={3} name="Primary School" rating={3.5} votes={14} />
            <Leader position={4} name="Footy Clubs" rating={3.2} votes={45} />
          */}
        </Leaderboard>

        <div className="w-full p-4 sm:p-6">
        <div className="grid  ">
            <p className="  text-2xl font-bold text-center"> VIC LIKES THEIR ONIONS</p>
            <p className="  text-2xl font-bold text-center"> BELOW</p>
        </div>
      </div>
      </BlackBoard>

      <div className="w-full p-4 sm:p-6 bg-red-100">
        <div className="grid  gap-8 ">
          <h2 className="  text-3xl font-bold m-3 text-center">
            <Link href="/vote">VOTE NOW</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
