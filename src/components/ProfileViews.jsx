import React, { useEffect, useState } from 'react';
import { db, ref, get, set } from '../firebase.js';
import CountUp from 'react-countup';

const ProfileViews = () => {
  const [views, setViewsState] = useState(0);
  const [prevViews, setPrevViews] = useState(0);

  useEffect(() => {
    const viewsRef = ref(db, '/views');

    get(viewsRef).then((snapshot) => {
      if (snapshot.exists() && snapshot.val().views !== undefined) {
        const currentViews = snapshot.val().views;
        const newViews = currentViews + 1;

        setPrevViews(currentViews);        // Save old value for animation
        set(viewsRef, { views: newViews }); // Update Firebase
        setViewsState(newViews);           // Update state
      } else {
        set(viewsRef, { views: 1 });
        setViewsState(1);
        setPrevViews(0);
      }
    }).catch((error) => {
      console.error('Error fetching views:', error);
    });
  }, []);

  return (
    <div className='poppins-medium text-xl md:text-2xl mt-2'>
      Profile Views: <strong>
        <CountUp start={0} end={views} duration={2} />
      </strong>
    </div>
  );
};

export default ProfileViews;
