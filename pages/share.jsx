import React, { useContext } from 'react';
import cmsContext from '../context/cms';
import { getCmsRecordFromKey } from '../utils/cms';
import Interweave from 'interweave';

const Share = () => {
  const cms = useContext(cmsContext);
  const content = getCmsRecordFromKey('share', cms);

  return <section className="grid-container usa-section" id="share">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-8 usa-prose">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
          {content.title}
        </h2>
        <p>
          <Interweave content={content.body_en} />
        </p>
      </div>
    </div>
  </section>
}

export default Share;