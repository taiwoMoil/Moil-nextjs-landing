import React from 'react';

const FeatureItem = ({ header, text, icon }: { header: string, text: string, icon: React.ReactNode }) => {
  return (
    <div className="flex-col justify-start items-center gap-4 inline-flex">
      <div className="p-5 shadow feature_shadow rounded-full">
        {icon} {/* Render the icon component here */}
      </div>
      <div className="text-slate-900 text-base font-medium font-Poppins">
        {header}
      </div>
      <div className="text-center text-neutral-500 text-sm font-normal font-Poppins leading-[16.80px]">
        {text}
      </div>
    </div>
  );
};

export default FeatureItem;
