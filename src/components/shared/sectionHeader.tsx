import React from 'react';

interface Props {
  header: string;
}

export default function SectionHeader(props:Props): JSX.Element {
  return (
    <div className="row">
      <div className="col">
        <h2 className="section-header">{props.header}</h2>
        <hr />
      </div>
    </div>
  );
}
