import React, { useState } from "react";
import { Button } from "react-bootstrap";

import AdditionalSkills from "./AdditionalSkills";

function ButtonMoreSkills() {
  const [displaySkills, setDisplaySkills] = useState(false);

  return (
    <>
      <div>
        
        <Button
          className="mb-4"
          onClick={() => setDisplaySkills(!displaySkills)}
          variant="outline-info"
        >
          {" "}
          {!displaySkills ? "Show More Skills" : "Hide Skills"}
        </Button>
      </div>
      {!displaySkills ? null :(
          <AdditionalSkills/>
        ) }
    </>
  );
}

export default ButtonMoreSkills;
