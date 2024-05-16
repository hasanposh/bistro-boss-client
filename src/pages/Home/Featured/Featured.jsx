import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturedImage from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="bg-center bg-cover bg-fixed text-white" style={{
        backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.9),rgba(0,0,0,0.3)),url(${feturedImage})`,
      }}>
      <div className="flex justc">
        <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />
      </div>
      <div
        
        className={`md:flex justify-center items-center py-20 px-36 `}
      >
        <div>
          <img src={feturedImage} alt="" />
        </div>
        <div className="md:ml-10 space-y-4">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Objectively disseminate alternative total linkage after
            out-of-the-box infomediaries. Professionally seize compelling
            processes for effective alignments. Compellingly reinvent intuitive
            data with open-source benefits. Appropriately productize excellent
            human capital without 2.0 resources. Rapidiously iterate adaptive
            infrastructures via emerging action items. Dynamically grow top-line
            information after resource-leveling process improvements.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-8 border-white text-white">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
