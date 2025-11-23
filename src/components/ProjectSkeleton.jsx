import React from 'react';

export const ProjectSkeleton = () => (
    <div className="w-30 max-w-96 flex flex-col gap-2 m-4 p-4 rounded-lg bg-base-200 animate-pulse">
        <div className="w-full h-48 bg-base-300 rounded-lg"></div>
        <div className="h-6 bg-base-300 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-base-300 rounded w-full"></div>
        <div className="h-4 bg-base-300 rounded w-5/6"></div>
        <div className="flex gap-2 mt-2">
            <div className="h-10 bg-base-300 rounded-full flex-1"></div>
            <div className="h-10 bg-base-300 rounded-full flex-1"></div>
        </div>
    </div>
);

export default ProjectSkeleton;
