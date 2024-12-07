import React from 'react';

function Topic({ head1, head2 }) {
  return (
    <div className="w-full flex justify-center pb-8">
      <h1 className="text-center text-3xl font-thin w-[300px] md:border-b md:border-cyan-p50 text-cyan-100">
        {head1} <span className="font-semibold">{head2}</span>
      </h1>
    </div>
  );
}

export default Topic;
