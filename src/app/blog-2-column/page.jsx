import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import React from "react";

export const metadata = {
  title: "Eideas - Blog  ",
};

const Blog2Column = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-2-column" title="Blog 2 Column" bannerImg="Blog.jpg" >
        {/* <Blog2ColumnContent /> */}
      <main style={{display:'flex', flexDirection:"column",alignItems:"center", height:"100%", justifyContent:"center", paddingLeft:"20px", paddingRight:"20px"}}><div class="text-box1">
          <h1> ჩვენი გუნდის წევრის კვლევები და სტატიები </h1>
        </div>

        <section  class="Publications">
          <h2> გამოქვეყნებული ნაშრომები </h2>

          <h4>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168900220307348">
         
              Development of a multi-channel power supply for silicon
              photomultipliers reading out inorganic scintillators
            </a>
          </h4>
          <p>
            O.Javakhishvili et al. – “Development of a multi-channel power
            supply for silicon photomultipliers reading out inorganic
            scintillators”, NIMA 977, 164337 (2020)
          </p>

          <h4>
            <a href="https://www.researchgate.net/publication/347344491_A_new_beam_polarimeter_at_COSY_to_search_for_electric_dipole_moments_of_charged_particles">
              A new beam polarimeter at COSY to search for electric dipole
              moments of charged particles{" "}
            </a>
          </h4>
          <p>
            F. Müller, O.Javakhishvili et al. – “A new beam polarimeter at COSY
            to search for electric dipole moments of charged particles”, JINST
            15, P12005 (2020)
          </p>

          <h4>
            <a href="https://www.scopus.com/record/display.uri?eid=2-s2.0-85093834687&origin=inward&txGid=673e5115ec753a1cbca7389fd420069b">
              Development of a dedicated precision polarimeter for charged
              particle EDM searches at COSY{" "}
            </a>
          </h4>
          <p>
            I. Keshelashvili, O.Javakhishvili, D. Mchedlishvili, D.
            Shergelashvili et al. – “Development of a dedicated precision
            polarimeter for charged particle EDM searches at COSY”, JEDI, 163846
            (2019).
          </p>
        </section></main>  
      </LayoutStyle7>
    </>
  );
};

export default Blog2Column;
