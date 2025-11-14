import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};


import { BlackBoard, BlackBoardInput } from "@/components/blackboard";

const ImageHeroLogo = "/images/sausage_logo_art.png";

const RatingVote = ({ name }: { name: string }) => {
  return (
    <>
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="star">★</span>
    </>
  );
};

export default function Page() {
  return (
    <>
      <div className="w-full p-4    sm:p-6   bg-red-100">
        <div className="grid  gap-8 ">
          <div className="relative sm:rounded-lg"></div>

          <img
            src={ImageHeroLogo}
            alt=""
            className="flex-shrink-0  max-w-sm mx-auto "
          />
        </div>

        <BlackBoard>

<div className="w-full">
<form className=" mx-auto  ">

  <select id="small" className="block  px-3 py-2.5  bg-black-100 mb-4 ">
    <option selected>SELECT A LOCATION</option>
    <option value="VIC">VIC</option>
    <option value="NSW">NSW</option>
    <option value="SA">SA</option>
    
  </select>

    <select id="small" className="block w-full px-3 py-2.5  bg-black-100 mb-4">
    <option selected>BBQ GROUP TYPE </option>
    <option value="VIC">CRICKET CLUB</option>
    <option value="NSW">NETBALL CLUB</option>
    <option value="SA">KINDERGARTEN</option>
    
  </select>
 



          

{/* */}
      
  <div className=" ">
		<label className="control-label ">SNAG</label>
              &nbsp;&nbsp;&nbsp; &nbsp;

		<div className="star-rating ">
			<input id="snag-5" type="radio" name="snag_rating" value="5" />
			<label for="snag-5" title="5 stars">★</label>
			&nbsp;
			<input id="snag-4" type="radio" name="snag_rating" value="4" />
			<label for="snag-4" title="4 stars">★</label>
			&nbsp;
			<input id="snag-3" type="radio" name="snag_rating" value="3" />
			<label for="snag-3" title="3 stars">★</label>
			&nbsp;
			<input id="snag-2" type="radio" name="snag_rating" value="2" />
			<label for="snag-2" title="2 stars">★</label>
			&nbsp;
			<input id="snag-1" type="radio" name="snag_rating" value="1" />
			<label for="snag-1" title="1 star">★</label>
              </div>
             </div>   
 
          {/* Can be left empty*/}
            <div className="">
		<label className="control-label">ONIONS</label>
		&nbsp;&nbsp;&nbsp; &nbsp;
		<div className="star-rating">
			<input id="onion-5" type="radio" name="onion_rating" value="5" />
			<label for="onion-5" title="5 stars">★</label>
			&nbsp;
			<input id="onion-4" type="radio" name="onion_rating" value="4" />
			<label for="onion-4" title="4 stars">★</label>
			&nbsp;
			<input id="onion-3" type="radio" name="onion_rating" value="3" />
			<label for="onion-3" title="3 stars">★</label>
			&nbsp;
			<input id="onion-2" type="radio" name="onion_rating" value="2" />
			<label for="onion-2" title="2 stars">★</label>
			&nbsp;
			<input id="onion-1" type="radio" name="onion_rating" value="1" />
			<label for="onion-1" title="1 star">★</label>
              </div>
              
            </div>


               
            <div className="">
		<label className="control-label ">BREAD FRESHNESS</label>
		&nbsp;&nbsp;&nbsp; &nbsp;
		<div className="star-rating ">
			<input id="bread-5" type="radio" name="bread_rating" value="5" />
			<label for="bread-5" title="5 stars">★</label>
			&nbsp;
			<input id="bread-4" type="radio" name="bread_rating" value="4" />
			<label for="bread-4" title="4 stars">★</label>
			&nbsp;
			<input id="bread-3" type="radio" name="bread_rating" value="3" />
			<label for="bread-3" title="3 stars">★</label>
			&nbsp;
			<input id="bread-2" type="radio" name="bread_rating" value="2" />
			<label for="bread-2" title="2 stars">★</label>
			&nbsp;
			<input id="bread-1" type="radio" name="bread_rating" value="1" />
			<label for="bread-1" title="1 star">★</label>
              </div>
              
            </div> 
                  
            <div className="">
		<label className="control-label">SAUCE CHOICES</label>
		&nbsp;&nbsp;&nbsp; &nbsp;
		<div className="star-rating">
			<input id="sauce-5" type="radio" name="sauce_rating" value="5" />
			<label for="sauce-5" title="5 stars">★</label>
			&nbsp;
			<input id="sauce-4" type="radio" name="sauce_rating" value="4" />
			<label for="sauce-4" title="4 stars">★</label>
			&nbsp;
			<input id="sauce-3" type="radio" name="sauce_rating" value="3" />
			<label for="sauce-3" title="3 stars">★</label>
			&nbsp;
			<input id="sauce-2" type="radio" name="sauce_rating" value="2" />
			<label for="sauce-2" title="2 stars">★</label>
			&nbsp;
			<input id="sauce-1" type="radio" name="sauce_rating" value="1" />
			<label for="sauce-1" title="1 star">★</label>
              </div>
              
              </div>
              
                 
              
	<label className="control-label">ONION PLACEMENT</label>
              <div className="flex col">
                
    <div className="flex items-center me-4">
        <input id="onion-top" type="radio" value="" name="inline-radio-group" className="w-7 h-7 border-default-medium rounded-full border border-default "/>
        <label for="onion-top" className="select-none ms-2  font-medium text-heading">TOP</label>
    </div>
    <div className="flex items-center me-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-7 h-7 border-default-medium rounded-full border border-default "/>
        <label for="inline-2-radio" className="select-none ms-2 font-medium text-heading">BOTTOM</label>
    </div>
   
</div>



            <div className="bg-amber-400 rounded p-4 ">
              <button className="button btn font-black-100" type="submit">Vote</button>
            </div>
            </form>
            </div>
        </BlackBoard>
      </div>
    </>
  );
}
