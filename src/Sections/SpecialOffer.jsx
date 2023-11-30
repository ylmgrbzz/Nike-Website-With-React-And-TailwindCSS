import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section>
      <div className="  ">
        <div>
          <img />
        </div>
        <div>
          <h2 className="text-4xl font-palanquin font-bold">
            <span className="text-coral-red">Special </span>
            Offer
          </h2>
          <p className="mt-4 info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </div>
        <div>
          <Button />
          <Button />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
